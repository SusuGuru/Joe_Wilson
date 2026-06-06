import React, { useState, useEffect } from 'react';
import {
  Search,
  ChevronDown,
  Mail,
  Phone,
  Calendar,
  MapPin,
  Clock,
  DollarSign,
  Send,
  X,
  FileText,
  CheckCircle,
  AlertCircle,
  Inbox,
  SlidersHorizontal,
  ChevronRight,
  Briefcase
} from 'lucide-react';
import defaultAvatar from '@/assets/avatar.png';
import hs1 from '@/assets/headshot1.jpg';
import hs2 from '@/assets/headshot2.jpg';
import hs3 from '@/assets/headshot3.jpg';

interface QuoteRequest {
  id: string;
  senderName: string;
  organizationName: string;
  email: string;
  phone: string;
  receivedTime: string;
  service: string;
  eventDate: string;
  location: string;
  duration: string;
  budget: string;
  notes: string;
  status: 'New' | 'Reviewing' | 'Quoted' | 'Booked' | 'Closed';
  avatarUrl?: string;
}

export default function QuoteRequestsPage() {
  const [quoteRequests, setQuoteRequests] = useState<QuoteRequest[]>([
    {
      id: 'req-1',
      senderName: 'Pastor Emmanuel Adebayo',
      organizationName: 'Pastor Williams',
      email: 'e.adebayo@gracechapel.org',
      phone: '+1 (404) 555-0142',
      receivedTime: 'Apr 25, 9:14 AM',
      service: 'Live Performance',
      eventDate: 'Jun 14, 2026',
      location: 'Grace Chapel, Atlanta GA',
      duration: '3 hours (worship + concert set)',
      budget: '$3,500 – $5,000',
      notes: 'Anniversary celebration service. Looking for full band leadership and a 45-min instrumental set after worship. Sound system provided. Can accommodate sound check from 2pm.',
      status: 'New',
      avatarUrl: hs1
    },
    {
      id: 'req-2',
      senderName: 'Tina Adebayo',
      organizationName: 'Tina Adebayo',
      email: 'tina.adebayo@gmail.com',
      phone: '+1 (404) 555-0189',
      receivedTime: 'Apr 17, 2:30 PM',
      service: 'Live Performance',
      eventDate: 'Sep 10, 2026',
      location: 'Foundations Cohort Hall, Atlanta GA',
      duration: '2 hours workshop',
      budget: '$2,500',
      notes: 'Will the Foundations cohort run again in the fall? I missed the enrollment window and want to book a private group MD session.',
      status: 'Quoted',
      avatarUrl: hs2
    },
    {
      id: 'req-3',
      senderName: 'Minister David Cole',
      organizationName: 'Mount Zion AV Team',
      email: 'd.cole@mountzionav.org',
      phone: '+1 (404) 555-9081',
      receivedTime: 'Apr 15, 11:15 AM',
      service: 'Music Direction',
      eventDate: 'Aug 5, 2026',
      location: 'Mount Zion Hall, Savannah GA',
      duration: '2 days workshop',
      budget: '$5,000',
      notes: 'Inquiring about a 2-day workshop with our rhythm section. Budget approved.',
      status: 'Reviewing',
      avatarUrl: hs3
    },
    {
      id: 'req-4',
      senderName: 'Kevin Brooks',
      organizationName: 'Kevin Brooks',
      email: 'k.brooks@studioeast.com',
      phone: '+1 (615) 555-4321',
      receivedTime: 'Apr 12, 4:45 PM',
      service: 'Studio Production',
      eventDate: 'Jul 22, 2026',
      location: 'Remote Session',
      duration: '3 tracks',
      budget: '$1,500',
      notes: 'Loved your last release. Are session bass tracks available for hire?',
      status: 'Quoted',
      avatarUrl: defaultAvatar
    },
    {
      id: 'req-5',
      senderName: 'Pastor Segun Alao',
      organizationName: 'Hope Center Lagos',
      email: 's.alao@hopecenterlagos.org',
      phone: '+234 803 555 1234',
      receivedTime: 'Apr 9, 8:20 AM',
      service: 'Live Performance',
      eventDate: 'Oct 12-14, 2026',
      location: 'Hope Center, Lagos Nigeria',
      duration: '3-night revival',
      budget: '$10,000',
      notes: 'Booking request for a 3-night revival in October. International travel covered.',
      status: 'Booked'
    }
  ]);

  const [selectedRequestId, setSelectedRequestId] = useState<string>('req-1');
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState<'All' | 'Open' | 'Closed'>('All');
  const [sortOption, setSortOption] = useState<'Newest' | 'Oldest' | 'Budget'>('Newest');

  // Modal Send Quote States
  const [showQuoteModal, setShowQuoteModal] = useState(false);
  const [quoteAmount, setQuoteAmount] = useState('');
  const [quoteSubject, setQuoteSubject] = useState('');
  const [quoteMessage, setQuoteMessage] = useState('');

  // Toast notifications
  const [toast, setToast] = useState<{ message: string; type: 'success' | 'info' } | null>(null);

  const showToast = (message: string, type: 'success' | 'info' = 'success') => {
    setToast({ message, type });
    setTimeout(() => setToast(null), 3000);
  };

  const getSelectedRequest = () => {
    return quoteRequests.find(r => r.id === selectedRequestId) || quoteRequests[0];
  };

  const selectedRequest = getSelectedRequest();

  // Generate Email template dynamically when opening modal or changing quote amount
  useEffect(() => {
    if (selectedRequest) {
      setQuoteSubject(`Re: ${selectedRequest.service} — ${selectedRequest.eventDate}`);
      setQuoteAmount(selectedRequest.budget.replace(/[^0-9$,–-]/g, '').split('–')[0].trim());
    }
  }, [selectedRequestId, showQuoteModal]);

  useEffect(() => {
    if (selectedRequest) {
      const emailText = `Hi ${selectedRequest.senderName.split(' ')[0]},

Thank you for reaching out about ${selectedRequest.service.toLowerCase()} on ${selectedRequest.eventDate}.

Based on the details you shared, here's my proposal:

• Service: ${selectedRequest.service}
• Date: ${selectedRequest.eventDate}
• Location: ${selectedRequest.location}
• Duration: ${selectedRequest.duration}
• Quote: ${quoteAmount || '[your price]'}

Looking forward to working together!

Best regards,
Kingsley`;
      setQuoteMessage(emailText);
    }
  }, [quoteAmount, selectedRequestId, showQuoteModal]);

  // Handle changing status via dropdown select
  const handleStatusChange = (id: string, newStatus: QuoteRequest['status']) => {
    setQuoteRequests(prev => prev.map(r => r.id === id ? { ...r, status: newStatus } : r));
    showToast(`Status updated to ${newStatus}`, 'info');
  };

  // Submit quote email action
  const handleSendQuote = (e: React.FormEvent) => {
    e.preventDefault();
    setQuoteRequests(prev => prev.map(r => r.id === selectedRequestId ? { ...r, status: 'Quoted' } : r));
    setShowQuoteModal(false);
    showToast(`Quote of ${quoteAmount} sent to ${selectedRequest.senderName}`, 'success');
  };

  // Get Initials for Avatar Fallbacks
  const getInitials = (name: string) => {
    return name.split(' ').slice(0, 2).map(n => n[0]).join('').toUpperCase();
  };

  // Get Status Badge Color Styles
  const getStatusBadge = (status: QuoteRequest['status']) => {
    switch (status) {
      case 'New':
        return (
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-bold border border-[#D1EFF7] text-[#008CC1] bg-[#EAF7FC] uppercase tracking-wider">
            New
          </span>
        );
      case 'Reviewing':
        return (
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-bold border border-[#E2D5F3] text-[#9D7CD8] bg-[#F1EBF9] uppercase tracking-wider">
            Reviewing
          </span>
        );
      case 'Quoted':
        return (
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-bold border border-[#F7E1C8] text-[#D9822B] bg-[#FCF3E8] uppercase tracking-wider">
            Quoted
          </span>
        );
      case 'Booked':
        return (
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-bold border border-[#C8E6C9] text-[#2E7D32] bg-[#E8F5E9] uppercase tracking-wider">
            Booked
          </span>
        );
      case 'Closed':
        return (
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-bold border border-[#E9EAEB] text-[#7A828A] bg-[#F4F5F6] uppercase tracking-wider">
            Closed
          </span>
        );
    }
  };

  // Filter and Sort requests list
  const filteredRequests = quoteRequests
    .filter(req => {
      // Search Query
      const query = searchQuery.toLowerCase();
      const matchSearch =
        req.senderName.toLowerCase().includes(query) ||
        req.organizationName.toLowerCase().includes(query) ||
        req.notes.toLowerCase().includes(query);

      // Status tab filter
      if (statusFilter === 'Open') {
        return matchSearch && (req.status === 'New' || req.status === 'Reviewing' || req.status === 'Quoted');
      } else if (statusFilter === 'Closed') {
        return matchSearch && (req.status === 'Booked' || req.status === 'Closed');
      }
      return matchSearch;
    })
    .sort((a, b) => {
      if (sortOption === 'Newest') {
        // Mock sorting: req-1 is newest, req-5 is oldest
        return a.id.localeCompare(b.id);
      } else if (sortOption === 'Oldest') {
        return b.id.localeCompare(a.id);
      } else if (sortOption === 'Budget') {
        const getBudgetValue = (bStr: string) => {
          const val = parseInt(bStr.replace(/[^0-9]/g, ''));
          return isNaN(val) ? 0 : val;
        };
        return getBudgetValue(b.budget) - getBudgetValue(a.budget);
      }
      return 0;
    });

  return (
    <div className="p-5 lg:p-7 max-w-[1240px] mx-auto space-y-6 pb-16 relative">

      {/* Toast Alert */}
      {toast && (
        <div className="fixed top-4 right-4 z-50 flex items-center gap-2 px-4 py-3 border border-gray-200 bg-white shadow-lg animate-in fade-in slide-in-from-top-4 duration-300">
          {toast.type === 'success' ? (
            <CheckCircle size={16} className="text-emerald-500" />
          ) : (
            <Inbox size={16} className="text-brand" />
          )}
          <span className="text-[13px] font-semibold text-gray-700">{toast.message}</span>
        </div>
      )}

      {/* Header Block */}
      <div>
        <p className="text-[11px] font-bold text-brand uppercase tracking-widest mb-1">Services</p>
        <h1 className="text-[34px] font-bold text-gray-900 font-heading leading-tight">Service Quotes</h1>
        <p className="text-gray-400 text-sm mt-1">
          Live performance, studio production, and music direction requests from clients.
        </p>
      </div>

      <hr className="border-gray-200" />

      {/* Filter and Sort Row */}
      <div className="flex flex-col md:flex-row gap-4 items-stretch md:items-center justify-between bg-white/50 border border-gray-200 p-3 shadow-sm">
        {/* Search */}
        <div className="relative flex-1 max-w-xs">
          <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
          <input
            type="text"
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            placeholder="search for a chat"
            className="w-full bg-white border border-gray-200 pl-9 pr-4 py-2 text-[13px] text-gray-800 focus:outline-none focus:ring-1 focus:ring-brand focus:border-brand rounded-none"
          />
        </div>

        <div className="flex items-center gap-4 flex-wrap">
          {/* Status Tabs switcher */}
          <div className="flex bg-gray-50 border border-gray-200 p-0.5 gap-0.5 rounded-none">
            {(['All', 'Open', 'Closed'] as const).map(tab => (
              <button
                key={tab}
                onClick={() => setStatusFilter(tab)}
                className={`px-4 py-1.5 text-[12px] font-bold tracking-wide uppercase transition-all rounded-none ${statusFilter === tab
                    ? 'bg-[#1A1919] text-white'
                    : 'text-gray-500 hover:text-gray-800 bg-white border border-gray-200 shadow-sm'
                  }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Sort Select */}
          <div className="relative flex items-center bg-white border border-gray-250 px-3 py-1.5 shadow-sm min-w-[140px]">
            <SlidersHorizontal size={14} className="text-gray-500 mr-2" />
            <select
              value={sortOption}
              onChange={e => setSortOption(e.target.value as any)}
              className="appearance-none w-full bg-transparent text-[12.5px] font-bold text-gray-800 focus:outline-none cursor-pointer pr-5"
            >
              <option value="Newest">Sort: Newest</option>
              <option value="Oldest">Sort: Oldest</option>
              <option value="Budget">Sort: Budget</option>
            </select>
            <ChevronDown size={14} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
          </div>
        </div>
      </div>

      {/* Main Grid: List-Detail Split */}
      <div className="grid grid-cols-1 lg:grid-cols-[380px_1fr] gap-6 items-start">

        {/* Left Column: Requests List Card */}
        <div className="bg-white border border-gray-200 shadow-sm divide-y divide-gray-150 max-h-[680px] overflow-y-auto scrollbar-thin">
          {filteredRequests.length === 0 ? (
            <div className="p-8 text-center text-gray-400 font-medium space-y-2">
              <Inbox size={24} className="mx-auto text-gray-300" />
              <p className="text-[13px]">No quote requests found</p>
            </div>
          ) : (
            filteredRequests.map(req => {
              const isSelected = req.id === selectedRequestId;
              return (
                <button
                  key={req.id}
                  onClick={() => setSelectedRequestId(req.id)}
                  className={`w-full text-left p-4 sm:p-5 flex gap-4 transition-all duration-150 relative border-l-4 rounded-none ${isSelected
                      ? 'bg-[#EAF7FC]/40 border-[#077DA7]'
                      : 'border-transparent hover:bg-gray-50/50'
                    }`}
                >
                  {/* Avatar */}
                  {req.avatarUrl ? (
                    <img
                      src={req.avatarUrl}
                      alt={req.organizationName}
                      className="w-10 h-10 rounded-full object-cover flex-shrink-0 border border-gray-200"
                    />
                  ) : (
                    <div className="w-10 h-10 rounded-full bg-brand/10 text-brand flex items-center justify-center flex-shrink-0 text-sm font-bold border border-brand/20">
                      {req.organizationName === 'Hope Center Lagos' ? 'TA' : getInitials(req.senderName)}
                    </div>
                  )}

                  {/* Body Content */}
                  <div className="flex-1 min-w-0 space-y-1">
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-[13.5px] font-bold text-gray-900 truncate">{req.organizationName}</span>
                      <span className="text-[11px] text-gray-400 font-semibold flex-shrink-0">{req.receivedTime.split(',')[0]}</span>
                    </div>
                    <p className="text-[12.5px] text-gray-500 truncate leading-relaxed">
                      {req.notes}
                    </p>
                    <div className="pt-1 flex items-center justify-between">
                      <span className="text-[11px] text-gray-400 font-semibold">{req.service}</span>
                      {getStatusBadge(req.status)}
                    </div>
                  </div>
                </button>
              );
            })
          )}
        </div>

        {/* Right Column: Selected Request Details */}
        {selectedRequest ? (
          <div className="bg-white border border-gray-200 shadow-sm p-6 space-y-6">

            {/* Header Area */}
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 border-b border-gray-150 pb-5">
              <div>
                <div className="flex items-center gap-3 flex-wrap">
                  <h2 className="text-[24px] font-bold text-gray-900 font-heading leading-tight">
                    {selectedRequest.senderName}
                  </h2>
                  {getStatusBadge(selectedRequest.status)}
                </div>

                {/* Contact row */}
                <div className="flex flex-wrap gap-4 items-center mt-2 text-[12.5px] text-gray-500 font-semibold">
                  <a href={`mailto:${selectedRequest.email}`} className="flex items-center gap-1.5 hover:text-brand transition-colors">
                    <Mail size={14} className="text-gray-400" />
                    <span>{selectedRequest.email}</span>
                  </a>
                  <a href={`tel:${selectedRequest.phone}`} className="flex items-center gap-1.5 hover:text-brand transition-colors">
                    <Phone size={14} className="text-gray-400" />
                    <span>{selectedRequest.phone}</span>
                  </a>
                </div>
                <p className="text-[11px] text-gray-400 font-semibold mt-1">Received {selectedRequest.receivedTime}</p>
              </div>

              {/* Status Update Dropdown & Action buttons */}
              <div className="flex items-center gap-2 self-start sm:self-auto">
                <div className="relative">
                  <select
                    value={selectedRequest.status}
                    onChange={e => handleStatusChange(selectedRequest.id, e.target.value as any)}
                    className="appearance-none bg-white border border-gray-250 pl-3 pr-8 py-2 text-[12.5px] font-bold text-gray-800 focus:outline-none cursor-pointer shadow-sm rounded-none"
                  >
                    <option value="New">New</option>
                    <option value="Reviewing">Reviewing</option>
                    <option value="Quoted">Quoted</option>
                    <option value="Booked">Booked</option>
                    <option value="Closed">Closed</option>
                  </select>
                  <ChevronDown size={14} className="absolute right-2.5 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
                </div>

                <button
                  onClick={() => setShowQuoteModal(true)}
                  className="bg-[#077DA7] hover:bg-[#056d93] text-white px-4 py-2 text-[12.5px] font-bold uppercase tracking-wider flex items-center gap-1.5 transition-colors rounded-none shadow-sm"
                >
                  <Send size={13} />
                  <span>Send quote</span>
                </button>
              </div>
            </div>

            {/* Information Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

              {/* Service */}
              <div className="bg-gray-50/50 border border-gray-150 p-4 space-y-1.5 rounded-none shadow-sm flex items-start gap-3.5">
                <div className="bg-brand/10 p-2 text-brand rounded-none flex-shrink-0 mt-0.5">
                  <Briefcase size={16} />
                </div>
                <div>
                  <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Service</p>
                  <p className="text-[14px] font-bold text-gray-800 mt-0.5">{selectedRequest.service}</p>
                </div>
              </div>

              {/* Event Date */}
              <div className="bg-gray-50/50 border border-gray-150 p-4 space-y-1.5 rounded-none shadow-sm flex items-start gap-3.5">
                <div className="bg-brand/10 p-2 text-brand rounded-none flex-shrink-0 mt-0.5">
                  <Calendar size={16} />
                </div>
                <div>
                  <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Event Date</p>
                  <p className="text-[14px] font-bold text-gray-800 mt-0.5">{selectedRequest.eventDate}</p>
                </div>
              </div>

              {/* Location */}
              <div className="bg-gray-50/50 border border-gray-150 p-4 space-y-1.5 rounded-none shadow-sm flex items-start gap-3.5">
                <div className="bg-brand/10 p-2 text-brand rounded-none flex-shrink-0 mt-0.5">
                  <MapPin size={16} />
                </div>
                <div>
                  <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Location</p>
                  <p className="text-[14px] font-bold text-gray-800 mt-0.5">{selectedRequest.location}</p>
                </div>
              </div>

              {/* Duration */}
              <div className="bg-gray-50/50 border border-gray-150 p-4 space-y-1.5 rounded-none shadow-sm flex items-start gap-3.5">
                <div className="bg-brand/10 p-2 text-brand rounded-none flex-shrink-0 mt-0.5">
                  <Clock size={16} />
                </div>
                <div>
                  <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Duration</p>
                  <p className="text-[14px] font-bold text-gray-800 mt-0.5">{selectedRequest.duration}</p>
                </div>
              </div>

              {/* Budget (Full-width row) */}
              <div className="sm:col-span-2 bg-gray-50/50 border border-gray-150 p-4 space-y-1.5 rounded-none shadow-sm flex items-start gap-3.5">
                <div className="bg-brand/10 p-2 text-brand rounded-none flex-shrink-0 mt-0.5">
                  <DollarSign size={16} />
                </div>
                <div>
                  <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Budget</p>
                  <p className="text-[14.5px] font-bold text-gray-800 mt-0.5">{selectedRequest.budget}</p>
                </div>
              </div>

              {/* Project Notes (Full-width row) */}
              <div className="sm:col-span-2 border border-gray-150 p-5 rounded-none bg-gray-50/55 shadow-sm space-y-2">
                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Project Notes</p>
                <p className="text-[13px] text-gray-700 leading-relaxed font-medium">
                  {selectedRequest.notes}
                </p>
              </div>

            </div>
          </div>
        ) : (
          <div className="bg-white border border-gray-200 shadow-sm p-12 text-center text-gray-400 font-medium">
            <Inbox size={32} className="mx-auto text-gray-300 mb-2" />
            <span>Select a quote request from the left list to see details.</span>
          </div>
        )}
      </div>

      {/* ── Send Quote Modal Overlay ────────────────────────────────── */}
      {showQuoteModal && selectedRequest && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 transition-opacity animate-in fade-in duration-200">
          <form
            onSubmit={handleSendQuote}
            className="bg-white border border-gray-200 shadow-2xl max-w-lg w-full flex flex-col relative animate-in fade-in zoom-in-95 duration-200 rounded-none max-h-[90vh] overflow-hidden"
          >
            {/* Header: Title & Close Button */}
            <div className="p-6 sm:px-8 sm:pt-8 sm:pb-4 border-b border-gray-100 flex items-start justify-between bg-white flex-shrink-0">
              <div className="space-y-1">
                <h2 className="text-[20px] font-bold text-gray-900 leading-tight">Send quote</h2>
                <p className="text-gray-500 text-[12px] font-medium leading-normal">
                  Compose and send a quote email. The client will reply directly to your inbox.
                </p>
              </div>
              <button
                type="button"
                onClick={() => setShowQuoteModal(false)}
                className="text-gray-400 hover:text-gray-600 transition-colors pt-1"
              >
                <X size={20} />
              </button>
            </div>

            {/* Scrollable Content Container */}
            <div className="flex-1 overflow-y-auto p-6 sm:px-8 sm:py-6 space-y-5">
              {/* Boxed Read-only details */}
              <div className="bg-[#FAFBFB] border border-gray-200 p-4 text-[13px] rounded-none space-y-2.5">
                <div className="grid grid-cols-[72px_1fr] gap-x-2 items-baseline">
                  <span className="text-gray-500 font-normal">From</span>
                  <span className="text-gray-900 font-semibold">Kingsley &lt;hello@basslinestudio.com&gt;</span>
                </div>
                <div className="grid grid-cols-[72px_1fr] gap-x-2 items-baseline">
                  <span className="text-gray-500 font-normal">To</span>
                  <span className="text-gray-900 font-semibold">{selectedRequest.senderName} &lt;{selectedRequest.email}&gt;</span>
                </div>
                <div className="grid grid-cols-[72px_1fr] gap-x-2 items-baseline">
                  <span className="text-gray-500 font-normal">Service</span>
                  <span className="text-gray-900 font-semibold">{selectedRequest.service}</span>
                </div>
              </div>

              {/* Subject */}
              <div className="flex flex-col gap-1.5">
                <label className="text-[13px] font-semibold text-gray-800">Subject</label>
                <input
                  type="text"
                  value={quoteSubject}
                  onChange={e => setQuoteSubject(e.target.value)}
                  className="bg-white border border-gray-200/80 p-2.5 text-[13px] text-gray-855 focus:outline-none focus:ring-1 focus:ring-brand focus:border-brand w-full rounded-none transition-colors"
                  required
                />
              </div>

              {/* Quote Amount */}
              <div className="flex flex-col gap-1.5">
                <label className="text-[13px] font-semibold text-gray-800">
                  Quote amount <span className="text-gray-400 font-normal">(inserts into message)</span>
                </label>
                <input
                  type="text"
                  value={quoteAmount}
                  onChange={e => setQuoteAmount(e.target.value)}
                  placeholder="e.g. $3,500"
                  className="bg-white border border-gray-200/80 p-2.5 text-[13px] text-gray-855 focus:outline-none focus:ring-1 focus:ring-brand focus:border-brand w-full rounded-none transition-colors"
                  required
                />
              </div>

              {/* Message preview */}
              <div className="flex flex-col gap-1.5">
                <label className="text-[13px] font-semibold text-gray-800">Message</label>
                <textarea
                  value={quoteMessage}
                  onChange={e => setQuoteMessage(e.target.value)}
                  rows={7}
                  className="bg-white border border-gray-200/80 p-2.5 font-sans text-[13px] text-gray-800 focus:outline-none focus:ring-1 focus:ring-brand focus:border-brand w-full rounded-none resize-none leading-relaxed transition-colors"
                  required
                />
              </div>
            </div>

            {/* Footer Buttons */}
            <div className="p-6 sm:px-8 sm:pt-4 sm:pb-8 border-t border-gray-100 flex justify-end gap-3 items-center bg-white flex-shrink-0">
              <button
                type="button"
                onClick={() => setShowQuoteModal(false)}
                className="text-gray-700 hover:text-gray-900 text-[13px] font-semibold px-4 py-2 transition-colors rounded-none"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="bg-[#077DA7] hover:bg-[#056d93] text-white px-5 py-2.5 text-[13px] font-bold transition-colors rounded-none shadow-sm"
              >
                Send invite
              </button>
            </div>

          </form>
        </div>
      )}

    </div>
  );
}
