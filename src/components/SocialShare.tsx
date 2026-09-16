import { useState } from "react";
import { Share2, Check, Copy, MessageCircle, Send } from "lucide-react";

interface SocialShareProps {
  title?: string;
  url?: string;
  summary?: string;
  className?: string;
  compact?: boolean;
}

export default function SocialShare({
  title = "Ihiala Tech Rise - Empowering Communities Through Tech",
  url = typeof window !== "undefined" ? window.location.href : "https://ihialatechrise.org",
  summary = "Join the tech revolution in Ihiala LGA! Free hands-on tech training in Web Development, Digital Literacy, Graphic Design & Data Science.",
  className = "",
  compact = false,
}: SocialShareProps) {
  const [copied, setCopied] = useState(false);

  const shareUrl = encodeURIComponent(url);
  const shareText = encodeURIComponent(`${title}\n${summary}`);

  const shareChannels = [
    {
      name: "WhatsApp",
      icon: <MessageCircle className="w-4 h-4" />,
      href: `https://api.whatsapp.com/send?text=${shareText}%20${shareUrl}`,
      bg: "bg-[#25D366] hover:bg-[#20ba5a] text-white",
    },
    {
      name: "X (Twitter)",
      icon: (
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      ),
      href: `https://twitter.com/intent/tweet?text=${shareText}&url=${shareUrl}`,
      bg: "bg-black hover:bg-neutral-800 text-white",
    },
    {
      name: "Telegram",
      icon: <Send className="w-4 h-4" />,
      href: `https://t.me/share/url?url=${shareUrl}&text=${shareText}`,
      bg: "bg-[#24A1DE] hover:bg-[#1f8cbe] text-white",
    },
    {
      name: "Facebook",
      icon: (
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        </svg>
      ),
      href: `https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`,
      bg: "bg-[#1877F2] hover:bg-[#1464c9] text-white",
    },
    {
      name: "LinkedIn",
      icon: (
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
        </svg>
      ),
      href: `https://www.linkedin.com/sharing/share-offsite/?url=${shareUrl}`,
      bg: "bg-[#0A66C2] hover:bg-[#084e96] text-white",
    },
  ];

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // Fallback
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  const handleNativeShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title,
          text: summary,
          url,
        });
      } catch {
        // Ignored or dismissed
      }
    }
  };

  if (compact) {
    return (
      <div className={`flex items-center gap-2 ${className}`}>
        {shareChannels.slice(0, 3).map((ch) => (
          <a
            key={ch.name}
            href={ch.href}
            target="_blank"
            rel="noopener noreferrer"
            title={`Share on ${ch.name}`}
            className={`p-2 rounded-full transition-all duration-200 ${ch.bg} shadow-sm`}
          >
            {ch.icon}
          </a>
        ))}
        <button
          onClick={handleCopy}
          title="Copy Link"
          className="p-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-full transition-all"
        >
          {copied ? <Check className="w-4 h-4 text-green-600" /> : <Copy className="w-4 h-4" />}
        </button>
      </div>
    );
  }

  return (
    <div className={`bg-white rounded-3xl p-6 md:p-8 border border-primary/5 shadow-lg ${className}`}>
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
        <div className="flex items-center gap-3">
          <div className="p-3 bg-secondary/10 rounded-2xl text-secondary">
            <Share2 className="w-5 h-5" />
          </div>
          <div>
            <h4 className="font-bold text-primary text-lg">Share with Friends & Family</h4>
            <p className="text-xs text-primary/50">Help empower more youths across Ihiala Local Government</p>
          </div>
        </div>

        {typeof navigator !== "undefined" && typeof navigator.share === "function" && (
          <button
            onClick={handleNativeShare}
            className="md:hidden flex items-center justify-center gap-2 bg-primary text-white py-2.5 px-4 rounded-xl text-xs font-bold shadow hover:brightness-110 transition-all"
          >
            <Share2 className="w-4 h-4" /> Share Directly
          </button>
        )}
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
        {shareChannels.map((channel) => (
          <a
            key={channel.name}
            href={channel.href}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center justify-center gap-2 py-3 px-3 rounded-2xl font-semibold text-xs transition-all duration-200 shadow-sm hover:scale-105 active:scale-95 ${channel.bg}`}
          >
            {channel.icon}
            <span>{channel.name}</span>
          </a>
        ))}

        <button
          onClick={handleCopy}
          className={`flex items-center justify-center gap-2 py-3 px-3 rounded-2xl font-semibold text-xs transition-all duration-200 border border-primary/10 shadow-sm hover:scale-105 active:scale-95 ${
            copied ? "bg-green-50 text-green-700 border-green-300" : "bg-background text-primary hover:bg-primary/5"
          }`}
        >
          {copied ? (
            <>
              <Check className="w-4 h-4 text-green-600" />
              <span>Copied!</span>
            </>
          ) : (
            <>
              <Copy className="w-4 h-4" />
              <span>Copy Link</span>
            </>
          )}
        </button>
      </div>
    </div>
  );
}
