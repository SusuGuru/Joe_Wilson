import React, { useState } from 'react';
import {
  Save,
  Plus,
  Trash2,
  CheckCircle,
  Inbox,
  AlertCircle,
  X
} from 'lucide-react';

interface Testimonial {
  id: string;
  name: string;
  role: string;
  quote: string;
}

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState<'contact' | 'testimonials'>('contact');
  
  // Contact Info states (populated from screenshot)
  const [contactInfo, setContactInfo] = useState({
    bookingEmail: 'bookings@marcusreed.com',
    generalEmail: 'hello@marcusreed.com',
    phone: '+1 (555) 220-9914',
    location: 'Atlanta, GA',
    instagram: '@marcusreedbass',
    youtube: 'youtube.com/@marcusreed'
  });

  // Testimonials mock data matching the screenshot exactly
  const [testimonials, setTestimonials] = useState<Testimonial[]>([
    {
      id: 't-1',
      name: 'Pastor J. Williams',
      role: 'Grace Chapel',
      quote: "Marcus brought a clarity to our music team that we've never had before.",
    },
    {
      id: 't-2',
      name: 'Pastor J. Williams',
      role: 'Grace Chapel',
      quote: "Marcus brought a clarity to our music team that we've never had before.",
    },
    {
      id: 't-3',
      name: 'Pastor J. Williams',
      role: 'Grace Chapel',
      quote: "Marcus brought a clarity to our music team that we've never had before.",
    }
  ]);

  const [isSaving, setIsSaving] = useState(false);
  const [toast, setToast] = useState<{ message: string; type: 'success' | 'info' | 'error' } | null>(null);

  // New testimonial modal state
  const [showAddModal, setShowAddModal] = useState(false);
  const [newTestimonial, setNewTestimonial] = useState({ name: '', role: '', quote: '' });

  const showToast = (message: string, type: 'success' | 'info' | 'error' = 'success') => {
    setToast({ message, type });
    setTimeout(() => {
      setToast(null);
    }, 3000);
  };

  const handleContactChange = (field: keyof typeof contactInfo, value: string) => {
    setContactInfo(prev => ({ ...prev, [field]: value }));
  };

  const handleSaveContact = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSaving(true);
    setTimeout(() => {
      setIsSaving(false);
      showToast('Contact information saved successfully!', 'success');
    }, 800);
  };

  const handleTestimonialChange = (id: string, field: keyof Testimonial, value: string) => {
    setTestimonials(prev =>
      prev.map(t => (t.id === id ? { ...t, [field]: value } : t))
    );
  };

  const handleDeleteTestimonial = (id: string, name: string) => {
    if (window.confirm(`Delete testimonial from "${name || 'Pastor J. Williams'}"?`)) {
      setTestimonials(prev => prev.filter(t => t.id !== id));
      showToast('Testimonial deleted successfully', 'info');
    }
  };

  const handleAddTestimonial = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTestimonial.name.trim() || !newTestimonial.quote.trim()) {
      showToast('Please fill out name and quote', 'error');
      return;
    }

    const item: Testimonial = {
      id: `t-${Date.now()}`,
      name: newTestimonial.name,
      role: newTestimonial.role || 'Grace Chapel',
      quote: newTestimonial.quote,
    };

    setTestimonials(prev => [...prev, item]);
    setNewTestimonial({ name: '', role: '', quote: '' });
    setShowAddModal(false);
    showToast('New testimonial added!', 'success');
  };

  const handleSaveTestimonials = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSaving(true);
    setTimeout(() => {
      setIsSaving(false);
      showToast('Testimonials updated successfully!', 'success');
    }, 800);
  };

  return (
    <div className="p-5 lg:p-7 max-w-[1240px] mx-auto space-y-6 pb-16 relative">
      
      {/* Toast Notifications */}
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
        <p className="text-[11px] font-bold text-brand uppercase tracking-widest mb-1">Configuration</p>
        <h1 className="text-[34px] font-bold text-gray-900 font-heading leading-tight">Settings</h1>
        <p className="text-gray-400 text-sm mt-1">
          Manage the public site's content and your studio's contact information.
        </p>
      </div>

      <hr className="border-gray-200" />

      {/* ── Tab Switcher ──────────────────────────────────────────────── */}
      <div className="flex bg-white border border-gray-200 p-0.5 gap-0.5 self-start w-fit">
        <button
          onClick={() => setActiveTab('contact')}
          className={`px-5 py-2 text-[13px] font-bold tracking-wide transition-all uppercase rounded-none ${
            activeTab === 'contact'
              ? 'bg-[#1A1919] text-white'
              : 'text-gray-500 hover:text-gray-800'
          }`}
        >
          Contact
        </button>
        <button
          onClick={() => setActiveTab('testimonials')}
          className={`px-5 py-2 text-[13px] font-bold tracking-wide transition-all uppercase rounded-none ${
            activeTab === 'testimonials'
              ? 'bg-[#1A1919] text-white'
              : 'text-gray-500 hover:text-gray-800'
          }`}
        >
          Testimonials
        </button>
      </div>

      {/* ── Tab Panels Content ────────────────────────────────────────── */}
      {activeTab === 'contact' ? (
        <form onSubmit={handleSaveContact} className="space-y-6">
          {/* Contact Details Card */}
          <div className="bg-white border border-gray-200 p-5 sm:p-6 shadow-sm">
            <div>
              <h2 className="text-[18px] font-bold text-gray-900 font-heading leading-tight">Contact information</h2>
              <p className="text-gray-400 text-[12px] mt-1 font-medium">
                How visitors can reach you.
              </p>
            </div>

            {/* Inputs Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4 mt-6">
              
              {/* Booking Email */}
              <div className="flex flex-col gap-1.5">
                <label className="text-[12px] font-bold text-gray-700">Booking email</label>
                <input
                  type="email"
                  value={contactInfo.bookingEmail}
                  onChange={e => handleContactChange('bookingEmail', e.target.value)}
                  className="bg-gray-50 border border-gray-200 p-2.5 text-[13px] text-gray-800 focus:outline-none focus:ring-1 focus:ring-brand focus:border-brand w-full rounded-none"
                  required
                />
              </div>

              {/* General Email */}
              <div className="flex flex-col gap-1.5">
                <label className="text-[12px] font-bold text-gray-700">General email</label>
                <input
                  type="email"
                  value={contactInfo.generalEmail}
                  onChange={e => handleContactChange('generalEmail', e.target.value)}
                  className="bg-gray-50 border border-gray-200 p-2.5 text-[13px] text-gray-800 focus:outline-none focus:ring-1 focus:ring-brand focus:border-brand w-full rounded-none"
                  required
                />
              </div>

              {/* Phone */}
              <div className="flex flex-col gap-1.5">
                <label className="text-[12px] font-bold text-gray-700">Phone</label>
                <input
                  type="text"
                  value={contactInfo.phone}
                  onChange={e => handleContactChange('phone', e.target.value)}
                  className="bg-gray-50 border border-gray-200 p-2.5 text-[13px] text-gray-800 focus:outline-none focus:ring-1 focus:ring-brand focus:border-brand w-full rounded-none"
                />
              </div>

              {/* Location */}
              <div className="flex flex-col gap-1.5">
                <label className="text-[12px] font-bold text-gray-700">Location</label>
                <input
                  type="text"
                  value={contactInfo.location}
                  onChange={e => handleContactChange('location', e.target.value)}
                  className="bg-gray-50 border border-gray-200 p-2.5 text-[13px] text-gray-800 focus:outline-none focus:ring-1 focus:ring-brand focus:border-brand w-full rounded-none"
                />
              </div>

              {/* Instagram */}
              <div className="flex flex-col gap-1.5">
                <label className="text-[12px] font-bold text-gray-700">Instagram</label>
                <input
                  type="text"
                  value={contactInfo.instagram}
                  onChange={e => handleContactChange('instagram', e.target.value)}
                  className="bg-gray-50 border border-gray-200 p-2.5 text-[13px] text-gray-800 focus:outline-none focus:ring-1 focus:ring-brand focus:border-brand w-full rounded-none"
                />
              </div>

              {/* YouTube */}
              <div className="flex flex-col gap-1.5">
                <label className="text-[12px] font-bold text-gray-700">YouTube</label>
                <input
                  type="text"
                  value={contactInfo.youtube}
                  onChange={e => handleContactChange('youtube', e.target.value)}
                  className="bg-gray-50 border border-gray-200 p-2.5 text-[13px] text-gray-800 focus:outline-none focus:ring-1 focus:ring-brand focus:border-brand w-full rounded-none"
                />
              </div>

            </div>
          </div>

          {/* Form Actions */}
          <button
            type="submit"
            disabled={isSaving}
            className="bg-[#077DA7] hover:bg-[#056d93] text-white px-5 py-2.5 text-[12.5px] font-bold uppercase tracking-wider flex items-center gap-2 rounded-none transition-colors"
          >
            <Save size={15} />
            <span>{isSaving ? 'Saving...' : 'Save changes'}</span>
          </button>
        </form>
      ) : (
        <form onSubmit={handleSaveTestimonials} className="space-y-6">
          
          {/* Header Stats & Button Row */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
            <span className="text-gray-400 text-[12.5px] font-medium">
              {testimonials.length} testimonials shown on the homepage.
            </span>

            {/* Add Testimonial Trigger */}
            <button
              type="button"
              onClick={() => setShowAddModal(true)}
              className="bg-white hover:bg-gray-50 border border-gray-200 text-gray-700 px-4 py-2 text-[12.5px] font-bold uppercase tracking-wider flex items-center gap-1.5 transition-colors self-start sm:self-auto rounded-none"
            >
              <Plus size={14} />
              <span>Add testimonial</span>
            </button>
          </div>

          {/* Testimonial Cards Grid */}
          {testimonials.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-16 px-4 border border-dashed border-gray-200 bg-white text-center">
              <Inbox className="text-gray-300 mb-2" size={32} />
              <p className="text-[13px] font-bold text-gray-500">No testimonials found</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {testimonials.map(item => (
                <div key={item.id} className="bg-white border border-gray-205 p-5 shadow-sm space-y-3 relative">
                  
                  {/* Quote container */}
                  <div className="bg-gray-50 border border-gray-150 p-4 relative">
                    <textarea
                      value={item.quote}
                      onChange={e => handleTestimonialChange(item.id, 'quote', e.target.value)}
                      rows={3}
                      className="w-full bg-transparent text-[13px] text-gray-800 leading-relaxed focus:outline-none resize-none pr-6 rounded-none font-medium"
                      placeholder="Quote Text"
                      required
                    />
                    {/* Delete button inside quote box */}
                    <button
                      type="button"
                      onClick={() => handleDeleteTestimonial(item.id, item.name)}
                      className="absolute top-3.5 right-3.5 text-red-500 hover:text-red-750 transition-colors"
                      title="Delete Testimonial"
                    >
                      <Trash2 size={15} />
                    </button>
                  </div>

                  {/* Author Name & Organization Inputs */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <input
                      type="text"
                      value={item.name}
                      onChange={e => handleTestimonialChange(item.id, 'name', e.target.value)}
                      placeholder="Author Name"
                      className="bg-gray-50 border border-gray-200 p-2.5 text-[13px] text-gray-800 font-semibold focus:outline-none w-full rounded-none"
                      required
                    />
                    <input
                      type="text"
                      value={item.role}
                      onChange={e => handleTestimonialChange(item.id, 'role', e.target.value)}
                      placeholder="Organization"
                      className="bg-gray-50 border border-gray-200 p-2.5 text-[13px] text-gray-800 focus:outline-none w-full rounded-none"
                      required
                    />
                  </div>

                </div>
              ))}
            </div>
          )}

          {/* Form Actions */}
          <button
            type="submit"
            disabled={isSaving}
            className="bg-[#077DA7] hover:bg-[#056d93] text-white px-5 py-2.5 text-[12.5px] font-bold uppercase tracking-wider flex items-center gap-2 rounded-none transition-colors"
          >
            <Save size={15} />
            <span>{isSaving ? 'Saving...' : 'Save changes'}</span>
          </button>
        </form>
      )}

      {/* ── Add Testimonial Modal Overlay ──────────────────────────────── */}
      {showAddModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 transition-opacity">
          {/* Modal Container */}
          <form
            onSubmit={handleAddTestimonial}
            className="bg-white border border-gray-250 shadow-2xl max-w-md w-full p-6 flex flex-col gap-4 relative animate-in fade-in zoom-in-95 duration-200"
          >
            {/* Close Cross */}
            <button
              type="button"
              onClick={() => setShowAddModal(false)}
              className="absolute top-4 right-4 text-gray-450 hover:text-gray-600 transition-colors"
            >
              <X size={18} />
            </button>

            {/* Modal Title */}
            <div>
              <h2 className="text-[18px] font-bold text-gray-900 font-heading leading-tight">Add testimonial</h2>
              <p className="text-gray-400 text-[11px] mt-1 font-medium">
                Add a new client quote to show on the homepage.
              </p>
            </div>

            {/* Quote */}
            <div className="flex flex-col gap-1">
              <label className="text-[12px] font-bold text-gray-700">Quote Text</label>
              <textarea
                value={newTestimonial.quote}
                onChange={e => setNewTestimonial(prev => ({ ...prev, quote: e.target.value }))}
                placeholder="Write the quote text..."
                rows={3}
                className="bg-white border border-gray-200 p-2.5 text-[13px] text-gray-800 focus:outline-none focus:ring-1 focus:ring-brand focus:border-brand w-full rounded-none resize-none"
                required
              />
            </div>

            {/* Name */}
            <div className="flex flex-col gap-1">
              <label className="text-[12px] font-bold text-gray-700">Author Name</label>
              <input
                type="text"
                value={newTestimonial.name}
                onChange={e => setNewTestimonial(prev => ({ ...prev, name: e.target.value }))}
                placeholder="e.g. Pastor J. Williams"
                className="bg-white border border-gray-200 p-2.5 text-[13px] text-gray-800 focus:outline-none focus:ring-1 focus:ring-brand focus:border-brand w-full rounded-none font-semibold"
                required
              />
            </div>

            {/* Role */}
            <div className="flex flex-col gap-1">
              <label className="text-[12px] font-bold text-gray-700">Organization</label>
              <input
                type="text"
                value={newTestimonial.role}
                onChange={e => setNewTestimonial(prev => ({ ...prev, role: e.target.value }))}
                placeholder="e.g. Grace Chapel"
                className="bg-white border border-gray-200 p-2.5 text-[13px] text-gray-800 focus:outline-none focus:ring-1 focus:ring-brand focus:border-brand w-full rounded-none"
              />
            </div>

            {/* Actions */}
            <div className="flex justify-end gap-3 mt-2">
              <button
                type="button"
                onClick={() => setShowAddModal(false)}
                className="text-gray-500 hover:text-gray-800 text-[12.5px] font-bold uppercase tracking-wider px-3 py-2 transition-colors"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="bg-[#077DA7] hover:bg-[#056d93] text-white px-5 py-2 text-[12.5px] font-bold uppercase tracking-wider transition-colors"
              >
                Add testimonial
              </button>
            </div>

          </form>
        </div>
      )}

    </div>
  );
}
