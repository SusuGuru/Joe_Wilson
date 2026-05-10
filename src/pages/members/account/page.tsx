import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import MembersNavbar from "../components/MembersNavbar";
import Footer from "@/components/feature/Footer";
import CTASection from "@/components/feature/CTASection";
import { ChevronDown, ChevronUp, Edit2 } from "lucide-react";

export default function AccountPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white flex flex-col font-inter">
      {/* We pass a light prop or adjust MembersNavbar to handle white background. 
          Actually, we can just use the existing MembersNavbar and let it have black text.
          But MembersNavbar uses text-white. We'll need to modify it or assume a dark hero isn't here.
          Wait, the screenshot for Account has a WHITE header but the navbar still has white text?
          No, the navbar in the screenshot has black text: "Dashboard", "Masterclass", "Account", and the JosephWilson logo is dark.
          I'll modify MembersNavbar to accept a `theme="light" | "dark"` prop. */}
      <MembersNavbar theme="light" />

      {/* ── Header ── */}
      <div className="pt-32 pb-16 flex flex-col items-center justify-center bg-white border-b border-gray-200 mb-12">
        <h1 className="text-[32px] md:text-[48px] font-black text-[#1a1a1a] uppercase tracking-widest mb-3">
          ACCOUNT
        </h1>
        <div className="flex items-center gap-2 text-[10px] md:text-[12px] text-gray-500 font-medium tracking-widest">
          <Link to="/" className="hover:text-gray-900 transition-colors">HOME</Link>
          <span>/</span>
          <Link to="/members" className="hover:text-gray-900 transition-colors">MEMBERS AREA</Link>
          <span>/</span>
          <span className="text-gray-900">ACCOUNT</span>
        </div>
      </div>

      {/* ── Content ── */}
      <main className="flex-1 w-full max-w-[1000px] mx-auto px-4 md:px-8 pb-20">
        <div className="flex flex-col gap-6">
          <IdentitySection />
          <SecuritySection />
          <BillingHistorySection />
          <LogoutSection />
        </div>
      </main>

      <CTASection />
      <Footer />
    </div>
  );
}

function AccordionSection({
  title,
  children,
  defaultOpen = true
}: {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="bg-[#f5f6fa] w-full">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-6 md:p-8 cursor-pointer hover:bg-gray-100 transition-colors"
      >
        <h2 className="text-[11px] font-bold text-[#1a1a1a] uppercase tracking-widest">
          {title}
        </h2>
        {isOpen ? <ChevronUp size={16} className="text-gray-500" /> : <ChevronDown size={16} className="text-gray-500" />}
      </button>

      {isOpen && (
        <div className="px-6 md:px-8 pb-8">
          {children}
        </div>
      )}
    </div>
  );
}

function IdentitySection() {
  return (
    <AccordionSection title="IDENTITY">
      <div className="flex items-center gap-4 mb-8">
        <div className="relative w-14 h-14 rounded-sm overflow-hidden bg-gray-200">
          <img
            src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=100&auto=format&fit=crop"
            alt="Profile"
            className="w-full h-full object-cover"
          />
          <button className="absolute bottom-1 right-1 bg-white p-1 rounded-full shadow-sm cursor-pointer">
            <Edit2 size={10} className="text-gray-600" />
          </button>
        </div>
        <div>
          <h3 className="text-sm font-bold text-[#1a1a1a] mb-0.5">Profile Identity</h3>
          <p className="text-xs text-gray-500">Update your photo and personal details.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div>
          <label className="block text-[9px] font-bold text-gray-500 uppercase tracking-widest mb-2">
            FIRST NAME
          </label>
          <input
            type="text"
            defaultValue="Julian"
            className="w-full bg-transparent border border-gray-300 px-4 py-3 text-sm text-[#1a1a1a] focus:outline-none focus:border-[#077DA7]"
          />
        </div>
        <div>
          <label className="block text-[9px] font-bold text-gray-500 uppercase tracking-widest mb-2">
            LAST NAME
          </label>
          <input
            type="text"
            defaultValue="Bach"
            className="w-full bg-transparent border border-gray-300 px-4 py-3 text-sm text-[#1a1a1a] focus:outline-none focus:border-[#077DA7]"
          />
        </div>
      </div>

      <div className="flex justify-end">
        <button className="bg-[#077DA7] text-white text-[10px] font-bold px-6 py-3 uppercase tracking-widest hover:bg-[#05637f] transition-colors rounded-none">
          SAVE CHANGES
        </button>
      </div>
    </AccordionSection>
  );
}

