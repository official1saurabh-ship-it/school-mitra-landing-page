import React from 'react';
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Table as TableIcon
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import SKOLAPORTRAITE from '../assets/SKOLAPORTRAITE.png';

const Footer = () => {
  const navigate = useNavigate();
  return (
    <footer className="py-20 bg-white border-t border-slate-100">
      <div className="w-full max-w-screen-2xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          <div className="col-span-2 lg:col-span-1 space-y-6">
            <div onClick={() => navigate("/")} className="flex items-center gap-2 cursor-pointer">

              <img src={SKOLAPORTRAITE} alt="" className="w-50 h-20" />
            </div>
            <p className="text-slate-500 font-medium leading-relaxed">
              Empowering educational institutions with smart management solutions for a better tomorrow.
            </p>
            <div className="flex gap-4">
              <a href='https://www.facebook.com/biosoftech/'>  <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 hover:bg-blue-600 hover:text-white transition-all cursor-pointer"><Facebook className="w-5 h-5" /></div></a>
              {/* <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 hover:bg-blue-600 hover:text-white transition-all cursor-pointer"><Twitter className="w-5 h-5" /></div>/ */}
              <a href='https://www.instagram.com/skolamitra/'> <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 hover:bg-blue-600 hover:text-white transition-all cursor-pointer"><Instagram className="w-5 h-5" /></div></a>
              <a href='https://www.linkedin.com/company/biosoftech-solutions/posts/?feedView=all'> <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 hover:bg-blue-600 hover:text-white transition-all cursor-pointer"><Linkedin className="w-5 h-5" /></div></a>
            </div>
          </div>

          <div className="space-y-6">
            <h5 className="font-black text-slate-900 uppercase tracking-widest text-xs">Features</h5>
            <ul className="space-y-4 text-slate-500 font-bold">
              <li onClick={() => navigate("/features/academic-management")} className="hover:text-blue-600 transition-colors cursor-pointer">Academic Management</li>
              <li onClick={() => navigate("/features/administration")} className="hover:text-blue-600 transition-colors cursor-pointer">Administration</li>
              <li onClick={() => navigate("/features/parent-student-portal")} className="hover:text-blue-600 transition-colors cursor-pointer">Parent Student Portal</li>
              <li onClick={() => navigate("/features/hostel-management")} className="hover:text-blue-600 transition-colors cursor-pointer">Hostel Management</li>
            </ul>
          </div>

          <div className="space-y-6">
            <h5 className="font-black text-slate-900 uppercase tracking-widest text-xs">Support</h5>
            <ul className="space-y-4 text-slate-500 font-bold">
              <li onClick={() => navigate("/School-help-desk")} className="hover:text-blue-600 transition-colors cursor-pointer">School Help Desk</li>
              <li onClick={() => navigate("/Parent-student-guide-page")} className="hover:text-blue-600 transition-colors cursor-pointer">Parent and Student Guide</li>
              <li onClick={() => navigate("/System-status-page")} className="hover:text-blue-600 transition-colors cursor-pointer">System Status</li>
              <li onClick={() => navigate("/Teacher-training-page")} className="hover:text-blue-600 transition-colors cursor-pointer">Teacher Training</li>
            </ul>
          </div>

          <div className="space-y-6">
            <h5 className="font-black text-slate-900 uppercase tracking-widest text-xs">Company</h5>
            <ul className="space-y-4 text-slate-500 font-bold">
              <li onClick={() => navigate("/about")} className="hover:text-blue-600 transition-colors cursor-pointer">About Us</li>
              <li onClick={() => navigate("/pricing")} className="hover:text-blue-600 transition-colors cursor-pointer">Pricing</li>
              <li onClick={() => navigate("/contact")} className="hover:text-blue-600 transition-colors cursor-pointer">Contact</li>
            </ul>
          </div>
        </div>

        <div className="  flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-slate-400 text-sm font-bold">
            © {new Date().getFullYear()} School Mitra. All rights reserved.
          </p>
          <div className="flex gap-8 text-sm font-bold text-slate-400">
            <span onClick={() => navigate("/privacypolicy")} className="hover:text-slate-900 cursor-pointer">Privacy Policy</span>
            <span onClick={() => navigate("/termsofservice")} className="hover:text-slate-900 cursor-pointer">Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
