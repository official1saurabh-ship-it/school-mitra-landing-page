import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  ArrowLeft, 
  GraduationCap, 
  Users, 
  Layout, 
  BookOpen, 
  ScrollText, 
  ClipboardList, 
  Calendar, 
  UserCheck, 
  FileEdit, 
  BarChart, 
  CheckCircle2,
  FileSpreadsheet
} from 'lucide-react';
import Scene3D from '../components/Scene3D';

const AcademicManagement = () => {
  const navigate = useNavigate();

  const features = [
    { title: "Student Admission", icon: UserCheck, desc: "Streamline the entire enrollment process from inquiry to final admission." },
    { title: "Student Records", icon: Users, desc: "Maintain comprehensive digital profiles for every student in a centralized database." },
    { title: "Class & Section Management", icon: Layout, desc: "Easily organize and manage school classes, sections, and student allocations." },
    { title: "Subject Management", icon: BookOpen, desc: "Define and assign subjects to different grades and sections effortlessly." },
    { title: "Curriculum / Syllabus", icon: ScrollText, desc: "Digitize your curriculum and track syllabus completion in real-time." },
    { title: "Lesson Planning", icon: ClipboardList, desc: "Empower teachers with tools to create, share, and manage daily lesson plans." },
    { title: "Homework / Assignment", icon: FileEdit, desc: "Assign, track, and grade student homework and projects digitally." },
    { title: "Timetable / Scheduling", icon: Calendar, desc: "Generate conflict-free timetables for students and teachers automatically." },
    { title: "Attendance Tracking", icon: UserCheck, desc: "Real-time attendance monitoring for both students and staff with auto-alerts." },
    { title: "Exams & Test Management", icon: FileSpreadsheet, desc: "Schedule exams, manage question banks, and conduct tests seamlessly." },
    { title: "Result Generation", icon: BarChart, desc: "Automated report card generation with detailed performance analysis." },
    { title: "Grade System", icon: CheckCircle2, desc: "Configure custom grading scales and weightage as per school policy." }
  ];

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900">
      {/* Hero Section */}
      <section className="relative h-[80vh] min-h-[600px] flex items-center bg-slate-950 overflow-hidden">
        <Scene3D type="academic" />
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-slate-950/20 via-transparent to-slate-950 z-10" />
        <div className="max-w-7xl mx-auto px-6 relative z-20">
          <button onClick={() => navigate(-1)} className="mb-8 flex items-center gap-2 text-slate-400 hover:text-blue-500 transition-colors group">
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            <span className="font-bold text-sm uppercase tracking-widest">Back</span>
          </button>
          <div className="max-w-3xl">
            <h1 className="text-5xl lg:text-7xl font-black text-white leading-tight mb-6">
              Academic <span className="text-blue-600">Management</span>
            </h1>
            <p className="text-xl text-slate-400 font-medium leading-relaxed">
              The heart of your school operations. Automate everything from admissions to results with our comprehensive academic suite.
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
          <h2 className="text-4xl md:text-6xl font-black text-white mb-8 relative z-10">Ready to Transform Your Academics?</h2>
          <button className="px-10 py-5 bg-blue-600 hover:bg-blue-500 text-white font-black rounded-2xl shadow-2xl transition-all hover:scale-105 relative z-10">
            Book a Demo
          </button>
        </div>
      </section>
    </div>
  );
};

export default AcademicManagement;