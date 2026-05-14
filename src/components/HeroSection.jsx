import { Users, GraduationCap, IndianRupee, BarChart, MessageCircle } from "lucide-react";
import Laptopbag from "../assets/Laptop-bag.png";




export default function HeroSection() {
    const features = [
        {
            name: "Student Management",
            icon: Users,
        },
        {
            name: "Academic Excellence",
            icon: GraduationCap,
        },
        {
            name: "Fee Management",
            icon: IndianRupee,
        },
        {
            name: "Reports & Analytics",
            icon: BarChart,
        },
        {
            name: "Parent Communication",
            icon: MessageCircle,
        },
    ];
    return (
        <section className="relative w-full bg-gradient-to-r from-[#eef3ff] to-[#e6f0ff] py-12 px-4 sm:px-8 lg:px-16 overflow-hidden">

            <div className="relative w-full max-w-screen-2xl mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-10">

                {/* LEFT CONTENT */}
                <div className="relative z-10">

                    {/* Logo + Title */}
                    <div className="flex items-center gap-3 mb-4">
                        <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center text-white font-bold">
                            SM
                        </div>
                        <div>
                            <h2 className="text-2xl font-bold text-gray-800">
                                School Mitra
                            </h2>
                            <p className="text-sm text-gray-500">
                                School Management Software
                            </p>
                        </div>
                    </div>

                    {/* Heading */}
                    <h1 className="text-4xl lg:text-5xl font-bold text-gray-800 leading-tight">
                        Smart School, <br />
                        <span className="text-blue-600">Better Future</span>
                    </h1>

                    {/* Description */}
                    <p className="mt-4 text-gray-800 font-bold max-w-md">
                        A complete digital solution to manage your school operations
                        smoothly and efficiently.
                    </p>

                    {/* Features */}
                    <div className="flex flex-wrap gap-6 mt-6">
                        {features.map((item, index) => {
                            const Icon = item.icon;

                            return (
                                <div key={index} className="flex items-center gap-2">

                                    <div className="w-10 h-10 rounded-full bg-white shadow flex items-center justify-center text-blue-500">
                                        <Icon className="w-5 h-5" />
                                    </div>

                                    <p className="text-sm text-gray-700">{item.name}</p>
                                </div>
                            );
                        })}
                    </div>

                    {/* CTA */}
                    <div className="mt-8">
                        <button className="px-6 py-3 rounded-full bg-blue-600 text-white font-semibold shadow hover:bg-blue-700 transition">
                            <a href='https://school.biosoftech.in/register'>Secure. Reliable. Easy to Use.</a>
                        </button>
                    </div>

                </div>

                {/* RIGHT IMAGE */}
                <div className="relative flex justify-center items-center lg:items-stretch opacity-100 z-auto pointer-events-auto mt-10 lg:mt-0">

                    <img
                        src={Laptopbag} // replace with your image path
                        alt="Dashboard"
                        className="w-full max-w-[650px] lg:max-w-full object-contain"
                    />

                </div>

            </div>

        </section>
    );
}