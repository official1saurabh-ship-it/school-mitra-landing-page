import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Target, Users, Zap } from 'lucide-react';

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-white pt-32 pb-20">
      <div className="max-w-4xl mx-auto px-6">
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-6 text-center mb-20"
        >
          <h1 className="text-4xl md:text-6xl font-black text-slate-900 leading-tight">
            Empowering Schools Through <span className="text-blue-600">Innovation</span>
          </h1>
          <p className="text-xl text-slate-600 font-medium max-w-2xl mx-auto leading-relaxed">
            School Mitra is dedicated to simplifying school management and fostering educational excellence through smart, integrated technology.
          </p>
        </motion.div>

        {/* Story Section */}
        <section className="space-y-12">
          <div className="space-y-4">
            <h2 className="text-2xl font-black text-slate-900 uppercase tracking-widest text-sm">Our Story</h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              Founded with a vision to bridge the gap between traditional administration and modern technology, School Mitra has grown into a comprehensive ecosystem trusted by hundreds of institutions. We believe that by reducing administrative burdens, educators can focus on what truly matters: student success.
            </p>
          </div>

          {/* Mission & Vision Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-8">
            <div className="space-y-4">
              <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center">
                <Target className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-2xl font-black text-slate-900">Our Mission</h3>
              <p className="text-slate-600 leading-relaxed">
                To provide accessible, user-friendly, and powerful management tools that empower every school administrator, teacher, and parent to collaborate effectively.
              </p>
            </div>
            <div className="space-y-4">
              <div className="w-12 h-12 bg-indigo-50 rounded-2xl flex items-center justify-center">
                <Zap className="w-6 h-6 text-indigo-600" />
              </div>
              <h3 className="text-2xl font-black text-slate-900">Our Vision</h3>
              <p className="text-slate-600 leading-relaxed">
                To become the global standard for school management systems, driving data-informed decisions that transform the educational landscape.
              </p>
            </div>
          </div>

          {/* Core Values */}
          <div className="space-y-8 pt-12">
            <h2 className="text-2xl font-black text-slate-900 uppercase tracking-widest text-sm text-center">Core Values</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { title: "Transparency", icon: Shield, desc: "We build trust through clear communication and secure data management." },
                { title: "Inclusion", icon: Users, desc: "Our platform is designed for everyone in the school community." }
              ].map((value, i) => (
                <div key={i} className="p-8 rounded-3xl bg-slate-50 border border-slate-100 space-y-4">
                  <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shadow-sm">
                    <value.icon className="w-5 h-5 text-slate-600" />
                  </div>
                  <h4 className="text-xl font-black text-slate-900">{value.title}</h4>
                  <p className="text-slate-500 leading-relaxed">{value.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Contact CTA */}
          <div className="pt-20 text-center space-y-6">
            <h2 className="text-3xl font-black text-slate-900">Join our growing family</h2>
            <p className="text-slate-500 font-medium">Have questions about our journey? We'd love to hear from you.</p>
            <button className="bg-blue-600 text-white px-8 py-4 rounded-2xl font-bold hover:bg-blue-700 transition-colors shadow-lg shadow-blue-600/20">
              Get in Touch
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutUs;
