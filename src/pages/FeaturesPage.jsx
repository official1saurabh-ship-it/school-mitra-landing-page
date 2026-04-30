import React, { useLayoutEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  GraduationCap, 
  Users, 
  CreditCard, 
  MessageSquare, 
  LayoutDashboard, 
  ShieldCheck, 
  Map, 
  BookOpen, 
  Bed, 
  Coffee, 
  BarChart, 
  Smartphone,
  ArrowDown
} from 'lucide-react';
import { Background3D } from '../components/Scene3D';

gsap.registerPlugin(ScrollTrigger);

const FeaturesPage = () => {
  const containerRef = useRef(null);
  const wrapperRef = useRef(null);

  const categories = [
    {
      icon: GraduationCap,
      title: "Academic Management",
      desc: "Student admissions, records, class scheduling, and result generation.",
      path: "/features/academic-management",
      color: "text-blue-500",
      glow: "shadow-blue-500/20"
    },
    {
      icon: Users,
      title: "Staff Management",
      desc: "Teacher profiles, attendance tracking, payroll, and performance monitoring.",
      path: "/features/staff-management",
      color: "text-indigo-500",
      glow: "shadow-indigo-500/20"
    },
    {
      icon: CreditCard,
      title: "Finance Management",
      desc: "Fee structure setup, online collections, expense tracking, and reports.",
      path: "/features/finance-management",
      color: "text-emerald-500",
      glow: "shadow-emerald-500/20"
    },
    {
      icon: MessageSquare,
      title: "Communication",
      desc: "SMS/Email alerts, push notifications, and parent-teacher chat systems.",
      path: "/features/communication",
      color: "text-amber-500",
      glow: "shadow-amber-500/20"
    },
    {
      icon: LayoutDashboard,
      title: "Parent & Student Portal",
      desc: "Dedicated login for families to track progress and manage fee payments.",
      path: "/features/parent-student-portal",
      color: "text-rose-500",
      glow: "shadow-rose-500/20"
    },
    {
      icon: ShieldCheck,
      title: "Administration",
      desc: "Roles & permissions, ID cards, certificates, and multi-school control.",
      path: "/features/administration",
      color: "text-cyan-500",
      glow: "shadow-cyan-500/20"
    },
    {
      icon: Map,
      title: "Transport Management",
      desc: "Route optimization, real-time vehicle tracking, and driver management.",
      path: "/features/transport-management",
      color: "text-violet-500",
      glow: "shadow-violet-500/20"
    },
    {
      icon: BookOpen,
      title: "Library Management",
      desc: "Digital inventory, automated book issuing, and fine calculation system.",
      path: "/features/library-management",
      color: "text-blue-400",
      glow: "shadow-blue-400/20"
    },
    {
      icon: Bed,
      title: "Hostel Management",
      desc: "Room allocation, residential fee tracking, and student attendance.",
      path: "/features/hostel-management",
      color: "text-orange-500",
      glow: "shadow-orange-500/20"
    },
    {
      icon: Coffee,
      title: "Other Facilities",
      desc: "Canteen sales management and school-wide asset & inventory tracking.",
      path: "/features/other-facilities",
      color: "text-stone-400",
      glow: "shadow-stone-400/20"
    },
    {
      icon: BarChart,
      title: "Reports & Analytics",
      desc: "In-depth visual insights into academic and financial institutional health.",
      path: "/features/reports-analytics",
      color: "text-sky-500",
      glow: "shadow-sky-500/20"
    },
    {
      icon: Smartphone,
      title: "System Features",
      desc: "Native mobile apps, cloud backups, and enterprise-level data security.",
      path: "/features/technical-system-features",
      color: "text-slate-400",
      glow: "shadow-slate-400/20"
    }
  ];

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray('.feature-card');
      
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: wrapperRef.current,
          start: "top top",
          end: "+=120%", // Instant walkthrough: only 1.2 screens total
          scrub: true, // Perfect sync
          pin: true,
          anticipatePin: 1,
        }
      });

      cards.forEach((card, i) => {
        gsap.set(card, { 
          z: -5000, 
          opacity: 0,
          scale: 0.5,
          filter: "blur(20px)"
        });

        tl.to(card, {
          z: 0,
          opacity: 1,
          scale: 1,
          filter: "blur(0px)",
          duration: 0.4,
          ease: "power2.out"
        }, i * 0.4)
        .to(card, {
          z: 2000,
          opacity: 0,
          scale: 3,
          filter: "blur(15px)",
          duration: 0.4,
          ease: "power2.in"
        }, i * 0.4 + 0.4);
      });

      gsap.to('.bg-pulse', {
        scale: 1.2,
        opacity: 0.4,
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="bg-slate-950 text-white selection:bg-blue-500/30">
      <div ref={wrapperRef} className="relative h-screen overflow-hidden">
        
        {/* Cinematic Background Elements */}
        <div className="absolute inset-0 z-0">
          <Background3D />
          <div className="bg-pulse absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-600/10 rounded-full blur-[150px]" />
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,transparent_0%,#020617_100%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-20" />
        </div>

        {/* Intro Text */}
        <div className="absolute top-12 left-1/2 -translate-x-1/2 z-20 text-center w-full px-6">
          <h1 className="text-xl md:text-2xl font-black uppercase tracking-[0.3em] text-blue-500 mb-2 drop-shadow-2xl">
            School Mitra Ecosystem
          </h1>
          <p className="text-slate-500 font-bold flex items-center justify-center gap-2 animate-bounce mt-4">
            Scroll to explore <ArrowDown className="w-4 h-4" />
          </p>
        </div>

        {/* 3D Scene Container */}
        <div className="relative h-full w-full flex items-center justify-center preserve-3d" style={{ perspective: "1200px" }}>
          
          {categories.map((cat, i) => (
            <div 
              key={i} 
              className="feature-card absolute w-[90%] max-w-2xl aspect-[16/10] md:aspect-[21/9] flex items-center justify-center pointer-events-none will-change-transform"
              style={{ transformStyle: 'preserve-3d' }}
            >
              <div className={`
                relative w-full h-full p-8 md:p-12 rounded-[3rem] 
                bg-slate-900/40 backdrop-blur-3xl border border-slate-800
                flex flex-col md:flex-row items-center gap-8 md:gap-12
                shadow-2xl shadow-black/50 ${cat.glow}
                pointer-events-auto group
              `}>
                
                <div className={`
                  w-24 h-24 md:w-32 md:h-32 rounded-[2.5rem] bg-slate-950/50 
                  flex items-center justify-center border border-slate-800
                  group-hover:scale-110 transition-transform duration-700
                `}>
                  <cat.icon className={`w-12 h-12 md:w-16 md:h-16 ${cat.color} drop-shadow-[0_0_15px_rgba(59,130,246,0.5)]`} />
                </div>

                <div className="flex-1 text-center md:text-left space-y-4">
                  <h2 className="text-3xl md:text-5xl font-black tracking-tight text-white leading-tight">
                    {cat.title}
                  </h2>
                  <p className="text-lg md:text-xl text-slate-400 font-medium leading-relaxed max-w-md">
                    {cat.desc}
                  </p>
                  <Link 
                    to={cat.path}
                    className="inline-flex items-center gap-3 mt-4 px-8 py-4 bg-white text-slate-950 font-black rounded-2xl hover:bg-blue-500 hover:text-white transition-all duration-300 transform active:scale-95 shadow-xl"
                  >
                    View Details
                  </Link>
                </div>

                <div className="absolute -top-6 -right-6 w-24 h-24 bg-blue-500/5 rounded-full blur-2xl group-hover:bg-blue-500/20 transition-all duration-700" />
              </div>
            </div>
          ))}

        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-slate-600 font-bold text-xs uppercase tracking-widest opacity-40">
          Powered by Biosoftech
        </div>

      </div>

      <div className="h-[20vh] bg-slate-950" />
    </div>
  );
};

export default FeaturesPage;