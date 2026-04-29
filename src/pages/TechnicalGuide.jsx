import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Book, Terminal, ShoppingCart, Package, Users, UserCog, BarChart3 } from 'lucide-react';

const guideContent = {
  operations: {
    title: 'Operations Technical Guide',
    icon: Terminal,
    description: 'Master the daily restaurant floor activities with our comprehensive operations guide.',
    sections: [
      { title: 'POS Billing Setup', content: 'Configure your Point of Sale system for rapid order entry and payment processing. Integrate with local printers and digital wallets.' },
      { title: 'Kitchen Display System (KDS)', content: 'Set up real-time order displays in the kitchen to eliminate paper waste and improve communication between front-of-house and kitchen staff.' },
      { title: 'Table Management', content: 'Design your floor plan digitally to track table occupancy, reservation status, and server assignments efficiently.' }
    ]
  },
  sales: {
    title: 'Orders & Sales Technical Guide',
    icon: ShoppingCart,
    description: 'Detailed technical walkthrough for managing orders, KOTs, and invoicing.',
    sections: [
      { title: 'KOT Workflow', content: 'Understand the instant Kitchen Order Ticket generation process and how it synchronizes across all terminal stations.' },
      { title: 'Digital Invoicing', content: 'Configure automated digital invoice generation and delivery via SMS or Email for a paperless experience.' },
      { title: 'Split Billing Logic', content: 'Technical details on how our system handles complex bill splitting scenarios by item or by percentage.' }
    ]
  },
  inventory: {
    title: 'Stock Technical Guide',
    icon: Package,
    description: 'Optimize your inventory management and reduce wastage with these technical steps.',
    sections: [
      { title: 'Live Inventory Tracking', content: 'Connect your POS sales to real-time ingredient depletion. Set up recipe-level tracking for maximum accuracy.' },
      { title: 'Purchase Order Automation', content: 'Configure auto-generation of purchase orders when stock levels hit the predefined minimum threshold.' },
      { title: 'Wastage Analytics', content: 'Log and analyze food wastage patterns to identify cost-saving opportunities in your kitchen.' }
    ]
  },
  analytics: {
    title: 'Analytics Technical Guide',
    icon: BarChart3,
    description: 'Harness the power of data with our advanced analytics and reporting tools.',
    sections: [
      { title: 'Data Collection Integration', content: 'Technical guide on how we collect and process visitor demographics and sales data in real-time.' },
      { title: 'Custom Report Generation', content: 'Learn how to build and export custom business intelligence reports tailored to your restaurant\'s KPIs.' },
      { title: 'Predictive Sales Modeling', content: 'How our AI engine uses historical data to predict future sales trends and staffing needs.' }
    ]
  },
  crm: {
    title: 'CRM Technical Guide',
    icon: Users,
    description: 'Build lasting customer relationships using our integrated CRM modules.',
    sections: [
      { title: 'Guest Profiles & History', content: 'Manage detailed customer profiles, including dining preferences, allergy information, and visit history.' },
      { title: 'Loyalty Program Engine', content: 'Set up points-based or tier-based loyalty programs with automated reward triggers.' },
      { title: 'Vendor Management Portal', content: 'Streamline communication with your suppliers through a centralized portal for orders and payments.' }
    ]
  },
  hr: {
    title: 'HRM Technical Guide',
    icon: UserCog,
    description: 'Manage your workforce effectively with role-based access and staff profiles.',
    sections: [
      { title: 'Role-Based Access Control (RBAC)', content: 'Configure granular permissions for different staff roles (Manager, Waiter, Chef) to ensure data security.' },
      { title: 'Staff Performance Tracking', content: 'Monitor individual staff performance metrics, attendance, and feedback through the HRM dashboard.' },
      { title: 'Payroll Integration', content: 'Synchronize staff hours and commissions with your existing payroll systems for seamless processing.' }
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
