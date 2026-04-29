import React, { useEffect, useLayoutEffect, useRef } from "react";
import { Link } from "react-router-dom";
import laptop from "../assets/laptop-mobile.png";
import cloud from "../assets/cloud.png";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import girl from "../assets/Girl.png";
import tables from "../assets/dashboard.png";
import overview from "../assets/overview.jpeg";
import { CheckCircle, TrendingUp, BarChart3, Users, Star, Quote, LayoutGrid, Smartphone, Coffee, ClipboardList, PieChart, ShieldCheck, CreditCard } from "lucide-react";
import { motion } from "framer-motion";
import { Zap } from 'lucide-react';


gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  const imageRef = useRef(null);
  const sectionRef = useRef(null);

  // 🔥 ensure refresh after full page load (layout stable)
  useEffect(() => {
    const handleLoad = () => ScrollTrigger.refresh();
    window.addEventListener("load", handleLoad);
    return () => window.removeEventListener("load", handleLoad);
  }, []);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      if (!imageRef.current || !sectionRef.current) return;

      // initial state (back side)
      gsap.set(imageRef.current, {
        rotateY: -180,
        transformOrigin: "center center",
        transformPerspective: 1000,
      });

      // animation
      gsap.to(imageRef.current, {
        rotateY: 0,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%",
          end: "top 20%",
          scrub: 2,
          invalidateOnRefresh: true,
        },
      });
    }, sectionRef);

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
      {/* Decorative Background Blobs for soft tint */}
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
          <span className="text-purple-600">Modern Restaurants</span>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-xl text-slate-500 font-medium max-w-2xl mx-auto"
        >
          Ab orders, billing aur reports sab ek hi jagah — bina tension ke.
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

      <div className="min-w-7xl mx-auto px-6 py-20 text-slate-900 flex flex-col lg:flex-row items-stretch gap-12 relative z-10">
        <div className="lg:w-5/12 space-y-8 flex flex-col justify-center py-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-100/50 backdrop-blur-md border border-purple-200/50 text-xs font-bold tracking-widest text-purple-700 w-fit"
          >
            <Star className="w-4 h-4 text-purple-600 fill-purple-600" />
            <span>LOVED BY RESTAURANT OWNERS</span>
          </motion.div>

          <div className="space-y-4">
            <h2 className="text-4xl md:text-6xl font-black leading-tight text-slate-900">
              Why Our <span className="text-purple-600"> Clients</span> <br />
              <span className="text-slate-400">Love Us</span>
            </h2>
            <p className="text-lg md:text-xl text-slate-600 font-medium max-w-xl leading-relaxed">
              We don't just provide software; we become the <span className="underline decoration-purple-300 decoration-4 underline-offset-4">growth partner</span> for your restaurant's success.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { icon: CheckCircle, title: "Simplify Daily Operations", desc: "Manage tables, orders, and menu in a few clicks" },
              { icon: TrendingUp, title: "Increase Efficiency", desc: "Reduce manual work and save valuable time" },
              { icon: BarChart3, title: "Real-time Business Insights", desc: "Track sales, revenue and performance instantly" },
              { icon: Users, title: "Happy Customers", desc: "Better service leads to repeat business" }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex gap-4 group cursor-pointer"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-white shadow-sm border border-slate-100 flex items-center justify-center group-hover:shadow-md group-hover:border-purple-200 transition-all duration-300">
                  <item.icon className="w-6 h-6 text-slate-400 group-hover:text-purple-600 group-hover:scale-110 transition-all duration-300" />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-slate-800 group-hover:text-purple-700 transition-colors">{item.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4">
            {[
              { val: "500+", label: "Restaurants" },
              { val: "30%", label: "Avg. Efficiency" },
              { val: "40%", label: "Less Manual" },
              { val: "4.5/5", label: "Rating" }
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
            <Quote className="absolute -right-4 -top-4 w-32 h-32 text-purple-50 rotate-12" />
            <p className="relative z-10 text-lg font-medium italic leading-relaxed text-slate-700">
              "Restaurant Mitra has completely transformed the way we manage our restaurant. It's smart, simple, and super effective!"
            </p>
            <div className="mt-6 flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-purple-100 to-pink-100 flex items-center justify-center font-bold border border-white shadow-inner text-purple-700">
                AK
              </div>
              <div>
                <div className="font-black text-slate-900">Amit Kumar</div>
                <div className="text-xs font-bold text-slate-400 uppercase tracking-widest">Owner, Urban Tadka</div>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="lg:w-7/12 relative">
          <div className="relative w-full h-full min-h-[600px] lg:min-h-0 flex items-end justify-center overflow-hidden rounded-3xl bg-slate-50/50 border border-slate-100 shadow-inner">
            {/* Background Image (Girl) */}
            <div className="absolute inset-0 animate-float">
              <img
                src={girl}
                alt="Happy Restaurant Owner"
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
                alt="Dashboard Preview"
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
                alt="Analytics Preview"
                className="rounded-2xl shadow-2xl border-4 border-white backdrop-blur-xl"
              />
            </motion.div>

            {/* Decorative Blooms */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-purple-100/30 blur-[120px] rounded-full -z-10" />
          </div>
        </div>
      </div>
      {/* What Do We Do Section */}
      <section className="py-24 relative z-10 overflow-hidden">
        <div className="min-w-7xl mx-auto px-6">
          <div className="text-center space-y-4 mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-black text-slate-900"
            >
              What Do <span className="text-purple-600">We Do</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-slate-500 font-medium max-w-2xl mx-auto text-lg"
            >
              Our ecosystem — empowering Restaurants through integrated solutions that simplify every aspect of your business.
            </motion.p>
          </div>

          <div className="flex flex-wrap justify-center gap-8">
            {[
              {
                icon: LayoutGrid,
                title: "POS & Billing",
                desc: "Fast, secure, and easy-to-use billing system that works offline too. Manage payments and invoices effortlessly.",
                path: "/pos-billing"
              },
              {
                icon: Smartphone,
                title: "Online Ordering",
                desc: "Integrated online ordering system to accept direct orders from customers, reducing third-party commissions.",
                path: "/online-ordering"
              },
              {
                icon: Coffee,
                title: "Table Management",
                desc: "Real-time table status, reservations, and floor management to optimize seating and reduce wait times.",
                path: "/table-management"
              },
              {
                icon: ClipboardList,
                title: "Inventory & Stock",
                desc: "Track ingredient levels, manage suppliers, and get auto-restock alerts to minimize wastage.",
                path: "/inventory-stock"
              },
              {
                icon: PieChart,
                title: "Analytics & Reports",
                desc: "Comprehensive business insights with visual charts to track performance, sales trends, and profitability.",
                path: "/analytics-reports"
              },
              {
                icon: ShieldCheck,
                title: "Branch Wise Details",
                desc: "Role-based access control, attendance tracking, and secure logs to keep your business operations safe.",
                path: "/branch-details"
              },
              {
                icon: ShieldCheck,
                title: "Role Based Permission",
                desc: "Decide who can manage billing, orders, and inventory. Give limited access to staff and full control to admins for smooth and secure operations.",
                path: "/role-permissions"
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.33%-1.35rem)]"
              >
                <Link
                  to={item.path}
                  className="group block p-8 h-full rounded-[2rem] bg-white border border-slate-100 hover:border-purple-200 shadow-sm hover:shadow-xl hover:shadow-purple-500/5 transition-all duration-500"
                >
                  <div className="w-14 h-14 rounded-2xl bg-purple-50 flex items-center justify-center mb-6 group-hover:bg-purple-600 transition-colors duration-500">
                    <item.icon className="w-7 h-7 text-purple-600 group-hover:text-white transition-colors duration-500" />
                  </div>
                  <h3 className="text-xl font-black text-slate-900 mb-3 group-hover:text-purple-700 transition-colors">{item.title}</h3>
                  <p className="text-slate-500 leading-relaxed font-medium">
                    {item.desc}
                  </p>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Solution Capabilities Section - Symmetric Grid */}
      <section className="py-24 relative z-10 ">
        <div className="min-w-7xl mx-auto px-6">
          <div className="text-center space-y-4 mb-20">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-50 text-purple-600 text-xs font-bold uppercase tracking-widest"
            >
              <Zap className="w-4 h-4 fill-purple-600" />
              <span>Engineered for Excellence</span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-black text-slate-900 leading-tight"
            >
              What Our Solutions <br />
              <span className="text-purple-600">Can Do For You</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-slate-500 font-medium max-w-2xl mx-auto text-lg"
            >
              Streamline your workflow and maximize profits with tools built specifically for the modern food industry.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Zap,
                title: "Faster Operations",
                desc: "Manage orders, billing, and tables without delays — even during peak hours.",
                accent: "bg-purple-600"
              },
              {
                icon: BarChart3,
                title: "Real-Time Insights",
                desc: "Track sales, performance, and customer trends instantly from one dashboard.",
                accent: "bg-indigo-600"
              },
              {
                icon: ClipboardList,
                title: "Error-Free Billing",
                desc: "Automatic calculations ensure accurate bills every time, reducing manual errors.",
                accent: "bg-blue-600"
              },
              {
                icon: Users,
                title: "Staff Coordination",
                desc: "Sync orders between kitchen, billing, and staff seamlessly for better service.",
                accent: "bg-orange-600"
              },
              {
                icon: CreditCard,
                title: "Flexible Payments",
                desc: "Accept UPI, card, and cash — all integrated into one secure, reliable system.",
                accent: "bg-green-600"
              },
              {
                icon: TrendingUp,
                title: "Grow Your Business",
                desc: "Improve efficiency, serve more customers, and increase your monthly revenue.",
                accent: "bg-rose-600"
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group p-10 rounded-[2.5rem] bg-white border border-slate-100 shadow-sm hover:shadow-2xl hover:shadow-slate-200/50 transition-all duration-500 relative overflow-hidden"
              >
                {/* Hover Accent Bar */}
                <div className={`absolute top-0 left-0 w-full h-1.5 ${item.accent} transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500`} />

                <div className="w-16 h-16 rounded-2xl bg-slate-50 flex items-center justify-center mb-8 group-hover:scale-110 group-hover:bg-slate-900 transition-all duration-500">
                  <item.icon className={`w-8 h-8 text-slate-600 group-hover:text-white transition-colors duration-500`} />
                </div>

                <h3 className="text-2xl font-black text-slate-900 mb-4 group-hover:text-purple-600 transition-colors">
                  {item.title}
                </h3>

                <p className="text-slate-500 leading-relaxed font-medium">
                  {item.desc}
                </p>

                <div className="mt-8 flex items-center text-sm font-bold text-slate-300 group-hover:text-purple-600 transition-colors gap-2">
                  <span>LEARN MORE</span>
                  <div className="h-px w-8 bg-slate-200 group-hover:w-12 group-hover:bg-purple-600 transition-all duration-500" />
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
            {/* Left Side: Contact Info */}
            <div className="lg:w-5/12 p-12 lg:p-16 bg-gradient-to-br from-purple-600 to-indigo-700 text-white flex flex-col justify-between">
              <div>
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="text-4xl md:text-5xl font-black mb-6 leading-tight"
                >
                  Ready to Transform Your <br />
                  <span className="text-purple-200">Restaurant?</span>
                </motion.h2>
                <p className="text-purple-100 text-lg font-medium leading-relaxed opacity-90">
                  Join hundreds of successful owners who have simplified their operations with Restron Mitra.
                </p>
              </div>

              <div className="mt-12 space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center">
                    <CheckCircle className="w-6 h-6 text-purple-200" />
                  </div>
                  <span className="font-bold">Free 14-day trial</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center">
                    <CheckCircle className="w-6 h-6 text-purple-200" />
                  </div>
                  <span className="font-bold">24/7 Technical Support</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center">
                    <CheckCircle className="w-6 h-6 text-purple-200" />
                  </div>
                  <span className="font-bold">Setup in under 30 minutes</span>
                </div>
              </div>

              <div className="mt-12 pt-12 border-t border-white/10">
                <p className="text-sm font-bold uppercase tracking-widest text-purple-200 mb-2">Email us at</p>
                <p className="text-2xl font-black">info@biosoftech.com</p>
              </div>
            </div>

            {/* Right Side: Form */}
            <div className="lg:w-7/12 p-12 lg:p-16">
              <form className="grid grid-cols-1 md:grid-cols-2 gap-6" onSubmit={(e) => e.preventDefault()}>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-400 uppercase tracking-wider">Full Name</label>
                  <input
                    type="text"
                    placeholder="Amit Sharma"
                    className="w-full bg-slate-800 border border-slate-700 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all font-medium"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-400 uppercase tracking-wider">Restaurant Name</label>
                  <input
                    type="text"
                    placeholder="Urban Tadka"
                    className="w-full bg-slate-800 border border-slate-700 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all font-medium"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-400 uppercase tracking-wider">Email Address</label>
                  <input
                    type="email"
                    placeholder="amit@example.com"
                    className="w-full bg-slate-800 border border-slate-700 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all font-medium"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-400 uppercase tracking-wider">Phone Number</label>
                  <input
                    type="tel"
                    placeholder="+91 98765 43210"
                    className="w-full bg-slate-800 border border-slate-700 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all font-medium"
                  />
                </div>
                <div className="space-y-2 md:col-span-2">
                  <label className="text-sm font-bold text-slate-400 uppercase tracking-wider">How can we help?</label>
                  <textarea
                    rows="4"
                    placeholder="Tell us about your requirements..."
                    className="w-full bg-slate-800 border border-slate-700 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all font-medium resize-none"
                  ></textarea>
                </div>
                <div className="md:col-span-2 pt-4">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-purple-600 hover:bg-purple-500 text-white font-black py-5 rounded-2xl shadow-xl shadow-purple-600/20 transition-all text-lg"
                  >
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