function SecuritySection() {
  return (
    <AccordionSection title="SECURITY">
      <div className="max-w-[400px] mb-6">
        <label className="block text-[9px] font-bold text-gray-500 uppercase tracking-widest mb-2">
          CURRENT PASSWORD
        </label>
        <input
          type="password"
          defaultValue="123456"
          className="w-full bg-transparent border border-gray-300 px-4 py-3 text-lg tracking-[0.2em] text-[#1a1a1a] focus:outline-none focus:border-[#077DA7]"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div>
          <label className="block text-[9px] font-bold text-gray-500 uppercase tracking-widest mb-2">
            NEW PASSWORD
          </label>
          <input
            type="password"
            defaultValue="123456"
            className="w-full bg-transparent border border-gray-300 px-4 py-3 text-lg tracking-[0.2em] text-[#1a1a1a] focus:outline-none focus:border-[#077DA7]"
          />
        </div>
        <div>
          <label className="block text-[9px] font-bold text-gray-500 uppercase tracking-widest mb-2">
            CONFIRM PASSWORD
          </label>
          <input
            type="password"
            defaultValue="123456"
            className="w-full bg-transparent border border-gray-300 px-4 py-3 text-lg tracking-[0.2em] text-[#1a1a1a] focus:outline-none focus:border-[#077DA7]"
          />
        </div>
      </div>

      <div>
        <button className="bg-white border border-gray-300 text-[#1a1a1a] text-[10px] font-bold px-6 py-3 uppercase tracking-widest hover:border-gray-400 transition-colors rounded-none">
          CHANGE PASSWORD
        </button>
      </div>
    </AccordionSection>
  );
}

function BillingHistorySection() {
  const transactions = [
    { title: "Chopin Etudes Masterclass", date: "March 12, 2024", amount: "$149.00" },
    { title: "Theory & Composition: Level II", date: "February 01, 2024", amount: "$89.00" },
    { title: "Premium Annual Membership", date: "January 15, 2024", amount: "$399.00" },
  ];

  return (
    <AccordionSection title="BILLING HISTORY">
      <div className="flex flex-col gap-6">
        {transactions.map((tx, idx) => (
          <div key={idx} className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-gray-200 last:border-0 last:pb-0">
            <div className="mb-2 sm:mb-0">
              <h3 className="text-[13px] font-bold text-[#1a1a1a] mb-1">{tx.title}</h3>
              <p className="text-[11px] text-gray-500">{tx.date}</p>
            </div>
            <div className="flex flex-col sm:items-end">
              <span className="text-[13px] font-bold text-[#1a1a1a] mb-1">{tx.amount}</span>
              <a href="#" className="text-[10px] font-bold text-[#077DA7] hover:text-[#05637f] uppercase tracking-widest transition-colors">
                RECEIPT
              </a>
            </div>
          </div>
        ))}
      </div>
    </AccordionSection>
  );
}

function LogoutSection() {
  return (
    <AccordionSection title="LOGOUT" defaultOpen={false}>
      <button className="bg-white border border-gray-300 text-[#1a1a1a] text-[10px] font-bold px-8 py-3 uppercase tracking-widest hover:border-gray-400 transition-colors rounded-none">
        LOGOUT
      </button>
    </AccordionSection>
  );
}
