import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  ArrowLeft, 
  LayoutDashboard, 
  UserCheck, 
  FileBarChart, 
  BookOpen, 
  CreditCard, 
  MessageCircle 
} from 'lucide-react';
import Scene3D from '../components/Scene3D';

const ParentStudentPortal = () => {
  const navigate = useNavigate();

  const features = [
    { title: "Dashboard Access", icon: LayoutDashboard, desc: "A comprehensive, easy-to-use overview of student activities and school updates." },
    { title: "Attendance View", icon: UserCheck, desc: "Parents can monitor their child's daily presence and punctuality record in real-time." },
    { title: "Result View", icon: FileBarChart, desc: "Instant access to exam marks, progress reports, and historical academic performance." },
    { title: "Homework Access", icon: BookOpen, desc: "Students and parents can view daily assignments, deadlines, and project instructions." },
    { title: "Fee Payment", icon: CreditCard, desc: "Securely pay school fees online and download digital receipts from the portal." },
    { title: "Chat with Teachers", icon: MessageCircle, desc: "Direct, secure messaging for parents to communicate with subject teachers and staff." }
  ];

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900">
      {/* Hero Section */}
      <section className="relative h-[80vh] min-h-[600px] flex items-center bg-slate-950 overflow-hidden">
        <Scene3D type="portal" />
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-slate-950/20 via-transparent to-slate-950 z-10" />
        <div className="max-w-7xl mx-auto px-6 relative z-20">
          <button onClick={() => navigate(-1)} className="mb-8 flex items-center gap-2 text-slate-400 hover:text-blue-500 transition-colors group">
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            <span className="font-bold text-sm uppercase tracking-widest">Back</span>
          </button>
          <div className="max-w-3xl">
            <h1 className="text-5xl lg:text-7xl font-black text-white leading-tight mb-6">
              Parent & Student <span className="text-blue-600">Portal</span>
            </h1>
            <p className="text-xl text-slate-400 font-medium leading-relaxed">
              Transparency and convenience in one place. A dedicated space for families to stay connected with their child's educational journey.
            </p>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((f, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="p-8 rounded-[2rem] bg-slate-50 border border-slate-100 hover:shadow-2xl hover:shadow-blue-500/10 transition-all group"
            >
              <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-sm group-hover:bg-blue-600 transition-colors">
                <f.icon className="w-7 h-7 text-blue-600 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-black mb-3">{f.title}</h3>
              <p className="text-slate-500 font-medium leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto bg-slate-950 rounded-[3rem] p-12 lg:p-20 text-center relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-blue-600/10 blur-[120px]" />
          <h2 className="text-4xl md:text-6xl font-black text-white mb-8 relative z-10">Enhance Parent Satisfaction</h2>
          <button className="px-10 py-5 bg-blue-600 hover:bg-blue-500 text-white font-black rounded-2xl shadow-2xl transition-all hover:scale-105 relative z-10">
            Book a Demo
          </button>
        </div>
      </section>
    </div>
  );
};

export default ParentStudentPortal;