import React from "react";
import {
  Heart,
  Twitter,
  Github,
  Linkedin,
  Instagram,
  ExternalLink,
} from "lucide-react";

const Footer = () => {
  const footerLinks = [
    {
      title: "Social",
      links: [
        { name: "Twitter", href: "#", icon: <Twitter className="w-4 h-4" /> },
        { name: "GitHub", href: "#", icon: <Github className="w-4 h-4" /> },
        { name: "LinkedIn", href: "#", icon: <Linkedin className="w-4 h-4" /> },
        {
          name: "Instagram",
          href: "#",
          icon: <Instagram className="w-4 h-4" />,
        },
      ],
    },
    {
      title: "Resources",
      links: [
        { name: "Portfolio", href: "#" },
        { name: "Blog", href: "#" },
        { name: "Projects", href: "#" },
        { name: "Resume", href: "#" },
      ],
    },
    {
      title: "Legal",
      links: [
        { name: "Privacy Policy", href: "#" },
        { name: "Terms of Service", href: "#" },
      ],
    },
  ];

  return (
    <footer className="relative z-10 bg-gray-900/40 backdrop-blur-xl border-t border-gray-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <div className="col-span-2 md:col-span-1">
            <h2 className="text-2xl font-bold mb-4">
              <span className="bg-gradient-to-r from-purple-400 to-blue-500 text-transparent bg-clip-text">
                Abdul Rehman
              </span>
            </h2>
            <p className="text-gray-400 text-sm mb-4">
              Building digital experiences with modern web technologies. Focused
              on creating intuitive and performant web applications.
            </p>
          </div>

          {/* Link Sections */}
          {footerLinks.map((group) => (
            <div key={group.title}>
              <h3 className="text-gray-300 font-semibold mb-4">
                {group.title}
              </h3>
              <ul className="space-y-2">
                {group.links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-purple-400 text-sm flex items-center gap-2 transition-colors duration-200 group"
                    >
                      {"icon" in link ? (
                        <span className="group-hover:scale-110 transition-transform duration-200">
                          {link.icon}
                        </span>
                      ) : (
                        <ExternalLink className="w-3 h-3 inline opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                      )}
                      {link.name}
                      {"icon" in link ? null : (
                        <ExternalLink className="w-3 h-3 inline opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                      )}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800/50 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm text-center md:text-left">
              © {new Date().getFullYear()} Abdul Rehman. All rights reserved.
            </p>
            <p className="text-gray-400 text-sm flex items-center gap-1">
              Made with <Heart className="w-4 h-4 text-red-500 animate-pulse" />{" "}
              in Lucknow, India
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
