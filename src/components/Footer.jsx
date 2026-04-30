import React from 'react';
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Table as TableIcon
} from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-20 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          <div className="col-span-2 lg:col-span-1 space-y-6">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center shadow-lg shadow-blue-600/20">
                <TableIcon className="text-white w-6 h-6" />
              </div>
              <span className="text-2xl font-black text-slate-900 tracking-tighter">School Mitra</span>
            </div>
            <p className="text-slate-500 font-medium leading-relaxed">
              Empowering educational institutions with smart management solutions for a better tomorrow.
            </p>
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 hover:bg-blue-600 hover:text-white transition-all cursor-pointer"><Facebook className="w-5 h-5" /></div>
              <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 hover:bg-blue-600 hover:text-white transition-all cursor-pointer"><Twitter className="w-5 h-5" /></div>
              <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 hover:bg-blue-600 hover:text-white transition-all cursor-pointer"><Instagram className="w-5 h-5" /></div>
              <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 hover:bg-blue-600 hover:text-white transition-all cursor-pointer"><Linkedin className="w-5 h-5" /></div>
            </div>
          </div>

          <div className="space-y-6">
            <h5 className="font-black text-slate-900 uppercase tracking-widest text-xs">Features</h5>
            <ul className="space-y-4 text-slate-500 font-bold">
              <li className="hover:text-blue-600 transition-colors cursor-pointer">Student Management</li>
              <li className="hover:text-blue-600 transition-colors cursor-pointer">Fee Collection</li>
              <li className="hover:text-blue-600 transition-colors cursor-pointer">Attendance Tracking</li>
              <li className="hover:text-blue-600 transition-colors cursor-pointer">Exam Management</li>
            </ul>
          </div>

          <div className="space-y-6">
            <h5 className="font-black text-slate-900 uppercase tracking-widest text-xs">Support</h5>
            <ul className="space-y-4 text-slate-500 font-bold">
              <li className="hover:text-blue-600 transition-colors cursor-pointer">Help Center</li>
              <li className="hover:text-blue-600 transition-colors cursor-pointer">Documentation</li>
              <li className="hover:text-blue-600 transition-colors cursor-pointer">Status Page</li>
              <li className="hover:text-blue-600 transition-colors cursor-pointer">Training</li>
            </ul>
          </div>

          <div className="space-y-6">
            <h5 className="font-black text-slate-900 uppercase tracking-widest text-xs">Company</h5>
            <ul className="space-y-4 text-slate-500 font-bold">
              <li className="hover:text-blue-600 transition-colors cursor-pointer">About Us</li>
              <li className="hover:text-blue-600 transition-colors cursor-pointer">Careers</li>
              <li className="hover:text-blue-600 transition-colors cursor-pointer">Pricing</li>
              <li className="hover:text-blue-600 transition-colors cursor-pointer">Contact</li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-slate-400 text-sm font-bold">
            © {new Date().getFullYear()} School Mitra. All rights reserved.
          </p>
          <div className="flex gap-8 text-sm font-bold text-slate-400">
            <span className="hover:text-slate-900 cursor-pointer">Privacy Policy</span>
            <span className="hover:text-slate-900 cursor-pointer">Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
