import { useState } from "react";
import { Menu, X, Building, Users, Package, Truck } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Layout = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: "Home", href: "/", icon: Building },
    { name: "Clients", href: "/clients", icon: Users },
    { name: "Employees", href: "/employees", icon: Users },
    { name: "Materials", href: "/materials", icon: Package },
    { name: "Equipment", href: "/equipment", icon: Truck },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation Header */}
      <nav className="bg-card border-b border-border shadow-card relative z-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-3">
              <div className="p-2 bg-gradient-primary rounded-lg">
                <Building className="w-6 h-6 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold text-gradient">
                BuildConnect
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navigation.map((item) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`flex items-center space-x-2 px-3 py-2 rounded-lg font-medium transition-all duration-300 ${
                      isActive(item.href)
                        ? "bg-primary text-primary-foreground shadow-construction"
                        : "text-muted-foreground hover:text-primary hover:bg-muted"
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    <span>{item.name}</span>
                  </Link>
                );
              })}
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg text-muted-foreground hover:text-primary hover:bg-muted transition-colors"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden border-t border-border bg-card">
              <div className="py-4 space-y-2">
                {navigation.map((item) => {
                  const Icon = item.icon;
                  return (
                    <Link
                      key={item.name}
                      to={item.href}
                      onClick={() => setIsMenuOpen(false)}
                      className={`flex items-center space-x-3 px-4 py-3 rounded-lg font-medium transition-all duration-300 ${
                        isActive(item.href)
                          ? "bg-primary text-primary-foreground shadow-construction"
                          : "text-muted-foreground hover:text-primary hover:bg-muted"
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                      <span>{item.name}</span>
                    </Link>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-1">{children}</main>

      {/* Footer */}
      <footer className="bg-neutral-dark text-neutral-light">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-gradient-primary rounded-lg">
                  <Building className="w-5 h-5 text-primary-foreground" />
                </div>
                <span className="text-lg font-bold">BuildConnect</span>
              </div>
              <p className="text-sm text-neutral-light/80">
                Connecting contractors with clients for successful construction
                projects worldwide.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Services</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link
                    to="/clients"
                    className="hover:text-secondary transition-colors"
                  >
                    Client Management
                  </Link>
                </li>
                <li>
                  <Link
                    to="/employees"
                    className="hover:text-secondary transition-colors"
                  >
                    Contractor Network
                  </Link>
                </li>
                <li>
                  <Link
                    to="/materials"
                    className="hover:text-secondary transition-colors"
                  >
                    Material Supply
                  </Link>
                </li>
                <li>
                  <Link
                    to="/equipment"
                    className="hover:text-secondary transition-colors"
                  >
                    Equipment Rental
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a
                    href="#"
                    className="hover:text-secondary transition-colors"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-secondary transition-colors"
                  >
                    Careers
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-secondary transition-colors"
                  >
                    Contact
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-secondary transition-colors"
                  >
                    Support
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Contact</h3>
              <div className="space-y-2 text-sm">
                <p>1-800-BUILD-NOW</p>
                <p>info@buildconnect.com</p>
                <p>123 Construction Ave</p>
                <p>Builder City, BC 12345</p>
              </div>
            </div>
          </div>

          <div className="border-t border-neutral-light/20 mt-8 pt-8 text-center text-sm">
            <p>&copy; 2024 BuildConnect. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
