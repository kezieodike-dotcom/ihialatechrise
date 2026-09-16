import { useEffect } from "react";
import { useLocation } from "react-router-dom";

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  image?: string;
  noindex?: boolean;
}

export default function SEO({
  title,
  description,
  keywords,
  image = "https://www.ihialatechrise.com/logo.png",
  noindex = false,
}: SEOProps) {
  const location = useLocation();
  const canonicalUrl = `https://www.ihialatechrise.com${location.pathname}`;

  useEffect(() => {
    // 1. Update Title
    const formattedTitle = title.includes("Ihiala Tech Rise")
      ? title
      : `${title} | Ihiala Tech Rise`;
    document.title = formattedTitle;

    // Helper to create or update meta tag
    const setMetaTag = (attributeName: string, attributeValue: string, content: string) => {
      let meta = document.querySelector(`meta[${attributeName}="${attributeValue}"]`);
      if (!meta) {
        meta = document.createElement("meta");
        meta.setAttribute(attributeName, attributeValue);
        document.head.appendChild(meta);
      }
      meta.setAttribute("content", content);
    };

    // Helper to update link tag
    const setLinkTag = (rel: string, href: string) => {
      let link = document.querySelector(`link[rel="${rel}"]`);
      if (!link) {
        link = document.createElement("link");
        link.setAttribute("rel", rel);
        document.head.appendChild(link);
      }
      link.setAttribute("href", href);
    };

    // 2. Primary Meta Tags
    setMetaTag("name", "title", formattedTitle);
    setMetaTag("name", "description", description);
    if (keywords) {
      setMetaTag("name", "keywords", keywords);
    }
    setMetaTag("name", "robots", noindex ? "noindex, nofollow" : "index, follow");

    // 3. Open Graph
    setMetaTag("property", "og:title", formattedTitle);
    setMetaTag("property", "og:description", description);
    setMetaTag("property", "og:url", canonicalUrl);
    setMetaTag("property", "og:image", image);

    // 4. Twitter
    setMetaTag("name", "twitter:title", formattedTitle);
    setMetaTag("name", "twitter:description", description);
    setMetaTag("name", "twitter:url", canonicalUrl);
    setMetaTag("name", "twitter:image", image);

    // 5. Canonical
    setLinkTag("canonical", canonicalUrl);
  }, [title, description, keywords, image, noindex, canonicalUrl]);

  return null;
}
