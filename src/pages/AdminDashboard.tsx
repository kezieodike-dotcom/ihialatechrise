import { useEffect, useState } from "react";
import { supabase } from "../lib/supabase";
import { motion } from "motion/react";
import { Users, BookOpen, Clock, CheckCircle, Download, Search, Filter } from "lucide-react";

interface Application {
  id: string;
  full_name: string;
  email: string;
  phone: string;
  track: string;
  status: string;
  created_at: string;
}

export default function AdminDashboard() {
  const [applications, setApplications] = useState<Application[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetchApplications();
  }, []);

  async function fetchApplications() {
    try {
      setLoading(true);
      const { data, error } = await supabase
        .from('applications')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setApplications(data || []);
    } catch (error) {
      console.error('Error fetching applications:', error);
    } finally {
      setLoading(false);
    }
  }

  const filteredApps = applications.filter(app => 
    app.full_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    app.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    app.track.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const stats = [
    { label: "Total Applications", value: applications.length, icon: Users, color: "bg-blue-500" },
    { label: "Pending Review", value: applications.filter(a => a.status === 'pending').length, icon: Clock, color: "bg-orange-500" },
    { label: "Accepted", value: applications.filter(a => a.status === 'accepted').length, icon: CheckCircle, color: "bg-green-500" },
    { label: "Web Dev Tracks", value: applications.filter(a => a.track.includes('Web')).length, icon: BookOpen, color: "bg-purple-500" },
  ];

  return (
    <div className="min-h-screen bg-background pt-20 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-black text-primary tracking-tight">Admin Dashboard</h1>
            <p className="text-primary/50 text-sm">Monitor student applications and platform growth.</p>
          </div>
          <div className="flex items-center gap-3">
            <button 
              onClick={fetchApplications}
              className="px-4 py-2 bg-white border border-primary/10 rounded-xl text-sm font-bold text-primary hover:bg-primary/5 transition-all flex items-center gap-2"
            >
              <Clock className="w-4 h-4" /> Refresh
            </button>
            <button className="px-4 py-2 bg-primary text-white rounded-xl text-sm font-bold hover:brightness-110 transition-all flex items-center gap-2">
              <Download className="w-4 h-4" /> Export CSV
            </button>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, idx) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white p-6 rounded-3xl border border-primary/5 shadow-sm"
            >
              <div className="flex items-center gap-4">
                <div className={`${stat.color} p-3 rounded-2xl text-white shadow-lg shadow-black/5`}>
                  <stat.icon className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs font-bold text-primary/40 uppercase tracking-widest">{stat.label}</p>
                  <p className="text-2xl font-black text-primary">{stat.value}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Table Section */}
        <div className="bg-white rounded-[2.5rem] border border-primary/5 shadow-xl overflow-hidden">
          <div className="p-8 border-b border-primary/5 flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="relative flex-grow max-w-md">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-primary/30" />
              <input 
                type="text" 
                placeholder="Search applicants..." 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-background border-none rounded-2xl focus:ring-2 focus:ring-secondary transition-all"
              />
            </div>
            <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0">
              <button className="whitespace-nowrap px-4 py-2 bg-background rounded-xl text-xs font-bold text-primary/60 hover:text-primary transition-all flex items-center gap-2">
                <Filter className="w-4 h-4" /> All Tracks
              </button>
              <button className="whitespace-nowrap px-4 py-2 bg-background rounded-xl text-xs font-bold text-primary/60 hover:text-primary transition-all">Pending</button>
              <button className="whitespace-nowrap px-4 py-2 bg-background rounded-xl text-xs font-bold text-primary/60 hover:text-primary transition-all">Accepted</button>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-background/50">
                  <th className="px-8 py-4 text-[10px] font-bold text-primary/40 uppercase tracking-widest">Applicant</th>
                  <th className="px-8 py-4 text-[10px] font-bold text-primary/40 uppercase tracking-widest">Track</th>
                  <th className="px-8 py-4 text-[10px] font-bold text-primary/40 uppercase tracking-widest">Status</th>
                  <th className="px-8 py-4 text-[10px] font-bold text-primary/40 uppercase tracking-widest">Date</th>
                  <th className="px-8 py-4 text-[10px] font-bold text-primary/40 uppercase tracking-widest text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-primary/5">
                {loading ? (
                  <tr>
                    <td colSpan={5} className="px-8 py-20 text-center text-primary/30 animate-pulse">Loading applications...</td>
                  </tr>
                ) : filteredApps.length === 0 ? (
                  <tr>
                    <td colSpan={5} className="px-8 py-20 text-center text-primary/30">No applications found.</td>
                  </tr>
                ) : filteredApps.map((app) => (
                  <tr key={app.id} className="hover:bg-primary/5 transition-colors group">
                    <td className="px-8 py-5">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center text-secondary font-bold">
                          {app.full_name[0]}
                        </div>
                        <div>
                          <p className="font-bold text-primary">{app.full_name}</p>
                          <p className="text-xs text-primary/40 lowercase">{app.email}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-8 py-5">
                      <span className="px-3 py-1 bg-background rounded-full text-[10px] font-bold text-primary/60 border border-primary/5">
                        {app.track}
                      </span>
                    </td>
                    <td className="px-8 py-5">
                      <div className="flex items-center gap-2">
                        <div className={`w-2 h-2 rounded-full ${app.status === 'accepted' ? 'bg-green-500' : 'bg-orange-500'}`} />
                        <span className="text-xs font-medium text-primary/70 capitalize">{app.status}</span>
                      </div>
                    </td>
                    <td className="px-8 py-5 text-xs text-primary/40">
                      {new Date(app.created_at).toLocaleDateString()}
                    </td>
                    <td className="px-8 py-5 text-right">
                      <button className="text-xs font-bold text-secondary hover:underline">View Details</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
