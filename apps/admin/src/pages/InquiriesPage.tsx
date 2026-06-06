import React, { useState, useMemo, useEffect } from 'react';
import {
  Search,
  Mail,
  ChevronDown,
  Trash2,
  Inbox,
  CheckCircle,
  AlertCircle,
  Bold,
  Italic,
  Underline,
  Strikethrough,
  Code,
  Link as LinkIcon,
  Image as ImageIcon,
  List,
  ListOrdered,
  Quote,
  Undo2,
  Redo2,
  AlignLeft,
  AlignCenter,
  AlignRight,
  Code2
} from 'lucide-react';
import { INITIAL_INQUIRIES, type Inquiry } from '@/data/inquiries';

interface Reply {
  message: string;
  date: string;
  time: string;
}

export default function InquiriesPage() {
  const [inquiries, setInquiries] = useState<Inquiry[]>(() => INITIAL_INQUIRIES);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [search, setSearch] = useState('');
  const [activeTab, setActiveTab] = useState<'all' | 'open' | 'closed'>('all');
  const [sortOrder, setSortOrder] = useState<'newest' | 'oldest'>('newest');

  // Simulated replies map (inquiryId -> replies[])
  const [repliesMap, setRepliesMap] = useState<Record<string, Reply[]>>({});
  const [replyText, setReplyText] = useState('');
  const [isSending, setIsSending] = useState(false);
  const [toast, setToast] = useState<{ message: string; type: 'success' | 'info' | 'error' } | null>(null);

  // Set initial selected item on mount
  useEffect(() => {
    if (inquiries.length > 0) {
      setSelectedId(inquiries[0].id);
    }
  }, []);

  const showToast = (message: string, type: 'success' | 'info' | 'error' = 'success') => {
    setToast({ message, type });
    setTimeout(() => {
      setToast(null);
    }, 3000);
  };

  // Filter inquiries
  const filteredInquiries = useMemo(() => {
    return inquiries.filter(inq => {
      // Tab filter
      if (activeTab === 'open' && inq.status !== 'open') return false;
      if (activeTab === 'closed' && inq.status !== 'closed') return false;

      // Search filter
      const q = search.toLowerCase().trim();
      if (q) {
        return (
          inq.name.toLowerCase().includes(q) ||
          inq.email.toLowerCase().includes(q) ||
          inq.message.toLowerCase().includes(q)
        );
      }
      return true;
    });
  }, [inquiries, activeTab, search]);

  // Sort inquiries
  const sortedInquiries = useMemo(() => {
    return [...filteredInquiries].sort((a, b) => {
      const timeA = new Date(a.timestamp).getTime();
      const timeB = new Date(b.timestamp).getTime();
      return sortOrder === 'newest' ? timeB - timeA : timeA - timeB;
    });
  }, [filteredInquiries, sortOrder]);

  // Selected inquiry object
  const selectedInquiry = useMemo(() => {
    return inquiries.find(inq => inq.id === selectedId) || null;
  }, [inquiries, selectedId]);

  const handleToggleStatus = (id: string) => {
    setInquiries(prev =>
      prev.map(inq => {
        if (inq.id === id) {
          const nextStatus = inq.status === 'open' ? 'closed' : 'open';
          showToast(`Inquiry marked as ${nextStatus === 'closed' ? 'handled' : 'active'}`, 'success');
          return { ...inq, status: nextStatus };
        }
        return inq;
      })
    );
  };

  const handleDelete = (id: string) => {
    if (window.confirm('Are you sure you want to delete this inquiry?')) {
      setInquiries(prev => prev.filter(inq => inq.id !== id));
      setSelectedId(null);
      showToast('Inquiry deleted successfully', 'info');
    }
  };

  const handleSendReply = () => {
    if (!replyText.trim() || !selectedId) return;

    setIsSending(true);

    // Simulate network delay
    setTimeout(() => {
      const now = new Date();
      const newReply: Reply = {
        message: replyText,
        date: now.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
        time: now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })
      };

      setRepliesMap(prev => ({
        ...prev,
        [selectedId]: [...(prev[selectedId] || []), newReply]
      }));

      // Automatically mark inquiry as closed (handled) when replying
      setInquiries(prev =>
        prev.map(inq => (inq.id === selectedId ? { ...inq, status: 'closed' } : inq))
      );

      setReplyText('');
      setIsSending(false);
      showToast('Reply sent and inquiry marked as handled!', 'success');
    }, 800);
  };

  const selectedReplies = selectedId ? repliesMap[selectedId] || [] : [];

  return (
    <div className="p-5 lg:p-7 max-w-[1240px] mx-auto space-y-6 pb-16 relative">
      
      {/* Toast notifications */}
      {toast && (
        <div className="fixed top-4 right-4 z-50 flex items-center gap-2 px-4 py-3 border border-gray-200 bg-white shadow-lg animate-in fade-in slide-in-from-top-4 duration-300">
          {toast.type === 'success' && <CheckCircle size={16} className="text-emerald-500" />}
          {toast.type === 'info' && <Inbox size={16} className="text-brand" />}
          {toast.type === 'error' && <AlertCircle size={16} className="text-red-500" />}
          <span className="text-[13px] font-semibold text-gray-700">{toast.message}</span>
        </div>
      )}

      {/* ── Title Header Block ────────────────────────────────────────── */}
      <div>
        <p className="text-[11px] font-bold text-brand uppercase tracking-widest mb-1">Communication</p>
        <h1 className="text-[34px] font-bold text-gray-900 font-heading leading-tight">Inquiries</h1>
        <p className="text-gray-400 text-sm mt-1">
          Booking requests and general messages from the public site.
        </p>
      </div>

      <hr className="border-gray-200" />

      {/* ── Filters Row ────────────────────────────────────────────────── */}
      <div className="flex flex-col sm:flex-row sm:items-center gap-3">
        {/* Search - order-3 on mobile, order-1 on desktop */}
        <div className="relative w-full sm:w-72 flex-shrink-0 order-3 sm:order-1">
          <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
          <input
            type="text"
            value={search}
            onChange={e => setSearch(e.target.value)}
            placeholder="Search by name or email"
            className="w-full bg-white border border-gray-250 pl-9 pr-4 py-2 text-[13px] text-gray-750 placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-brand focus:border-brand transition-all"
          />
        </div>

        {/* Tab Selection - order-1 on mobile, order-2 on desktop */}
        <div className="flex bg-white border border-gray-200 p-0.5 gap-0.5 self-start order-1 sm:order-2">
          {(['all', 'open', 'closed'] as const).map(tab => {
            const count = tab === 'all' 
              ? inquiries.length 
              : inquiries.filter(i => i.status === (tab === 'open' ? 'open' : 'closed')).length;
            const isActive = activeTab === tab;
            return (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-1.5 text-[12.5px] font-semibold capitalize tracking-wide transition-all ${
                  isActive
                    ? 'bg-[#1A1919] text-white'
                    : 'text-gray-500 hover:text-gray-800'
                }`}
              >
                {tab === 'all' ? 'All' : tab === 'open' ? 'Open' : 'Closed'}
              </button>
            );
          })}
        </div>

        {/* Sort Select - order-2 on mobile, order-3 on desktop */}
        <div className="relative flex items-center bg-white border border-gray-200 px-3 py-1.5 gap-1.5 text-[13px] text-gray-700 cursor-pointer hover:bg-gray-50 self-start order-2 sm:order-3">
          <span className="text-gray-400">
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 4h18M3 10h12M3 16h6" />
            </svg>
          </span>
          <span className="text-gray-500 font-medium">Sort:</span>
          <select
            value={sortOrder}
            onChange={e => setSortOrder(e.target.value as 'newest' | 'oldest')}
            className="bg-transparent font-bold focus:outline-none cursor-pointer appearance-none pr-4"
          >
            <option value="newest">Newest</option>
            <option value="oldest">Oldest</option>
          </select>
          <ChevronDown size={14} className="absolute right-2.5 text-gray-400 pointer-events-none" />
        </div>
      </div>

      {/* ── Main Two-Column Split Layout ──────────────────────────────── */}
      <div className="grid grid-cols-1 lg:grid-cols-[380px_1fr] gap-6 items-start">
        
        {/* Left Side: Inquiry list (always visible, stacked on mobile) */}
        <div className="space-y-3 w-full">
          {sortedInquiries.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-16 px-4 border border-dashed border-gray-200 bg-white text-center">
              <Inbox className="text-gray-300 mb-2" size={32} />
              <p className="text-[13px] font-bold text-gray-500">No inquiries found</p>
              <p className="text-[11px] text-gray-400 mt-1 max-w-[200px]">
                Try adjusting your search criteria or tabs.
              </p>
            </div>
          ) : (
            sortedInquiries.map(inq => {
              const isSelected = selectedId === inq.id;
              return (
                <div
                  key={inq.id}
                  onClick={() => setSelectedId(inq.id)}
                  className={`border cursor-pointer transition-all p-4 flex flex-col gap-1.5 relative ${
                    isSelected
                      ? 'border-gray-300 border-l-[3.5px] border-l-brand bg-[#F4F9FC]'
                      : 'border-gray-200 bg-white hover:bg-gray-50/50'
                  }`}
                >
                  {/* Name and Type Badge */}
                  <div className="flex items-center justify-between">
                    <p className={`text-[13.5px] font-bold ${isSelected ? 'text-gray-900' : 'text-gray-800'}`}>
                      {inq.name}
                    </p>
                    <span
                      className={`rounded-full text-[10px] px-2.5 py-0.5 font-bold border tracking-wider uppercase ${
                        inq.type === 'booking'
                          ? 'border-[#077DA7] text-[#077DA7] bg-[#F4F9FC]'
                          : 'border-[#D97706] text-[#B45309] bg-[#FFFBEB]'
                      }`}
                    >
                      {inq.type}
                    </span>
                  </div>

                  {/* Message body preview */}
                  <p className="text-gray-500 text-[12.5px] leading-relaxed line-clamp-2 mt-0.5">
                    {inq.message}
                  </p>

                  {/* Date footer */}
                  <p className="text-gray-400 text-[10.5px] text-right mt-1 font-medium">
                    {inq.date}
                  </p>
                </div>
              );
            })
          )}
        </div>

        {/* Right Side: Inquiry details and response (always visible if selected, stacked on mobile) */}
        <div className="w-full">
          {selectedInquiry ? (
            <div className="space-y-4">
              
              {/* Inquiry Meta Section */}
              <div className="flex flex-wrap items-start justify-between gap-4 pb-2 border-b border-gray-200">
                <div>
                  <h2 className="text-[25px] font-bold text-gray-900 leading-tight inline-block align-middle">
                    {selectedInquiry.name}
                  </h2>
                  <span
                    className={`rounded-full text-[10px] px-2.5 py-0.5 font-bold border tracking-wider uppercase ml-2.5 inline-block align-middle ${
                      selectedInquiry.type === 'booking'
                        ? 'border-[#077DA7] text-[#077DA7] bg-[#F4F9FC]'
                        : 'border-[#D97706] text-[#B45309] bg-[#FFFBEB]'
                    }`}
                  >
                    {selectedInquiry.type}
                  </span>
                  
                  <a
                    href={`mailto:${selectedInquiry.email}`}
                    className="text-[#077DA7] hover:underline text-[13.5px] font-semibold flex items-center gap-1.5 mt-2"
                  >
                    <Mail size={13} />
                    {selectedInquiry.email}
                  </a>

                  <p className="text-gray-400 text-[11.5px] font-medium mt-1">
                    Received {selectedInquiry.date}
                  </p>
                </div>

                {/* Delete button top right */}
                <button
                  onClick={() => handleDelete(selectedInquiry.id)}
                  className="p-2 text-gray-400 hover:text-red-650 hover:bg-red-50 border border-gray-150 transition-colors"
                  title="Delete Inquiry"
                >
                  <Trash2 size={16} />
                </button>
              </div>

              {/* Message Box */}
              <div className="bg-white border border-gray-200 p-5">
                <p className="text-brand text-[11.5px] font-bold uppercase tracking-wider mb-3">Message</p>
                <div className="text-[14px] text-gray-700 leading-relaxed whitespace-pre-wrap select-text">
                  {selectedInquiry.message}
                </div>
                <div className="text-[10.5px] text-gray-400 mt-5 pt-3 border-t border-gray-50 font-medium">
                  Received {selectedInquiry.date}
                </div>
              </div>

              {/* Thread Responses */}
              {selectedReplies.length > 0 && (
                <div className="space-y-4">
                  {selectedReplies.map((reply, i) => (
                    <div key={i} className="bg-blue-50/15 border border-[#077DA7]/20 p-5">
                      <div className="flex items-center justify-between text-[11.5px] text-gray-400 mb-2">
                        <span className="font-bold text-brand flex items-center gap-1">
                          Response from Marcus (You)
                        </span>
                        <span>{reply.date} · {reply.time}</span>
                      </div>
                      <p className="text-[14px] text-gray-700 leading-relaxed whitespace-pre-wrap select-text">
                        {reply.message}
                      </p>
                    </div>
                  ))}
                </div>
              )}

              {/* Reply Box */}
              <div className="bg-white border border-gray-200 p-5">
                <p className="text-brand text-[11.5px] font-bold uppercase tracking-wider mb-3">Reply</p>
                
                {/* Visual Editor Toolbar */}
                <div className="flex flex-wrap items-center gap-1 border border-gray-200 border-b-0 bg-gray-50/50 px-2.5 py-1.5 text-gray-450">
                  <button type="button" className="p-1 hover:text-gray-700 hover:bg-gray-100 transition-colors" title="Bold"><Bold size={13.5} /></button>
                  <button type="button" className="p-1 hover:text-gray-700 hover:bg-gray-100 transition-colors" title="Italic"><Italic size={13.5} /></button>
                  <button type="button" className="p-1 hover:text-gray-700 hover:bg-gray-100 transition-colors" title="Underline"><Underline size={13.5} /></button>
                  <button type="button" className="p-1 hover:text-gray-700 hover:bg-gray-100 transition-colors" title="Strikethrough"><Strikethrough size={13.5} /></button>
                  <button type="button" className="p-1 hover:text-gray-700 hover:bg-gray-100 transition-colors" title="Code"><Code size={13.5} /></button>
                  <button type="button" className="p-1 hover:text-gray-700 hover:bg-gray-100 transition-colors" title="Code Block"><Code2 size={13.5} /></button>
                  
                  <span className="w-px h-4.5 bg-gray-200 mx-1.5" />
                  
                  {/* Dropdown styled button */}
                  <div className="flex items-center gap-1 px-1.5 py-0.5 text-[11.5px] font-semibold text-gray-500 hover:text-gray-700 cursor-pointer">
                    <span>Normal text</span>
                    <ChevronDown size={11} />
                  </div>
                  
                  <span className="w-px h-4.5 bg-gray-200 mx-1.5" />

                  {/* Text Color circle */}
                  <div className="w-4 h-4 bg-gray-900 rounded-sm cursor-pointer border border-gray-300 mr-1" />
                  <ChevronDown size={11} className="cursor-pointer text-gray-400 mr-1.5" />

                  <span className="w-px h-4.5 bg-gray-200 mx-1" />
                  
                  <button type="button" className="p-1 hover:text-gray-700 hover:bg-gray-100 transition-colors" title="Bullet List"><List size={13.5} /></button>
                  <button type="button" className="p-1 hover:text-gray-700 hover:bg-gray-100 transition-colors" title="Numbered List"><ListOrdered size={13.5} /></button>
                  <button type="button" className="p-1 hover:text-gray-700 hover:bg-gray-100 transition-colors" title="Link"><LinkIcon size={13.5} /></button>
                  <button type="button" className="p-1 hover:text-gray-700 hover:bg-gray-100 transition-colors" title="Insert Image"><ImageIcon size={13.5} /></button>
                  <button type="button" className="p-1 hover:text-gray-700 hover:bg-gray-100 transition-colors" title="Quote"><Quote size={13.5} /></button>

                  <span className="w-px h-4.5 bg-gray-200 mx-1.5" />
                  
                  <button type="button" className="p-1 hover:text-gray-700 hover:bg-gray-100 transition-colors" title="Align Left"><AlignLeft size={13.5} /></button>
                  <button type="button" className="p-1 hover:text-gray-700 hover:bg-gray-100 transition-colors" title="Align Center"><AlignCenter size={13.5} /></button>
                  <button type="button" className="p-1 hover:text-gray-700 hover:bg-gray-100 transition-colors" title="Align Right"><AlignRight size={13.5} /></button>

                  <span className="w-px h-4.5 bg-gray-200 mx-1.5" />
                  
                  <button type="button" className="p-1 hover:text-gray-700 hover:bg-gray-100 transition-colors" title="Undo"><Undo2 size={13.5} /></button>
                  <button type="button" className="p-1 hover:text-gray-700 hover:bg-gray-100 transition-colors" title="Redo"><Redo2 size={13.5} /></button>
                </div>

                <textarea
                  value={replyText}
                  onChange={e => setReplyText(e.target.value)}
                  placeholder="Type your reply..."
                  rows={6}
                  className="w-full bg-white border border-gray-200 p-4 text-[13px] text-gray-700 placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-brand focus:border-brand transition-all resize-y"
                />
                
                <div className="flex justify-end mt-3">
                  <button
                    onClick={handleSendReply}
                    disabled={!replyText.trim() || isSending}
                    className="bg-[#077DA7] hover:bg-[#056d93] text-white px-5 py-2 text-[12.5px] font-bold uppercase tracking-wider flex items-center gap-1.5 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                  >
                    {isSending ? 'Sending...' : 'Send Reply'}
                  </button>
                </div>
              </div>

              {/* Handled Action Button */}
              <button
                onClick={() => handleToggleStatus(selectedInquiry.id)}
                className={`px-5 py-2.5 text-[12.5px] font-bold uppercase tracking-wider flex items-center gap-2 transition-colors ${
                  selectedInquiry.status === 'open'
                    ? 'bg-[#10B981] hover:bg-[#0d9468] text-white'
                    : 'bg-gray-200 hover:bg-gray-250 text-gray-700'
                }`}
              >
                {selectedInquiry.status === 'open' ? (
                  <>
                    <span>✓</span>
                    Mark as handled
                  </>
                ) : (
                  <>
                    <span>↺</span>
                    Reopen Inquiry
                  </>
                )}
              </button>

            </div>
          ) : (
            <div className="hidden lg:flex flex-col items-center justify-center p-12 text-center bg-white border border-gray-200 h-64">
              <Inbox className="text-gray-300 mb-2" size={40} />
              <p className="text-[14px] font-bold text-gray-500">No Inquiry Selected</p>
              <p className="text-[12px] text-gray-450 mt-1 max-w-[240px]">
                Select an inquiry from the left column list to view details and respond.
              </p>
            </div>
          )}
        </div>

      </div>

    </div>
  );
}
