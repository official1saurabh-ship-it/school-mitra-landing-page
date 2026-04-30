import React, { useEffect, useLayoutEffect, useRef } from "react";
import { Link } from "react-router-dom";
import laptop from "../assets/laptop-mobile.png";
import cloud from "../assets/cloud.png";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import girl from "../assets/Girl.png";
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


gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  const imageRef = useRef(null);
  const sectionRef = useRef(null);
  const stackedSectionRef = useRef(null);
  const cardsRef = useRef([]);

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
            trigger: sectionRef.current,
            start: "top 85%",
            end: "top 20%",
            scrub: true, // Perfect sync
            invalidateOnRefresh: true,
          },
        });
      }

      // 2. Stacked Features Animation - Instant Response
      if (stackedSectionRef.current) {
        const cards = cardsRef.current;
        const totalCards = cards.length;

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: stackedSectionRef.current,
            start: "top top",
            end: `+=${totalCards * 20}%`, // Ultra-short: 20% scroll per card
            scrub: true, // Instant response
            pin: true,
            anticipatePin: 1,
          }
        });

        // Initial setup
        cards.forEach((card, i) => {
          gsap.set(card, { 
            y: i === 0 ? 0 : 180, 
            opacity: i === 0 ? 1 : i === 1 ? 0.3 : 0, 
            scale: i === 0 ? 1 : 0.85,
            rotateX: i === 0 ? 0 : -5, 
            zIndex: totalCards - i 
          });
        });

        // Instant transition sequence
        for (let i = 0; i < totalCards; i++) {
          if (i < totalCards - 1) {
            tl.to(cards[i], {
              y: -1200,
              opacity: 0,
              scale: 0.5,
              rotateX: 20,
              duration: 0.4,
              ease: "power2.inOut"
            }, i * 0.4) // Sequential feel
            
            .to(cards[i+1], {
              y: 0,
              opacity: 1,
              scale: 1,
              rotateX: 0,
              duration: 0.4,
              ease: "power2.inOut"
            }, i * 0.4);

            if (i + 2 < totalCards) {
              tl.to(cards[i+2], {
                y: 180,
                opacity: 0.3,
                scale: 0.85,
                rotateX: -5,
                duration: 0.4,
                ease: "power2.inOut"
              }, i * 0.4);
            }
          }
        }
      }
    }, [sectionRef, stackedSectionRef]);

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

      <main className="w-full pt-8 relative z-10">
        <img
          src={cloud}
          alt="Cloud Illustration"
          className="w-full h-auto block"
        />
      </main>

      <div id="class" className="max-w-4xl mx-auto text-center space-y-6 pt-12 pb-24 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-7xl font-black text-slate-900 leading-tight"
        >
          The Operating System for <br />
          <span className="text-blue-600">Modern Schools</span>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-xl text-slate-500 font-medium max-w-2xl mx-auto"
        >
          Admissions, fees, and results sab ek hi jagah — bina tension ke.
        </motion.div>
      </div>

      <div className="h-20"></div>

      <div
        ref={sectionRef}
        className="w-full flex items-center justify-center pb-40 relative z-10"
        style={{ perspective: "1000px" }}
      >
        <img
          src={laptop}
          alt="Laptop Illustration"
          ref={imageRef}
          className="w-[85%] h-[85vh] origin-center will-change-transform"
          style={{ transformStyle: "preserve-3d" }}
        />
      </div>

      {/* Why Choose Us Section */}
      <div className="min-w-7xl mx-auto px-6 py-20 text-slate-900 flex flex-col lg:flex-row items-stretch gap-12 relative z-10">
        <div className="lg:w-5/12 space-y-8 flex flex-col justify-center py-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100/50 backdrop-blur-md border border-blue-200/50 text-xs font-bold tracking-widest text-blue-700 w-fit"
          >
            <Star className="w-4 h-4 text-blue-600 fill-blue-600" />
            <span>LOVED BY SCHOOL ADMINISTRATORS</span>
          </motion.div>

          <div className="space-y-4">
            <h2 className="text-4xl md:text-6xl font-black leading-tight text-slate-900">
              Why Our <span className="text-blue-600"> Clients</span> <br />
              <span className="text-slate-400">Love Us</span>
            </h2>
            <p className="text-lg md:text-xl text-slate-600 font-medium max-w-xl leading-relaxed">
              We don't just provide software; we become the <span className="underline decoration-blue-300 decoration-4 underline-offset-4">growth partner</span> for your school's success.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                transition={{ delay: i * 0.05 }}
                className="flex gap-4 group cursor-pointer"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-white shadow-sm border border-slate-100 flex items-center justify-center group-hover:shadow-md group-hover:border-blue-200 transition-all duration-300">
                  <item.icon className="w-6 h-6 text-slate-400 group-hover:text-blue-600 group-hover:scale-110 transition-all duration-300" />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-slate-800 group-hover:text-blue-700 transition-colors">{item.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4">
            {[
              { val: "500+", label: "Schools" },
              { val: "30%", label: "Avg. Efficiency" },
              { val: "40%", label: "Less Paperwork" },
              { val: "4.8/5", label: "Rating" }
            ].map((stat, i) => (
              <div key={i} className="p-4 rounded-2xl bg-white border border-slate-100 text-center shadow-sm hover:shadow-md transition-shadow">
                <div className="text-2xl font-black text-slate-900">{stat.val}</div>
                <div className="text-[10px] uppercase tracking-wider font-bold text-slate-400">{stat.label}</div>
              </div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative p-8 rounded-3xl bg-white/70 backdrop-blur-xl border border-white shadow-xl overflow-hidden group"
          >
            <Quote className="absolute -right-4 -top-4 w-32 h-32 text-blue-50 rotate-12" />
            <p className="relative z-10 text-lg font-medium italic leading-relaxed text-slate-700">
              "School Mitra has completely transformed the way we manage our institution. It's smart, simple, and super effective!"
            </p>
            <div className="mt-6 flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-blue-100 to-indigo-100 flex items-center justify-center font-bold border border-white shadow-inner text-blue-700">
                RK
              </div>
              <div>
                <div className="font-black text-slate-900">Rajesh Khanna</div>
                <div className="text-xs font-bold text-slate-400 uppercase tracking-widest">Principal, St. Xavier's School</div>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="lg:w-7/12 relative">
          <div className="relative w-full h-full min-h-[600px] lg:min-h-0 flex items-end justify-center overflow-hidden rounded-3xl bg-slate-50/50 border border-slate-100 shadow-inner">
            <div className="absolute inset-0 animate-float">
              <img
                src={girl}
                alt="Happy School Administrator"
                className="h-full w-full object-cover object-center opacity-95"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-white/40 to-transparent" />
            </div>

            {/* Floating UI Elements */}
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute left-8 top-[10%] z-20 w-56 md:w-72 rotate-[-5deg]"
            >
              <img
                src={tables}
                alt="School Dashboard Preview"
                className="rounded-2xl shadow-2xl border-4 border-white backdrop-blur-xl"
              />
            </motion.div>

            <motion.div
              animate={{ y: [0, 20, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute right-8 bottom-[10%] z-20 w-56 md:w-72 rotate-[5deg]"
            >
              <img
                src={overview}
                alt="Student Analytics Preview"
                className="rounded-2xl shadow-2xl border-4 border-white backdrop-blur-xl"
              />
            </motion.div>

            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-blue-100/30 blur-[120px] rounded-full -z-10" />
          </div>
        </div>
      </div>

      {/* What Do We Do Section - Pinned Stacked Cards */}
      <section ref={stackedSectionRef} className="relative z-20 bg-slate-950 overflow-hidden">
        <div className="min-h-screen w-full flex flex-col items-center justify-center px-6 py-20">
          
          <div className="text-center space-y-4 mb-16 relative z-30">
            <motion.h2
              className="text-4xl md:text-6xl font-black text-white"
            >
              What Do <span className="text-blue-600">We Do</span>
            </motion.h2>
            <motion.p
              className="text-slate-400 font-medium max-w-2xl mx-auto text-lg"
            >
              Scroll to explore our ecosystem — empowering Schools through integrated solutions.
            </motion.p>
          </div>

          <div className="relative w-full max-w-4xl h-[500px] flex items-center justify-center">
            {featureItems.map((item, i) => (
              <div
                key={i}
                ref={el => cardsRef.current[i] = el}
                className="absolute w-full h-full flex items-center justify-center pointer-events-none"
              >
                <Link
                  to={item.path}
                  className="group pointer-events-auto relative flex flex-col md:flex-row items-center gap-8 p-10 md:p-16 rounded-[3rem] bg-slate-900 border border-slate-800 shadow-2xl transition-all duration-200 hover:border-blue-500/50 will-change-transform"
                >
                  <div className={`w-24 h-24 md:w-32 md:h-32 rounded-3xl ${item.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <item.icon className="w-12 h-12 md:w-16 md:h-16 text-white" />
                  </div>
                  
                  <div className="flex-1 text-center md:text-left space-y-4">
                    <h3 className="text-3xl md:text-5xl font-black text-white group-hover:text-blue-500 transition-colors duration-200">
                      {item.title}
                    </h3>
                    <p className="text-slate-400 text-lg md:text-xl leading-relaxed font-medium">
                      {item.desc}
                    </p>
                    <div className="inline-flex items-center gap-2 text-blue-500 font-bold tracking-widest text-sm pt-4 uppercase">
                      Explore Module <TrendingUp className="w-4 h-4" />
                    </div>
                  </div>

                  <div className={`absolute -inset-4 ${item.color} opacity-0 group-hover:opacity-5 blur-3xl transition-opacity duration-300`} />
                </Link>
              </div>
            ))}
          </div>

        </div>

        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-600/5 rounded-full blur-[120px]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#020617_100%)] opacity-60" />
        </div>
      </section>

      {/* Solution Capabilities Section */}
      <section className="py-24 relative z-10 ">
        <div className="min-w-7xl mx-auto px-6">
          <div className="text-center space-y-4 mb-20">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 text-blue-600 text-xs font-bold uppercase tracking-widest"
            >
              <Zap className="w-4 h-4 fill-blue-600" />
              <span>Engineered for Academic Excellence</span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-black text-slate-900 leading-tight"
            >
              What Our Solutions <br />
              <span className="text-blue-600">Can Do For Your School</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-slate-500 font-medium max-w-2xl mx-auto text-lg"
            >
              Streamline your administrative workflow and focus on education with tools built specifically for modern institutions.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Zap, title: "Faster Admissions", desc: "Process student applications and enrollments without delays.", accent: "bg-blue-600" },
              { icon: BarChart3, title: "Real-Time Tracking", desc: "Monitor attendance, fee payments, and results instantly.", accent: "bg-indigo-600" },
              { icon: ClipboardList, title: "Error-Free Reports", desc: "Automatic calculations ensure accurate result sheets.", accent: "bg-cyan-600" },
              { icon: Users, title: "Staff Coordination", desc: "Sync data between teachers, administration, and parents.", accent: "bg-teal-600" },
              { icon: CreditCard, title: "Online Payments", desc: "Accept fees via UPI, card, and net banking securely.", accent: "bg-green-600" },
              { icon: TrendingUp, title: "Institutional Growth", desc: "Improve efficiency and attract more students.", accent: "bg-blue-800" }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ 
                  duration: 0.4, 
                  delay: i * 0.05,
                  ease: "easeOut"
                }}
                className="group p-10 rounded-[2.5rem] bg-white border border-slate-100 shadow-sm hover:shadow-2xl hover:shadow-slate-200/50 transition-all duration-500 relative overflow-hidden"
              >
                <div className={`absolute top-0 left-0 w-full h-1.5 ${item.accent} transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500`} />
                <div className="w-16 h-16 rounded-2xl bg-slate-50 flex items-center justify-center mb-8 group-hover:scale-110 group-hover:bg-slate-900 transition-all duration-500">
                  <item.icon className={`w-8 h-8 text-slate-600 group-hover:text-white transition-colors duration-500`} />
                </div>
                <h3 className="text-2xl font-black text-slate-900 mb-4 group-hover:text-blue-600 transition-colors">{item.title}</h3>
                <p className="text-slate-500 leading-relaxed font-medium">{item.desc}</p>
                <div className="mt-8 flex items-center text-sm font-bold text-slate-300 group-hover:text-blue-600 transition-colors gap-2">
                  <span>LEARN MORE</span>
                  <div className="h-px w-8 bg-slate-200 group-hover:w-12 group-hover:bg-blue-600 transition-all duration-500" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-24 relative z-10 ">
        <div className="min-w-7xl mx-auto px-6">
          <div className="bg-slate-900 rounded-[3rem] overflow-hidden shadow-2xl flex flex-col lg:flex-row">
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
              <form className="grid grid-cols-1 md:grid-cols-2 gap-6" onSubmit={(e) => e.preventDefault()}>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-400 uppercase tracking-wider">Full Name</label>
                  <input type="text" placeholder="Amit Sharma" className="w-full bg-slate-800 border border-slate-700 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-blue-500 transition-all font-medium" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-400 uppercase tracking-wider">School Name</label>
                  <input type="text" placeholder="Modern Public School" className="w-full bg-slate-800 border border-slate-700 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-blue-500 transition-all font-medium" />
                </div>
                <div className="space-y-2 md:col-span-2">
                  <textarea rows="4" placeholder="Tell us about your requirements..." className="w-full bg-slate-800 border border-slate-700 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-blue-500 transition-all font-medium resize-none"></textarea>
                </div>
                <div className="md:col-span-2 pt-4">
                  <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="w-full bg-blue-600 hover:bg-blue-500 text-white font-black py-5 rounded-2xl shadow-xl transition-all text-lg">
                    Send Message
                  </motion.button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;