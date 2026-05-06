import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  Home,
  LayoutGrid,
  CreditCard,
  LifeBuoy,
  Menu,
  X,
  ChevronDown,
  Mail,
  Info,
  GraduationCap,
  Users,
  MessageSquare,
  ShieldCheck,
  Map,
  BookOpen,
  Bed,
  BarChart,
  Smartphone,
  Coffee,
  Settings
} from 'lucide-react';
import SKOLA from "../assets/SKOLA.png";
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [featuresOpen, setFeaturesOpen] = useState(false);
  const location = useLocation();
  const dropdownRef = useRef(null);

  const navItems = [
    { name: 'Home', path: '/', icon: Home },
    { name: 'About', path: '/about', icon: Info },
    { name: 'Pricing', path: '/pricing', icon: CreditCard },
    { name: 'Support', path: '/support', icon: LifeBuoy },

    { name: 'Contact', path: '/contact', icon: Mail },
  ];

  const features = [
    { name: "Academic", path: "/features/academic-management", icon: GraduationCap },
    { name: "Staff", path: "/features/staff-management", icon: Users },
    { name: "Finance", path: "/features/finance-management", icon: CreditCard },
    { name: "Communication", path: "/features/communication", icon: MessageSquare },
    { name: "Administration", path: "/features/administration", icon: ShieldCheck },
    { name: "Transport", path: "/features/transport-management", icon: Map },
    { name: "Library", path: "/features/library-management", icon: BookOpen },
    { name: "Hostel", path: "/features/hostel-management", icon: Bed },
    { name: "Analytics", path: "/features/reports-analytics", icon: BarChart },
    { name: "System", path: "/features/technical-system-features", icon: Smartphone },
    { name: 'Settings', path: '/settings', icon: Settings },
  ];

  // Helper function to determine if a link is active
  const checkActive = (itemPath) => {
    if (itemPath === '/') return location.pathname === '/';
    return location.pathname.startsWith(itemPath);
  };

  // Close dropdown on click outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setFeaturesOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Close mobile menu and dropdown on route change
  useEffect(() => {
    setMobileOpen(false);
    setFeaturesOpen(false);
  }, [location.pathname]);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-xl border-b border-saas-border">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo Section */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex items-center gap-2 font-black text-2xl tracking-tight text-saas-accent">
              <img src={SKOLA} alt="Logo" className='w-30 h-20' />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center bg-gray-100/50 p-1 rounded-2xl border border-saas-border">
            <Link
              to="/"
              className={`relative px-4 py-2 rounded-xl text-sm font-bold transition-all duration-300 ${location.pathname === '/' ? 'text-white' : 'text-gray-500 hover:text-gray-900'
                }`}
            >
              {location.pathname === '/' && (
                <motion.div
                  layoutId="active-pill"
                  className="absolute inset-0 bg-saas-accent rounded-xl shadow-lg shadow-saas-accent/20"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
              <span className="relative z-10">Home</span>
            </Link>

            {/* Features Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setFeaturesOpen(!featuresOpen)}
                className={`flex items-center gap-1 px-4 py-2 rounded-xl text-sm font-bold transition-all duration-300 ${location.pathname.startsWith('/features') ? 'text-saas-accent' : 'text-gray-500 hover:text-gray-900'
                  }`}
              >
                <span>Features</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${featuresOpen ? 'rotate-180' : ''}`} />
              </button>

              <AnimatePresence>
                {featuresOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    className="absolute top-full left-0 mt-2 w-64 bg-white rounded-2xl shadow-2xl border border-saas-border p-2 grid grid-cols-1 gap-1"
                  >
                    {features.map((feature) => (
                      <Link
                        key={feature.name}
                        to={feature.path}
                        className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-xs font-bold transition-all ${location.pathname === feature.path
                          ? 'bg-saas-accent text-white'
                          : 'text-gray-500 hover:bg-gray-50 hover:text-saas-accent'
                          }`}
                      >
                        <feature.icon className="w-4 h-4" />
                        {feature.name}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {navItems.slice(1).map((item) => {
              const isActive = checkActive(item.path);
              return (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`relative px-4 py-2 rounded-xl text-sm font-bold transition-all duration-300 ${isActive ? 'text-white' : 'text-gray-500 hover:text-gray-900'
                    }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="active-pill"
                      className="absolute inset-0 bg-saas-accent rounded-xl shadow-lg shadow-saas-accent/20"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{item.name}</span>
                </Link>
              );
            })}
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-4">
            <a href="https://school.biosoftech.in/login" className="text-gray-500 hover:text-gray-900 font-bold text-sm px-4 py-2 transition-colors active:scale-95">
              Login
            </a>
            <a href='https://school.biosoftech.in/register' className="bg-saas-accent hover:bg-saas-accent/90 text-white px-6 py-2.5 rounded-xl font-bold text-sm shadow-lg shadow-saas-accent/20 transition-all hover:scale-105 active:scale-95">
              Register
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="p-2 text-gray-500 hover:text-saas-accent transition-colors active:scale-90"
            >
              {mobileOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-saas-border overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-1 max-h-[80vh] overflow-y-auto">
              {navItems.map((item) => {
                const isActive = checkActive(item.path);
                return (
                  <Link
                    key={item.name}
                    to={item.path}
                    className={`flex items-center gap-3 px-4 py-4 rounded-xl font-bold transition-colors ${isActive
                      ? 'bg-saas-accent/10 text-saas-accent'
                      : 'text-gray-500 hover:bg-gray-50'
                      }`}
                  >
                    <item.icon className="w-5 h-5" />
                    {item.name}
                  </Link>
                );
              })}

              {/* Mobile Features Section */}
              <div className="py-2">
                <p className="px-4 text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2">Modules</p>
                <div className="grid grid-cols-2 gap-2">
                  {features.map((feature) => (
                    <Link
                      key={feature.name}
                      to={feature.path}
                      className={`flex items-center gap-2 px-4 py-3 rounded-xl text-xs font-bold border transition-all ${location.pathname === feature.path
                        ? 'border-saas-accent bg-saas-accent/5 text-saas-accent'
                        : 'border-transparent text-gray-500 hover:bg-gray-50'
                        }`}
                    >
                      <feature.icon className="w-4 h-4" />
                      {feature.name}
                    </Link>
                  ))}
                </div>
              </div>

              <div className="pt-4 grid grid-cols-2 gap-3">
                <a href="https://school.biosoftech.in/login" className="px-4 py-3 rounded-xl border border-saas-border text-center text-gray-900 font-bold text-sm active:bg-gray-50">
                  Login
                </a>
                <a href='https://school.biosoftech.in/register' className="px-4 py-3 rounded-xl bg-saas-accent text-center text-white font-bold text-sm shadow-lg active:scale-95">
                  Register
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
