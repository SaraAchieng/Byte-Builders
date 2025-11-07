import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { createPageUrl } from '../utils';
import { Menu, X, Phone, Mail, MapPin } from "lucide-react";

const navigationItems = [
  { title: "Home", url: createPageUrl("Home") },
  { title: "About", url: createPageUrl("About") },
  { title: "Services", url: createPageUrl("Services") },
  { title: "Projects", url: createPageUrl("Projects") },
  { title: "Team", url: createPageUrl("Team") },
  { title: "Contact", url: createPageUrl("Contact") },
];

export default function Layout({ children, currentPageName }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-white/90 backdrop-blur-lg shadow-lg"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link
              to={createPageUrl("Home")}
              className="flex items-center space-x-2"
            >
              <div className="w-10 h-10 bg-gradient-to-br from-amber-500 to-amber-600 rounded-lg flex items-center justify-center transform hover:scale-105 transition-transform duration-300">
                <span className="text-white font-bold text-xl">B</span>
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">
                Byte Builders
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navigationItems.map((item) => (
                <Link
                  key={item.title}
                  to={item.url}
                  className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 hover:text-amber-500 ${
                    location.pathname === item.url
                      ? "text-amber-500"
                      : isScrolled
                      ? "text-slate-700"
                      : "text-white"
                  } group`}
                >
                  {item.title}
                  <span
                    className={`absolute bottom-0 left-0 w-full h-0.5 bg-amber-500 transform transition-transform duration-300 origin-left ${
                      location.pathname === item.url
                        ? "scale-x-100"
                        : "scale-x-0 group-hover:scale-x-100"
                    }`}
                  />
                </Link>
              ))}
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`md:hidden p-2 rounded-lg transition-colors duration-300 ${
                isScrolled ? "text-slate-700" : "text-white"
              }`}
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden transition-all duration-500 ${
            isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          } overflow-hidden bg-white/95 backdrop-blur-lg border-t border-slate-200`}
        >
          <div className="px-4 py-6 space-y-4">
            {navigationItems.map((item) => (
              <Link
                key={item.title}
                to={item.url}
                className={`block px-4 py-3 text-lg font-medium rounded-lg transition-all duration-300 ${
                  location.pathname === item.url
                    ? "text-amber-500 bg-amber-50"
                    : "text-slate-700 hover:text-amber-500 hover:bg-amber-50"
                }`}
              >
                {item.title}
              </Link>
            ))}
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="relative">{children}</main>

      {/* Footer */}
      <footer className="bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="space-y-6">
              <div className="flex items-center space-x-2">
                <div className="w-10 h-10 bg-gradient-to-br from-amber-500 to-amber-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xl">B</span>
                </div>
                <span className="text-2xl font-bold text-white">
                  Byte Builders
                </span>
              </div>
              <p className="text-slate-300 text-sm leading-relaxed">
                Professional construction services. Building dreams into reality with quality
                craftsmanship.
              </p>
            </div>

            {/* Quick Links */}
            <div className="space-y-6">
              <h3 className="text-lg font-semibold text-white">Quick Links</h3>
              <ul className="space-y-3">
                {navigationItems.slice(0, 6).map((item) => (
                  <li key={item.title}>
                    <Link
                      to={item.url}
                      className="text-slate-300 hover:text-amber-400 transition-colors duration-300 text-sm"
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div className="space-y-6">
              <h3 className="text-lg font-semibold text-white">Services</h3>
              <ul className="space-y-3 text-sm text-slate-300">
                <li>Residential Construction</li>
                <li>Commercial Building</li>
                <li>Home Renovation</li>
                <li>Project Management</li>
                <li>Consultation</li>
                <li>Design & Build</li>
              </ul>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              <h3 className="text-lg font-semibold text-white">Contact</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Phone className="w-4 h-4 text-amber-400 flex-shrink-0" />
                  <span className="text-slate-300 text-sm">+254 753318102</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-4 h-4 text-amber-400 flex-shrink-0" />
                  <span className="text-slate-300 text-sm">
                    info@bytebuilders.com
                  </span>
                </div>
                <div className="flex items-start space-x-3">
                  <MapPin className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-300 text-sm">
                    123 Construction Ave
                    <br />
                    Nairobi, Kenya
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-slate-700 mt-12 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-slate-400 text-sm">
                © 2024 Byte Builders. All rights reserved.
              </p>
              <div className="flex space-x-6 mt-4 md:mt-0">
                <span className="text-slate-400 text-sm hover:text-amber-400 transition-colors duration-300 cursor-pointer">
                  Privacy Policy
                </span>
                <span className="text-slate-400 text-sm hover:text-amber-400 transition-colors duration-300 cursor-pointer">
                  Terms of Service
                </span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
