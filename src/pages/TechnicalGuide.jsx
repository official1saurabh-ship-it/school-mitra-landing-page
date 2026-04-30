import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Book, School, GraduationCap, BookOpen, Users, UserCog, BarChart3 } from 'lucide-react';

const guideContent = {
  operations: {
    title: 'Academic Operations Guide',
    icon: School,
    description: 'Master the daily school activities with our comprehensive academic operations guide.',
    sections: [
      { title: 'Fee Management Setup', content: 'Configure your fee structure for rapid collection and payment processing. Integrate with local banks and digital wallets.' },
      { title: 'Student Information System (SIS)', content: 'Set up real-time student dashboards to eliminate paper waste and improve communication between administration and parents.' },
      { title: 'Classroom Tracking', content: 'Design your school layout digitally to track classroom occupancy, attendance status, and teacher assignments efficiently.' }
    ]
  },
  sales: {
    title: 'Admissions & Fees Guide',
    icon: GraduationCap,
    description: 'Detailed technical walkthrough for managing admissions, enrollments, and fee collection.',
    sections: [
      { title: 'Admission Workflow', content: 'Understand the instant student enrollment process and how it synchronizes across all administration stations.' },
      { title: 'Fee Receipt Generation', content: 'Configure automated digital fee receipt generation and delivery via SMS or Email for a paperless experience.' },
      { title: 'Installment Plan Logic', content: 'Technical details on how our system handles complex fee installment scenarios by month or by term.' }
    ]
  },
  inventory: {
    title: 'Library & Assets Guide',
    icon: BookOpen,
    description: 'Optimize your library management and reduce resource wastage with these technical steps.',
    sections: [
      { title: 'Live Book Tracking', content: 'Connect your library system to real-time book issuance and returns. Set up automated overdue alerts.' },
      { title: 'Asset Procurement', content: 'Configure auto-generation of purchase orders when school supplies hit the predefined minimum threshold.' },
      { title: 'Resource Analytics', content: 'Log and analyze resource usage patterns to identify cost-saving opportunities in your campus.' }
    ]
  },
  analytics: {
    title: 'Academic Analytics Guide',
    icon: BarChart3,
    description: 'Harness the power of data with our advanced academic analytics and progress reporting tools.',
    sections: [
      { title: 'Performance Integration', content: 'Technical guide on how we collect and process student demographics and academic results in real-time.' },
      { title: 'Custom Report Generation', content: 'Learn how to build and export custom academic intelligence reports tailored to your school\'s KPIs.' },
      { title: 'Predictive Progress Modeling', content: 'How our AI engine uses historical data to predict future student trends and resource needs.' }
    ]
  },
  crm: {
    title: 'Parent-Student Portal Guide',
    icon: Users,
    description: 'Build lasting relationships with parents and students using our integrated portal modules.',
    sections: [
      { title: 'Student Profiles & History', content: 'Manage detailed student profiles, including academic preferences, attendance records, and health information.' },
      { title: 'Scholarship Program Engine', content: 'Set up merit-based or need-based scholarship programs with automated eligibility triggers.' },
      { title: 'Vendor Management Portal', content: 'Streamline communication with your uniform and book suppliers through a centralized portal.' }
    ]
  },
  hr: {
    title: 'Staff & Teacher Guide',
    icon: UserCog,
    description: 'Manage your faculty effectively with role-based access and staff profiles.',
    sections: [
      { title: 'Role-Based Access Control (RBAC)', content: 'Configure granular permissions for different staff roles (Principal, Teacher, Accountant) to ensure data security.' },
      { title: 'Teacher Performance Tracking', content: 'Monitor individual teacher performance metrics, attendance, and feedback through the HRM dashboard.' },
      { title: 'Payroll Integration', content: 'Synchronize staff hours and benefits with your existing payroll systems for seamless processing.' }
    ]
  }
};

const TechnicalGuide = () => {
  const { category } = useParams();
  const navigate = useNavigate();
  const guide = guideContent[category] || guideContent.operations;

  const Icon = guide.icon;

  return (
    <div className="min-h-screen bg-gray-50">
      
      <main className="pt-24 pb-20 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Breadcrumb / Back */}
          <button 
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-gray-500 hover:text-saas-accent transition-colors mb-8 group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span className="font-medium text-sm">Back to Features</span>
          </button>

          {/* Header */}
          <div className="bg-white border border-saas-border rounded-[2.5rem] p-8 md:p-12 shadow-sm mb-10">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-4 bg-saas-accent/10 rounded-2xl text-saas-accent">
                <Icon className="w-8 h-8" />
              </div>
              <div>
                <h1 className="text-3xl md:text-4xl font-black text-gray-900 tracking-tight">
                  {guide.title}
                </h1>
                <p className="text-gray-500 font-medium">Technical Documentation & Setup</p>
              </div>
            </div>
            <p className="text-gray-600 text-lg leading-relaxed">
              {guide.description}
            </p>
          </div>

          {/* Guide Sections */}
          <div className="space-y-6">
            {guide.sections.map((section, index) => (
              <div 
                key={index} 
                className="bg-white border border-saas-border rounded-3xl p-8 hover:shadow-md transition-shadow"
              >
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0 text-gray-500 font-bold text-sm">
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{section.title}</h3>
                    <p className="text-gray-600 leading-relaxed">
                      {section.content}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Footer Call to Action */}
          <div className="mt-12 bg-saas-accent rounded-[2rem] p-8 text-center text-white">
            <h3 className="text-2xl font-bold mb-4">Need more help?</h3>
            <p className="mb-8 text-white/80">Our technical support team is available 24/7 to help you with your setup.</p>
            <button className="bg-white text-saas-accent px-8 py-3 rounded-xl font-bold hover:bg-gray-100 transition-colors">
              Contact Support
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default TechnicalGuide;
