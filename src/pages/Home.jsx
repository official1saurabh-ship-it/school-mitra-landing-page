import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import school from "../assets/school.png";
import schoolimage from "../assets/schoolimage.png";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import girl from "../assets/Advantagesimg.png";
import tables from "../assets/dashboard.png";
import overview from "../assets/overview.jpeg";
import {
  CheckCircle,
  TrendingUp,
  BarChart3,
  Users,
  Star,
  Quote,
  LayoutGrid,
  Smartphone,
  Coffee,
  ClipboardList,
  PieChart,
  ShieldCheck,
  CreditCard,
  GraduationCap,
  MessageSquare,
  LayoutDashboard,
  Map,
  BookOpen,
  Bed,
  BarChart,
  Zap
} from "lucide-react";
import { motion } from "framer-motion";
import HeroSection from "../components/HeroSection";


gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  const imageRef = useRef(null);
  const sectionRef = useRef(null);
  const [formData, setFormData] = useState({
    fullName: '',
    schoolName: '',
    phone: '',
    email: '',
    message: ''
  });

  const handleWhatsAppRedirect = (e) => {
    e.preventDefault();
    const { fullName, schoolName, phone, email, message } = formData;
    const whatsappNumber = "919044425858";
    const text = `I filled in your form and would like to know more about your business.%0A%0AFull Name: ${fullName}%0ASchool Name: ${schoolName}%0APhone: ${phone}%0AEmail: ${email}%0ARequirements: ${message}`;
    window.location.href = `https://wa.me/${whatsappNumber}?text=${text}`;
  };

  const featureItems = [
    {
      icon: GraduationCap,
      title: "Academic Management",
      desc: "Complete control over admissions, records, timetables, and automated result generation.",
      path: "/features/academic-management",
      color: "bg-blue-600"
    },
    {
      icon: Users,
      title: "Staff Management",
      desc: "Manage teaching faculty, staff attendance, payroll, and leave with intuitive tools.",
      path: "/features/staff-management",
      color: "bg-indigo-600"
    },
    {
      icon: CreditCard,
      title: "Finance Management",
      desc: "Automated fee structure setup, secure online payments, and transparent financial reporting.",
      path: "/features/finance-management",
      color: "bg-emerald-600"
    },
    {
      icon: MessageSquare,
      title: "Communication",
      desc: "Bridge the gap with SMS, push notifications, and dedicated parent-teacher chat portals.",
      path: "/features/communication",
      color: "bg-amber-600"
    },
    {
      icon: LayoutDashboard,
      title: "Parent & Student Portal",
      desc: "Dedicated dashboard for families to track attendance, results, and pay fees effortlessly.",
      path: "/features/parent-student-portal",
      color: "bg-rose-600"
    },
    {
      icon: ShieldCheck,
      title: "Administration",
      desc: "Manage roles, permissions, and multi-school branches from a single secure dashboard.",
      path: "/features/administration",
      color: "bg-cyan-600"
    },
    {
      icon: Map,
      title: "Transport Management",
      desc: "Real-time vehicle tracking, route optimization, and student safety monitoring.",
      path: "/features/transport-management",
      color: "bg-violet-600"
    },
    {
      icon: BookOpen,
      title: "Library Management",
      desc: "Digital book inventory, automated issue/return tracking, and fine calculation.",
      path: "/features/library-management",
      color: "bg-blue-400"
    },
    {
      icon: Bed,
      title: "Hostel Management",
      desc: "Streamlined room allocation, hostel fee tracking, and residential attendance.",
      path: "/features/hostel-management",
      color: "bg-orange-600"
    },
    {
      icon: Coffee,
      title: "Other Facilities",
      desc: "Manage school canteen sales and track institution-wide assets and inventory.",
      path: "/features/other-facilities",
      color: "bg-stone-600"
    },
    {
      icon: BarChart,
      title: "Reports & Analytics",
      desc: "In-depth visual insights into attendance, academic trends, and financial health.",
      path: "/features/reports-analytics",
      color: "bg-sky-600"
    },
    {
      icon: Smartphone,
      title: "System Features",
      desc: "Enterprise-grade security, cloud backups, and native mobile apps for all users.",
      path: "/features/technical-system-features",
      color: "bg-slate-600"
    }
  ];

  // 🔥 ensure refresh after full page load (layout stable)
  useEffect(() => {
    const handleLoad = () => ScrollTrigger.refresh();
    window.addEventListener("load", handleLoad);
    return () => window.removeEventListener("load", handleLoad);
  }, []);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Laptop Flip Animation
      if (imageRef.current && sectionRef.current) {
        gsap.set(imageRef.current, {
          rotateY: -180,
          transformOrigin: "center center",
          transformPerspective: 1000,
        });

        gsap.to(imageRef.current, {
          rotateY: 0,
          ease: "none",
          scrollTrigger: {
            trigger: imageRef.current,
            start: "top bottom",
            end: "bottom bottom",
            scrub: true,
            invalidateOnRefresh: true,
          },
        });
      }

    }, [sectionRef]);

    const timeout = setTimeout(() => ScrollTrigger.refresh(), 100);

    return () => {
      ctx.revert();
      clearTimeout(timeout);
    };
  }, []);


  return (
    <div
      className="min-h-[200vh] bg-white pt-12 relative overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, #FFFFFF 0%, #FFF5F7 30%, #F5F3FF 70%, #FFFFFF 100%)",
      }}
    >
      {/* Decorative Background Blobs */}
      <div className="absolute top-0 left-[-10%] w-[500px] h-[500px] bg-purple-200/20 blur-[120px] rounded-full -z-0" />
      <div className="absolute bottom-[20%] right-[-10%] w-[600px] h-[600px] bg-pink-200/20 blur-[150px] rounded-full -z-0" />

      <HeroSection />

      {/* Why Choose Us Section */}
      <section className="w-full px-4 sm:px-8 lg:px-12 py-12 lg:py-24 text-slate-900 flex flex-col lg:flex-row items-stretch gap-8 lg:gap-12 relative z-10">
        <div className="w-full lg:w-1/2 space-y-6 lg:space-y-10 flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100/50 backdrop-blur-md border border-blue-200/50 text-[10px] lg:text-xs font-bold tracking-widest text-blue-700 w-fit uppercase"
          >
            <Star className="w-3 h-3 lg:w-4 h-4 text-blue-600 fill-blue-600" />
            <span>LOVED BY SCHOOL ADMINISTRATORS</span>
          </motion.div>

          <div className="space-y-4">
            <h2 className="text-3xl sm:text-4xl lg:text-7xl font-black leading-[1.1] text-slate-900">
              Why Our <span className="text-blue-600"> Clients</span> <br className="hidden sm:block" />
              <span className="text-slate-400">Love Us</span>
            </h2>
            <p className="text-base lg:text-xl text-slate-600 font-medium max-w-3xl leading-relaxed">
              We don't just provide software; we become the <span className="underline decoration-blue-300 decoration-4 underline-offset-4">growth partner</span> for your school's success.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
            {[
              { icon: CheckCircle, title: "Simplify School Ops", desc: "Manage admissions, attendance, and fees in a few clicks" },
              { icon: TrendingUp, title: "Increase Efficiency", desc: "Reduce manual paperwork and save valuable time" },
              { icon: BarChart3, title: "Real-time School Insights", desc: "Track academic performance and finances instantly" },
              { icon: Users, title: "Engaged Parents", desc: "Better communication leads to satisfied parents" }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: i * 0.1 }}
                className="flex gap-4 group cursor-pointer"
              >
                <div className="flex-shrink-0 w-10 h-10 lg:w-12 h-12 rounded-2xl bg-white shadow-sm border border-slate-100 flex items-center justify-center group-hover:shadow-md group-hover:border-blue-200 transition-all duration-300">
                  <item.icon className="w-5 h-5 lg:w-6 h-6 text-slate-400 group-hover:text-blue-600 group-hover:scale-110 transition-all duration-300" />
                </div>
                <div>
                  <h3 className="font-bold text-base lg:text-lg text-slate-800 group-hover:text-blue-700 transition-colors">{item.title}</h3>
                  <p className="text-slate-500 text-xs lg:text-sm leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 lg:gap-4 pt-4">
            {[
              { val: "500+", label: "Schools" },
              { val: "30%", label: "Avg. Efficiency" },
              { val: "40%", label: "Less Paperwork" },
              { val: "4.8/5", label: "Rating" }
            ].map((stat, i) => (
              <div key={i} className="p-3 lg:p-4 rounded-2xl bg-white border border-slate-100 text-center shadow-sm hover:shadow-md transition-shadow">
                <div className="text-lg lg:text-2xl font-black text-slate-900">{stat.val}</div>
                <div className="text-[8px] lg:text-[10px] uppercase tracking-wider font-bold text-slate-400">{stat.label}</div>
              </div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative p-6 lg:p-8 rounded-3xl bg-white/70 backdrop-blur-xl border border-white shadow-xl overflow-hidden group max-w-2xl"
          >
            <Quote className="absolute -right-4 -top-4 w-24 lg:w-32 h-24 lg:h-32 text-blue-50 rotate-12" />
            <p className="relative z-10 text-base lg:text-lg font-medium italic leading-relaxed text-slate-700">
              "School Mitra has completely transformed the way we manage our institution. It's smart, simple, and super effective!"
            </p>
            <div className="mt-6 flex items-center gap-4">
              <div className="w-10 h-10 lg:w-12 h-12 rounded-full bg-gradient-to-tr from-blue-100 to-indigo-100 flex items-center justify-center font-bold border border-white shadow-inner text-blue-700 text-sm lg:text-base">
                RK
              </div>
              <div>
                <div className="font-black text-slate-900 text-sm lg:text-base">Rajesh Khanna</div>
                <div className="text-[10px] lg:text-xs font-bold text-slate-400 uppercase tracking-widest">Principal, St. Xavier's School</div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Image Section */}
        <div className="w-full lg:w-1/2">
          <div className="w-full h-full min-h-[400px] lg:min-h-0 overflow-hidden rounded-[2rem] lg:rounded-[3rem]">
            <img
              src={girl}
              alt="Happy School Administrator"
              className="w-full h-full object-fill"
            />
          </div>
        </div>
      </section>

      {/* What Do We Do Section - Listing Layout */}
      <section className="relative bg-white overflow-hidden py-24">
        <div className="w-full max-w-7xl mx-auto px-6">

          <div className="text-center space-y-4 mb-20 relative z-30">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-black text-slate-900"
            >
              What Do <span className="text-blue-600">We Do</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-slate-600 font-medium max-w-2xl mx-auto text-lg"
            >
              Explore our ecosystem — empowering Schools through integrated solutions.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featureItems.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
              >
                <Link
                  to={item.path}
                  className="group relative flex flex-col h-full p-8 rounded-[2rem] bg-white border-2 border-slate-100 shadow-lg shadow-slate-200/50 hover:border-blue-500/50 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-300"
                >
                  <div className={`w-16 h-16 rounded-2xl ${item.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300 mb-6`}>
                    <item.icon className="w-8 h-8 text-white" />
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-2xl font-black text-slate-900 group-hover:text-blue-500 transition-colors duration-200">
                      {item.title}
                    </h3>
                    <p className="text-slate-600 text-base leading-relaxed font-medium">
                      {item.desc}
                    </p>
                    <div className="inline-flex items-center gap-2 text-blue-600 font-bold tracking-widest text-xs pt-4 uppercase group-hover:gap-3 transition-all duration-300">
                      Explore Module <TrendingUp className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

        </div>

      </section>

      {/* Solution Capabilities Section */}
      <section className="py-12 md:py-24 relative z-10 ">
        <div className="w-full max-w-screen-2xl mx-auto px-4 sm:px-6">
          <div className="text-center space-y-4 mb-12 md:mb-20">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 text-blue-600 text-[10px] sm:text-xs font-bold uppercase tracking-widest"
            >
              <Zap className="w-4 h-4 fill-blue-600" />
              <span>Engineered for Academic Excellence</span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 leading-tight"
            >
              What Our Solutions <br className="hidden sm:block" />
              <span className="text-blue-600 text-2xl sm:text-3xl md:text-5xl">Can Do For Your School</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-slate-500 font-medium max-w-2xl mx-auto text-base md:text-lg"
            >
              Streamline your administrative workflow and focus on education with tools built specifically for modern institutions.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {[
              { icon: Zap, title: "Faster Admissions", desc: "Process student applications and enrollments without delays.", accent: "bg-indigo-600" },
              { icon: BarChart3, title: "Real-Time Tracking", desc: "Monitor attendance, fee payments, and results instantly.", accent: "bg-indigo-600" },
              { icon: ClipboardList, title: "Error-Free Reports", desc: "Automatic calculations ensure accurate result sheets.", accent: "bg-indigo-600" },
              { icon: Users, title: "Staff Coordination", desc: "Sync data between teachers, administration, and parents.", accent: "bg-indigo-600" },
              { icon: CreditCard, title: "Online Payments", desc: "Accept fees via UPI, card, and net banking securely.", accent: "bg-indigo-600" },
              { icon: TrendingUp, title: "Institutional Growth", desc: "Improve efficiency and attract more students.", accent: "bg-indigo-800" }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: 1.5,
                  delay: i * 0.2,
                  ease: "easeOut"
                }}
                className="group p-8 md:p-10 rounded-3xl md:rounded-[2.5rem] bg-white border border-slate-100 shadow-sm hover:shadow-2xl hover:shadow-slate-200/50 transition-all duration-500 relative overflow-hidden"
              >
                <div className={`absolute top-0 left-0 w-full h-1.5 ${item.accent} transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500`} />
                <div className="w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-slate-50 flex items-center justify-center mb-6 md:mb-8 group-hover:scale-110 group-hover:bg-slate-900 transition-all duration-500">
                  <item.icon className={`w-7 h-7 md:w-8 md:h-8 text-slate-600 group-hover:text-white transition-colors duration-500`} />
                </div>
                <h3 className="text-xl md:text-2xl font-black text-slate-900 mb-4 group-hover:text-blue-600 transition-colors">{item.title}</h3>
                <p className="text-slate-500 text-sm md:text-base leading-relaxed font-medium">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-24 px-4 sm:px-6">
        <div className="w-full max-w-screen-2xl mx-auto bg-slate-900 rounded-[3rem] overflow-hidden shadow-2xl flex flex-col lg:flex-row">
          <div className="lg:w-5/12 p-12 lg:p-16 bg-gradient-to-br from-blue-600 to-indigo-700 text-white flex flex-col justify-between">
            <div>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-4xl md:text-5xl font-black mb-6 leading-tight"
              >
                Ready to Transform Your <br />
                <span className="text-blue-200">School?</span>
              </motion.h2>
              <p className="text-blue-100 text-lg font-medium leading-relaxed opacity-90">
                Join hundreds of successful institutions who have simplified their operations with School Mitra.
              </p>
            </div>

            <div className="mt-12 space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center"><CheckCircle className="w-6 h-6 text-blue-200" /></div>
                <span className="font-bold">Free demo & setup</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center"><CheckCircle className="w-6 h-6 text-blue-200" /></div>
                <span className="font-bold">24/7 Technical Support</span>
              </div>
            </div>

            <div className="mt-12 pt-12 border-t border-white/10">
              <p className="text-sm font-bold uppercase tracking-widest text-blue-200 mb-2">Email us at</p>
              <p className="text-2xl font-black">info@biosoftech.com</p>
            </div>
          </div>

          <div className="lg:w-7/12 p-12 lg:p-16">
            <form className="grid grid-cols-1 md:grid-cols-2 gap-6" onSubmit={handleWhatsAppRedirect}>
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-400 uppercase tracking-wider">Full Name</label>
                <input
                  type="text"
                  placeholder="Amit Sharma"
                  required
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  className="w-full bg-slate-800 border border-slate-700 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-blue-500 transition-all font-medium"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-400 uppercase tracking-wider">School Name</label>
                <input
                  type="text"
                  placeholder="Modern Public School"
                  required
                  value={formData.schoolName}
                  onChange={(e) => setFormData({ ...formData, schoolName: e.target.value })}
                  className="w-full bg-slate-800 border border-slate-700 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-blue-500 transition-all font-medium"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-400 uppercase tracking-wider">Phone Number</label>
                <input
                  type="tel"
                  placeholder="+91 98765 43210"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full bg-slate-800 border border-slate-700 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-blue-500 transition-all font-medium"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-400 uppercase tracking-wider">Email Address</label>
                <input
                  type="email"
                  placeholder="amit@school.com"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-slate-800 border border-slate-700 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-blue-500 transition-all font-medium"
                />
              </div>
              <div className="space-y-2 md:col-span-2">
                <textarea
                  rows="4"
                  placeholder="Tell us about your requirements..."
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-slate-800 border border-slate-700 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-blue-500 transition-all font-medium resize-none"
                ></textarea>
              </div>
              <div className="md:col-span-2 pt-4">
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-blue-600 hover:bg-blue-500 text-white font-black py-5 rounded-2xl shadow-xl transition-all text-lg"
                >
                  Send Message
                </motion.button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
