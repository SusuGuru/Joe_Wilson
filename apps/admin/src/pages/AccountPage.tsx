import React, { useState, useRef } from 'react';
import {
  Save,
  Crown,
  Lock,
  UserPlus,
  Users,
  CheckCircle,
  Inbox,
  AlertCircle,
  X,
  Camera,
  Mail,
  UserCheck,
  ChevronDown,
  Key,
  Shield,
  Laptop,
  Smartphone,
  Tablet,
  LogOut,
  MoreHorizontal,
  Pencil,
  Eye
} from 'lucide-react';
import defaultAvatar from '@/assets/avatar.png';
import hs1 from '@/assets/headshot1.jpg';
import hs2 from '@/assets/headshot2.jpg';
import hs3 from '@/assets/headshot3.jpg';

interface AdminUser {
  id: string;
  name: string;
  email: string;
  role: 'Owner' | 'Admin' | 'Editor' | 'Viewer';
  status: 'active' | 'invited' | 'suspended';
  lastActive: string;
  avatarUrl?: string;
}

const getRoleBadge = (role: AdminUser['role']) => {
  switch (role) {
    case 'Owner':
      return (
        <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-bold border border-[#E2D5F3] text-[#9D7CD8] bg-[#F1EBF9] uppercase tracking-wider">
          <Crown size={10} className="stroke-[2.5]" />
          <span>Owner</span>
        </span>
      );
    case 'Admin':
      return (
        <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-bold border border-[#D1EFF7] text-[#008CC1] bg-[#EAF7FC] uppercase tracking-wider">
          <Shield size={10} className="stroke-[2.5]" />
          <span>Admin</span>
        </span>
      );
    case 'Editor':
      return (
        <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-bold border border-[#F7E1C8] text-[#D9822B] bg-[#FCF3E8] uppercase tracking-wider">
          <Pencil size={10} className="stroke-[2.5]" />
          <span>Editor</span>
        </span>
      );
    case 'Viewer':
      return (
        <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-bold border border-[#E9EAEB] text-[#7A828A] bg-[#F4F5F6] uppercase tracking-wider">
          <Eye size={10} className="stroke-[2.5]" />
          <span>Viewer</span>
        </span>
      );
  }
};

const getStatusBadge = (status: AdminUser['status']) => {
  switch (status) {
    case 'active':
      return (
        <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-bold border border-[#C8E6C9] text-[#2E7D32] bg-[#E8F5E9] uppercase tracking-wider">
          <span className="w-1.5 h-1.5 rounded-full bg-[#2E7D32]" />
          <span>Active</span>
        </span>
      );
    case 'invited':
      return (
        <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-bold border border-[#FFE0B2] text-[#E65100] bg-[#FFF3E0] uppercase tracking-wider">
          <span className="w-1.5 h-1.5 rounded-full bg-[#E65100]" />
          <span>Invited</span>
        </span>
      );
    case 'suspended':
      return (
        <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-bold border border-[#FFCDD2] text-[#C62828] bg-[#FFEBEE] uppercase tracking-wider">
          <span className="w-1.5 h-1.5 rounded-full bg-[#C62828]" />
          <span>Suspended</span>
        </span>
      );
  }
};

export default function AccountPage() {
  const [activeTab, setActiveTab] = useState<'profile' | 'security' | 'admin'>('profile');
  
  // Profile state prefilled from screenshot
  const [profile, setProfile] = useState({
    fullName: 'Marcus Reed',
    displayName: 'Marcus Reed',
    email: 'marcus@marcusreed.com',
    phone: '+1 (555) 220-9914',
    location: 'Atlanta, GA',
    timezone: 'US/Eastern',
    bio: 'Gospel bassist & music director. Building Bassline Studio to mentor the next generation of worship players.',
    avatar: defaultAvatar
  });

  // Security password states
  const [passwords, setPasswords] = useState({
    current: '************',
    new: '',
    confirm: ''
  });

  // 2FA & Sessions states
  const [tfaEnabled, setTfaEnabled] = useState(false);
  const [recoveryCodes, setRecoveryCodes] = useState<string[] | null>(null);
  const [sessions, setSessions] = useState([
    { id: 'sess-1', device: 'MacBook Pro', info: 'Safari 17 · Atlanta, GA · Apr 25, 9:14 AM', isCurrent: true, type: 'laptop' },
    { id: 'sess-2', device: 'iPhone 15', info: 'Safari Mobile · Atlanta, GA · Apr 24, 9:03 PM', isCurrent: false, type: 'phone' },
    { id: 'sess-3', device: 'iPad Pro', info: 'Safari 17 · Nashville, TN · Apr 20, 2:22 PM', isCurrent: false, type: 'tablet' }
  ]);

  // Admins state prefilled for high-fidelity workspace settings
  const [admins, setAdmins] = useState<AdminUser[]>([
    { id: 'adm-1', name: 'Marcus Reed', email: 'marcus@marcusreed.com', role: 'Owner', status: 'active', lastActive: 'Apr 25, 9:14 AM', avatarUrl: defaultAvatar },
    { id: 'adm-2', name: 'Jasmine Cole', email: 'jasmine@basslinestudio.com', role: 'Editor', status: 'active', lastActive: 'Apr 24, 5:42 PM', avatarUrl: hs1 },
    { id: 'adm-3', name: 'Andre Phillips', email: 'andre.p@basslinestudio.com', role: 'Viewer', status: 'active', lastActive: 'Apr 22, 11:08 AM', avatarUrl: hs2 },
    { id: 'adm-4', name: 'Kendra Vaughn', email: 'kendra@vaughnconsulting.com', role: 'Admin', status: 'invited', lastActive: 'Invited 2026-04-23', avatarUrl: hs3 },
    { id: 'adm-5', name: 'Tobi Adesanya', email: 'tobi@basslinestudio.com', role: 'Editor', status: 'suspended', lastActive: 'Mar 30, 8:55 AM' }
  ]);

  const [isSaving, setIsSaving] = useState(false);
  const [toast, setToast] = useState<{ message: string; type: 'success' | 'info' | 'error' } | null>(null);
  
  // Modals / Invites
  const [showInviteModal, setShowInviteModal] = useState(false);
  const [inviteName, setInviteName] = useState('Welcome and Foundations');
  const [inviteEmail, setInviteEmail] = useState('');
  const [inviteRole, setInviteRole] = useState<'Admin' | 'Editor' | 'Viewer'>('Editor');
  const [inviteNote, setInviteNote] = useState('Excited to have you on the team');
  const [openMenuUserId, setOpenMenuUserId] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const showToast = (message: string, type: 'success' | 'info' | 'error' = 'success') => {
    setToast({ message, type });
    setTimeout(() => {
      setToast(null);
    }, 3000);
  };

  const handleProfileChange = (field: keyof typeof profile, value: string) => {
    setProfile(prev => ({ ...prev, [field]: value }));
  };

  const handleAvatarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfile(prev => ({ ...prev, avatar: reader.result as string }));
        showToast('Profile photo updated successfully', 'success');
      };
      reader.readAsDataURL(file);
    }
  };

  const triggerFileSelect = () => {
    fileInputRef.current?.click();
  };

  const handleSaveProfile = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSaving(true);
    setTimeout(() => {
      setIsSaving(false);
      showToast('Profile details updated successfully', 'success');
    }, 800);
  };

  const handleSaveSecurity = (e: React.FormEvent) => {
    e.preventDefault();
    if (!passwords.current || !passwords.new || !passwords.confirm) {
      showToast('Please fill in all password fields', 'error');
      return;
    }
    if (passwords.new !== passwords.confirm) {
      showToast('New passwords do not match', 'error');
      return;
    }

    setIsSaving(true);
    setTimeout(() => {
      setIsSaving(false);
      setPasswords({ current: '', new: '', confirm: '' });
      showToast('Password changed successfully!', 'success');
    }, 800);
  };

  const handleSendInvite = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inviteEmail.trim()) {
      showToast('Please enter a valid email address', 'error');
      return;
    }

    const newAdmin: AdminUser = {
      id: `adm-${Date.now()}`,
      name: inviteName.trim() || inviteEmail.split('@')[0].split('.').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' '),
      email: inviteEmail.toLowerCase(),
      role: inviteRole,
      status: 'invited',
      lastActive: `Invited ${new Date().toISOString().split('T')[0]}`
    };

    setAdmins(prev => [...prev, newAdmin]);
    setInviteEmail('');
    setInviteName('Welcome and Foundations');
    setInviteNote('Excited to have you on the team');
    setShowInviteModal(false);
    showToast(`Invitation sent to ${inviteEmail}`, 'success');
  };

  const getInitials = (name: string) => {
    return name.split(' ').slice(0, 2).map(n => n[0]).join('').toUpperCase();
  };

  return (
    <div className="p-5 lg:p-7 max-w-[1240px] mx-auto space-y-6 pb-16 relative">
      
      {/* Toast popup */}
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
        <p className="text-[11px] font-bold text-brand uppercase tracking-widest mb-1">Your Account</p>
        <h1 className="text-[34px] font-bold text-gray-900 font-heading leading-tight">Account &amp; access</h1>
        <p className="text-gray-400 text-sm mt-1">
          Manage your personal details, security, and the admins who can sign in to this workspace.
        </p>
      </div>

      <hr className="border-gray-200" />

      {/* ── Tab Switcher ──────────────────────────────────────────────── */}
      <div className="flex bg-white border border-gray-200 p-0.5 gap-0.5 self-start w-fit">
        {(['profile', 'security', 'admin'] as const).map(tab => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-5 py-2 text-[13px] font-bold tracking-wide transition-all uppercase rounded-none ${
              activeTab === tab
                ? 'bg-[#1A1919] text-white'
                : 'text-gray-500 hover:text-gray-800'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* ── Main Layout Split ─────────────────────────────────────────── */}
      {activeTab === 'profile' && (
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-6 items-start">
          
          {/* Profile Form (Left Column Card) */}
          <form onSubmit={handleSaveProfile} className="bg-white border border-gray-200 p-5 sm:p-6 shadow-sm space-y-5">
            <div>
              <h2 className="text-[18px] font-bold text-gray-900 font-heading leading-tight">Personal details</h2>
              <p className="text-gray-400 text-[12px] mt-1 font-medium">
                This is what shows up on invoices, replies, and the public site.
              </p>
            </div>

            {/* Photo Uploader Row */}
            <div className="flex items-center gap-4 py-2">
              <img
                src={profile.avatar}
                alt="Profile Avatar"
                className="w-16 h-16 rounded-full object-cover border border-gray-200"
              />
              <div className="flex flex-col gap-1.5">
                <button
                  type="button"
                  onClick={triggerFileSelect}
                  className="bg-white hover:bg-gray-50 border border-gray-250 text-gray-700 px-4 py-2 text-[12.5px] font-bold uppercase tracking-wider flex items-center gap-1.5 rounded-none transition-colors"
                >
                  <Camera size={14} />
                  <span>Change photo</span>
                </button>
                <span className="text-[11px] text-gray-400 font-medium">PNG or JPG, max 2MB.</span>
                <input
                  type="file"
                  ref={fileInputRef}
                  onChange={handleAvatarChange}
                  className="hidden"
                  accept="image/*"
                />
              </div>
            </div>

            {/* Form Fields Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              {/* Full Name */}
              <div className="flex flex-col gap-1.5">
                <label className="text-[12px] font-bold text-gray-700">Full name</label>
                <input
                  type="text"
                  value={profile.fullName}
                  onChange={e => handleProfileChange('fullName', e.target.value)}
                  className="bg-gray-50 border border-gray-200 p-2.5 text-[13px] text-gray-800 focus:outline-none focus:ring-1 focus:ring-brand focus:border-brand w-full rounded-none"
                  required
                />
              </div>

              {/* Display Name */}
              <div className="flex flex-col gap-1.5">
                <label className="text-[12px] font-bold text-gray-700">Display name</label>
                <input
                  type="text"
                  value={profile.displayName}
                  onChange={e => handleProfileChange('displayName', e.target.value)}
                  className="bg-gray-50 border border-gray-200 p-2.5 text-[13px] text-gray-800 focus:outline-none focus:ring-1 focus:ring-brand focus:border-brand w-full rounded-none"
                  required
                />
              </div>

              {/* Email (Full-width row) */}
              <div className="flex flex-col gap-1.5 sm:col-span-2">
                <label className="text-[12px] font-bold text-gray-700">Email</label>
                <div className="flex items-center gap-3">
                  <input
                    type="email"
                    value={profile.email}
                    onChange={e => handleProfileChange('email', e.target.value)}
                    className="bg-gray-50 border border-gray-200 p-2.5 text-[13px] text-gray-800 focus:outline-none focus:ring-1 focus:ring-brand focus:border-brand flex-1 rounded-none"
                    required
                  />
                  <span className="bg-emerald-50 border border-emerald-250 text-emerald-700 px-2.5 py-1 rounded-full text-[10px] font-bold flex items-center gap-1 uppercase tracking-wider flex-shrink-0">
                    <span>✓</span> Verified
                  </span>
                </div>
              </div>

              {/* Phone */}
              <div className="flex flex-col gap-1.5">
                <label className="text-[12px] font-bold text-gray-700">Phone</label>
                <input
                  type="text"
                  value={profile.phone}
                  onChange={e => handleProfileChange('phone', e.target.value)}
                  className="bg-gray-50 border border-gray-200 p-2.5 text-[13px] text-gray-800 focus:outline-none focus:ring-1 focus:ring-brand focus:border-brand w-full rounded-none"
                />
              </div>

              {/* Location */}
              <div className="flex flex-col gap-1.5">
                <label className="text-[12px] font-bold text-gray-700">Location</label>
                <input
                  type="text"
                  value={profile.location}
                  onChange={e => handleProfileChange('location', e.target.value)}
                  className="bg-gray-50 border border-gray-200 p-2.5 text-[13px] text-gray-800 focus:outline-none focus:ring-1 focus:ring-brand focus:border-brand w-full rounded-none"
                />
              </div>

              {/* Timezone (Full-width row) */}
              <div className="flex flex-col gap-1.5 sm:col-span-2">
                <label className="text-[12px] font-bold text-gray-700">Timezone</label>
                <div className="relative">
                  <select
                    value={profile.timezone}
                    onChange={e => handleProfileChange('timezone', e.target.value)}
                    className="w-full appearance-none bg-gray-50 border border-gray-200 p-2.5 text-[13px] text-gray-800 focus:outline-none focus:ring-1 focus:ring-brand focus:border-brand rounded-none"
                  >
                    <option value="US/Eastern">Eastern (New York)</option>
                    <option value="US/Central">Central (Chicago)</option>
                    <option value="US/Mountain">Mountain (Denver)</option>
                    <option value="US/Pacific">Pacific (Los Angeles)</option>
                    <option value="UTC">Coordinated Universal Time (UTC)</option>
                  </select>
                  <ChevronDown size={14} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
                </div>
              </div>

              {/* Bio (Full-width row) */}
              <div className="flex flex-col gap-1.5 sm:col-span-2">
                <label className="text-[12px] font-bold text-gray-700">Short bio</label>
                <textarea
                  value={profile.bio}
                  onChange={e => handleProfileChange('bio', e.target.value)}
                  rows={4}
                  className="bg-gray-50 border border-gray-200 p-2.5 text-[13px] text-gray-800 focus:outline-none focus:ring-1 focus:ring-brand focus:border-brand w-full rounded-none resize-none"
                />
                <span className="text-[11px] text-gray-400 font-medium">Used on the About page and email signatures.</span>
              </div>

            </div>

            {/* Save Button Row inside Card */}
            <div className="flex justify-end pt-3">
              <button
                type="submit"
                disabled={isSaving}
                className="bg-[#077DA7] hover:bg-[#056d93] text-white px-5 py-2.5 text-[12px] font-bold uppercase tracking-wider flex items-center gap-1.5 rounded-none transition-colors"
              >
                <Save size={14} />
                <span>{isSaving ? 'Saving...' : 'Save changes'}</span>
              </button>
            </div>
          </form>

          {/* You are the Owner Sidebar (Right Column Card) */}
          <div className="bg-white border border-gray-200 p-5 shadow-sm space-y-4">
            <div className="flex gap-3">
              <div className="bg-brand/10 p-2 text-brand h-fit flex-shrink-0">
                <Crown size={18} />
              </div>
              <div>
                <h3 className="text-[14px] font-bold text-gray-900 leading-tight">You are the Owner</h3>
                <p className="text-gray-400 text-[11px] mt-1 leading-normal font-medium">
                  Owners have unrestricted access — including billing, deleting the workspace, and managing other admins.
                </p>
              </div>
            </div>

            <hr className="border-gray-100" />

            <div className="divide-y divide-gray-50">
              <div className="flex items-center justify-between py-2 text-[12.5px] text-gray-500 font-semibold">
                <span>Workspace</span>
                <span className="text-gray-900">Bassline Studio</span>
              </div>
              <div className="flex items-center justify-between py-2 text-[12.5px] text-gray-500 font-semibold">
                <span>Admins</span>
                <span className="text-gray-900">5</span>
              </div>
              <div className="flex items-center justify-between py-2 text-[12.5px] text-gray-500 font-semibold">
                <span>Member since</span>
                <span className="text-gray-900">Jan 2025</span>
              </div>
            </div>
          </div>

        </div>
      )}

      {activeTab === 'security' && (
        <div className="space-y-6 max-w-4xl">
          
          {/* Card 1: Change password */}
          <form onSubmit={handleSaveSecurity} className="bg-white border border-gray-200 p-5 sm:p-6 shadow-sm space-y-5">
            <div className="flex gap-3">
              <div className="bg-blue-50/50 p-2 text-brand h-fit flex-shrink-0">
                <Key size={18} />
              </div>
              <div>
                <h2 className="text-[18px] font-bold text-gray-900 font-heading leading-tight">Change password</h2>
                <p className="text-gray-400 text-[12px] mt-1 font-medium">
                  Use at least 12 characters with a mix of letters, numbers, and symbols.
                </p>
              </div>
            </div>

            <div className="space-y-4">
              {/* Current Password */}
              <div className="flex flex-col gap-1.5">
                <label className="text-[12px] font-bold text-gray-700">Current password</label>
                <input
                  type="password"
                  value={passwords.current}
                  onChange={e => setPasswords(prev => ({ ...prev, current: e.target.value }))}
                  className="bg-gray-50 border border-gray-200 p-2.5 text-[13px] text-gray-800 focus:outline-none focus:ring-1 focus:ring-brand focus:border-brand w-full rounded-none"
                  required
                />
              </div>

              {/* New Password & Confirm */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label className="text-[12px] font-bold text-gray-700">New password</label>
                  <input
                    type="password"
                    value={passwords.new}
                    onChange={e => setPasswords(prev => ({ ...prev, new: e.target.value }))}
                    placeholder="New password"
                    className="bg-gray-50 border border-gray-200 p-2.5 text-[13px] text-gray-800 focus:outline-none focus:ring-1 focus:ring-brand focus:border-brand w-full rounded-none"
                    required
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-[12px] font-bold text-gray-700">Confirm new password</label>
                  <input
                    type="password"
                    value={passwords.confirm}
                    onChange={e => setPasswords(prev => ({ ...prev, confirm: e.target.value }))}
                    placeholder="Repeat new password"
                    className="bg-gray-50 border border-gray-200 p-2.5 text-[13px] text-gray-800 focus:outline-none focus:ring-1 focus:ring-brand focus:border-brand w-full rounded-none"
                    required
                  />
                </div>
              </div>

              {/* Strength bar */}
              <div className="flex items-center justify-between bg-amber-50/50 border border-amber-100 px-3 py-2 text-[12px] mt-3">
                <span className="text-gray-500 font-semibold flex items-center">
                  <span className="w-2 h-2 rounded-full bg-amber-500 inline-block mr-1.5" />
                  Strength: <span className="text-gray-750 font-bold ml-1">Medium</span>
                </span>
                <span className="text-gray-400 font-semibold">Add a symbol to strengthen</span>
              </div>
            </div>

            <button
              type="submit"
              disabled={isSaving}
              className="bg-[#077DA7] hover:bg-[#056d93] text-white px-5 py-2.5 text-[12px] font-bold uppercase tracking-wider flex items-center gap-1.5 rounded-none transition-colors"
            >
              <span>Update password</span>
            </button>
          </form>

          {/* Card 2: Two-factor authentication */}
          <div className="bg-white border border-gray-200 p-5 sm:p-6 shadow-sm space-y-5">
            <div className="flex gap-3">
              <div className="bg-brand/10 p-2 text-brand h-fit flex-shrink-0">
                <Shield size={18} />
              </div>
              <div>
                <h2 className="text-[18px] font-bold text-gray-900 font-heading leading-tight">Two-factor authentication</h2>
                <p className="text-gray-400 text-[12px] mt-1 font-medium">
                  Add a second step at sign in to protect your workspace.
                </p>
              </div>
            </div>

            <div className="space-y-3">
              {/* Authenticator app toggle row */}
              <div className="flex items-center justify-between p-4 border border-gray-200 bg-white">
                <div className="flex items-start gap-3">
                  <div className="text-gray-500 mt-0.5">
                    <Smartphone size={16} />
                  </div>
                  <div>
                    <h4 className="text-[13px] font-bold text-gray-800">Authenticator app</h4>
                    <p className="text-gray-450 text-[11.5px] font-medium mt-0.5">Use Google Authenticator, 1Password, or Authy.</p>
                  </div>
                </div>

                {/* Toggle switch styled button */}
                <button
                  type="button"
                  onClick={() => {
                    setTfaEnabled(prev => !prev);
                    showToast(tfaEnabled ? '2FA disabled' : '2FA enabled successfully', 'success');
                  }}
                  className={`w-9 h-5 rounded-full p-0.5 transition-colors relative focus:outline-none ${
                    tfaEnabled ? 'bg-brand' : 'bg-gray-200'
                  }`}
                >
                  <span
                    className={`block w-4 h-4 rounded-full bg-white shadow-sm transition-transform ${
                      tfaEnabled ? 'translate-x-4' : 'translate-x-0'
                    }`}
                  />
                </button>
              </div>

              {/* Recovery codes row */}
              <div className="flex items-center justify-between p-4 border border-gray-200 bg-white">
                <div className="flex items-start gap-3">
                  <div className="text-gray-500 mt-0.5">
                    <Key size={16} />
                  </div>
                  <div>
                    <h4 className="text-[13px] font-bold text-gray-800">Recovery codes</h4>
                    <p className="text-gray-450 text-[11.5px] font-medium mt-0.5">10 single-use codes for when you can't access your device.</p>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => {
                    const sampleCodes = Array.from({ length: 10 }).map(() =>
                      Math.random().toString(36).substring(2, 6).toUpperCase() + '-' +
                      Math.random().toString(36).substring(2, 6).toUpperCase()
                    );
                    setRecoveryCodes(sampleCodes);
                    showToast('Recovery codes generated', 'success');
                  }}
                  className="bg-white hover:bg-gray-50 border border-gray-200 text-gray-700 px-4 py-2 text-[12px] font-bold uppercase tracking-wider transition-colors rounded-none flex-shrink-0"
                >
                  Generate
                </button>
              </div>

              {/* Show recovery codes if generated */}
              {recoveryCodes && (
                <div className="bg-gray-50 border border-gray-200 p-4 font-mono text-[12.5px] text-gray-750 space-y-2 mt-3 animate-in fade-in duration-200 relative">
                  <button
                    onClick={() => setRecoveryCodes(null)}
                    className="absolute top-2 right-2 text-gray-400 hover:text-gray-600"
                    title="Hide codes"
                  >
                    <X size={14} />
                  </button>
                  <p className="font-sans font-bold text-gray-800 text-[12px] uppercase tracking-wider mb-2">Your Recovery Codes (Keep safe!):</p>
                  <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 text-center">
                    {recoveryCodes.map((code, idx) => (
                      <span key={idx} className="bg-white border border-gray-150 py-1 font-semibold">{code}</span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Card 3: Active sessions */}
          <div className="bg-white border border-gray-200 p-5 sm:p-6 shadow-sm space-y-5">
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
              <div>
                <h2 className="text-[18px] font-bold text-gray-900 font-heading leading-tight">Active sessions</h2>
                <p className="text-gray-400 text-[12px] mt-1 font-medium">
                  Where you're currently signed in.
                </p>
              </div>

              <button
                type="button"
                onClick={() => {
                  setSessions(prev => prev.filter(s => s.isCurrent));
                  showToast('Signed out of all other devices', 'success');
                }}
                className="border border-red-200 hover:bg-red-50 text-red-650 px-4 py-2 text-[12px] font-bold uppercase tracking-wider flex items-center gap-1.5 rounded-none transition-colors self-start sm:self-auto"
              >
                <LogOut size={13} />
                <span>Sign out everywhere</span>
              </button>
            </div>

            {/* Sessions List */}
            <div className="space-y-3">
              {sessions.map(sess => (
                <div
                  key={sess.id}
                  className="flex flex-col sm:flex-row sm:items-center sm:justify-between p-4 border border-gray-200 bg-white gap-3"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0 text-gray-500 border border-gray-200">
                      {sess.type === 'laptop' && <Laptop size={17} />}
                      {sess.type === 'phone' && <Smartphone size={17} />}
                      {sess.type === 'tablet' && <Tablet size={17} />}
                    </div>
                    <div>
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="text-[13px] font-bold text-gray-805">{sess.device}</span>
                        {sess.isCurrent && (
                          <span className="bg-emerald-50 border border-emerald-250 text-emerald-700 px-2 py-0.5 rounded-full text-[9px] font-bold uppercase tracking-wide">
                            This Device
                          </span>
                        )}
                      </div>
                      <p className="text-gray-400 text-[11.5px] font-semibold mt-0.5">{sess.info}</p>
                    </div>
                  </div>

                  {!sess.isCurrent && (
                    <button
                      type="button"
                      onClick={() => {
                        setSessions(prev => prev.filter(s => s.id !== sess.id));
                        showToast(`Signed out of ${sess.device}`, 'info');
                      }}
                      className="text-gray-500 hover:text-red-650 text-[11.5px] font-bold uppercase tracking-wider transition-colors self-start sm:self-auto"
                    >
                      Sign out
                    </button>
                  )}
                </div>
              ))}
            </div>
          </div>

        </div>
      )}

      {activeTab === 'admin' && (
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-6 items-start">
          
          {/* Left Column: Workspace admins card */}
          <div className="bg-white border border-gray-200 shadow-sm p-5 sm:p-6 space-y-4 min-w-0">
            <div className="flex items-center justify-between gap-3">
              <div>
                <h2 className="text-[18px] font-bold text-gray-900 font-heading leading-tight">Workspace admins</h2>
                <p className="text-gray-400 text-[12px] mt-1 font-medium">
                  {admins.filter(a => a.status === 'active').length} active · {admins.filter(a => a.status === 'invited').length} pending
                </p>
              </div>

              {/* Invite admin button inside header */}
              <button
                onClick={() => setShowInviteModal(true)}
                className="bg-[#077DA7] hover:bg-[#056d93] text-white px-3 sm:px-4 py-2 sm:py-2.5 text-[11px] sm:text-[12px] font-bold uppercase tracking-wider flex items-center gap-1.5 transition-colors rounded-none flex-shrink-0"
              >
                <UserPlus size={14} />
                <span>Invite admin</span>
              </button>
            </div>

            {/* Table Container - overflow-x-auto with min-width of 650px on mobile */}
            <div className="overflow-x-auto border border-gray-250">
              <table className="min-w-[650px] lg:min-w-full divide-y divide-gray-250 bg-white">
                <thead className="bg-gray-50">
                  <tr>
                    <th scope="col" className="px-3 sm:px-4 py-3 text-left text-[11px] font-bold text-gray-500 uppercase tracking-widest">Name</th>
                    <th scope="col" className="px-3 sm:px-4 py-3 text-left text-[11px] font-bold text-gray-500 uppercase tracking-widest">Role</th>
                    <th scope="col" className="px-3 sm:px-4 py-3 text-left text-[11px] font-bold text-gray-500 uppercase tracking-widest">Status</th>
                    <th scope="col" className="px-3 sm:px-4 py-3 text-left text-[11px] font-bold text-gray-500 uppercase tracking-widest">Last active</th>
                    <th scope="col" className="relative px-3 sm:px-4 py-3 w-12">
                      <span className="sr-only">Actions</span>
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-150">
                  {admins.map(item => (
                    <tr key={item.id} className="hover:bg-gray-50/40 transition-colors">
                      {/* Name & Email */}
                      <td className="px-3 sm:px-4 py-3 whitespace-nowrap">
                        <div className="flex items-center gap-3">
                          {item.avatarUrl ? (
                            <img
                              src={item.avatarUrl}
                              alt={item.name}
                              className="w-10 h-10 rounded-full object-cover flex-shrink-0 border border-gray-200"
                            />
                          ) : (
                            <div className="w-10 h-10 rounded-full bg-brand/10 text-brand flex items-center justify-center flex-shrink-0 text-sm font-bold border border-brand/20">
                              {getInitials(item.name)}
                            </div>
                          )}
                          <div>
                            <p className="text-[13.5px] font-bold text-gray-900 leading-snug">{item.name}</p>
                            <p className="text-[11.5px] text-gray-400 font-semibold">{item.email}</p>
                          </div>
                        </div>
                      </td>

                      {/* Role Badge */}
                      <td className="px-3 sm:px-4 py-3 whitespace-nowrap align-middle">
                        {getRoleBadge(item.role)}
                      </td>

                      {/* Status Badge */}
                      <td className="px-3 sm:px-4 py-3 whitespace-nowrap align-middle">
                        {getStatusBadge(item.status)}
                      </td>

                      {/* Last Active */}
                      <td className="px-3 sm:px-4 py-3 whitespace-nowrap text-[12.5px] text-gray-500 font-semibold align-middle">
                        {item.lastActive}
                      </td>

                      {/* Actions Menu */}
                      <td className="px-3 sm:px-4 py-3 whitespace-nowrap text-right text-[13px] font-medium relative align-middle">
                        <button
                          type="button"
                          onClick={() => setOpenMenuUserId(openMenuUserId === item.id ? null : item.id)}
                          className="text-gray-400 hover:text-gray-600 transition-colors duration-150 p-1"
                        >
                          <MoreHorizontal size={16} />
                        </button>
                        
                        {openMenuUserId === item.id && (
                          <>
                            <div className="fixed inset-0 z-10" onClick={() => setOpenMenuUserId(null)} />
                            <div className="absolute right-5 mt-1 w-44 bg-white border border-gray-250 shadow-lg z-20 text-left rounded-none py-1 animate-in fade-in zoom-in-95 duration-100">
                              {item.role !== 'Owner' && (
                                <>
                                  <div className="px-3 py-1.5 text-[9px] font-bold text-gray-400 uppercase tracking-widest border-b border-gray-50">
                                    Change Role
                                  </div>
                                  {(['Admin', 'Editor', 'Viewer'] as const).map(r => (
                                    r !== item.role && (
                                      <button
                                        key={r}
                                        onClick={() => {
                                          setAdmins(prev => prev.map(a => a.id === item.id ? { ...a, role: r } : a));
                                          setOpenMenuUserId(null);
                                          showToast(`Role updated to ${r} for ${item.name}`, 'success');
                                        }}
                                        className="w-full text-left px-4 py-1.5 text-[12px] text-gray-700 hover:bg-gray-50 font-semibold transition-colors"
                                      >
                                        Set as {r}
                                      </button>
                                    )
                                  ))}
                                  <hr className="border-gray-100 my-1" />
                                </>
                              )}
                              
                              {item.role !== 'Owner' && (
                                <button
                                  onClick={() => {
                                    const newStatus = item.status === 'suspended' ? 'active' : 'suspended';
                                    const lastActiveVal = newStatus === 'active' ? 'Active now' : item.lastActive;
                                    setAdmins(prev => prev.map(a => a.id === item.id ? { ...a, status: newStatus, lastActive: lastActiveVal } : a));
                                    setOpenMenuUserId(null);
                                    showToast(newStatus === 'suspended' ? `${item.name} suspended` : `${item.name} activated`, 'info');
                                  }}
                                  className="w-full text-left px-4 py-1.5 text-[12px] text-gray-700 hover:bg-gray-50 font-semibold transition-colors"
                                >
                                  {item.status === 'suspended' ? 'Activate admin' : 'Suspend admin'}
                                </button>
                              )}
                              
                              {item.role !== 'Owner' ? (
                                <button
                                  onClick={() => {
                                    setAdmins(prev => prev.filter(a => a.id !== item.id));
                                    setOpenMenuUserId(null);
                                    showToast(`${item.name} removed from workspace`, 'info');
                                  }}
                                  className="w-full text-left px-4 py-1.5 text-[12px] text-red-650 hover:bg-red-50 font-bold border-t border-gray-100 transition-colors"
                                >
                                  Remove admin
                                </button>
                              ) : (
                                <div className="px-4 py-1.5 text-[11px] text-gray-400 italic">
                                  Owner cannot be modified
                                </div>
                              )}
                            </div>
                          </>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Right Column: Roles & permissions card */}
          <div className="bg-white border border-gray-200 p-5 sm:p-6 shadow-sm space-y-6">
            <div>
              <h2 className="text-[18px] font-bold text-gray-900 font-heading leading-tight">Roles &amp; permissions</h2>
              <p className="text-gray-400 text-[12px] mt-1 font-medium">
                What each role can do in this workspace.
              </p>
            </div>

            <div className="space-y-6">
              {/* Owner Role */}
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-gray-900 font-bold text-[13.5px]">
                  <Crown size={15} className="text-[#9D7CD8]" />
                  <span>Owner</span>
                </div>
                <p className="text-gray-400 text-[11.5px] font-medium leading-relaxed">
                  Full access. Only one owner — that's you.
                </p>
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {['Everything', 'Billing', 'Manage admins', 'Delete workspace'].map(tag => (
                    <span key={tag} className="bg-[#F4F5F6] border border-[#E9EAEB] text-[#5A626A] text-[9.5px] font-bold px-2 py-0.5 uppercase tracking-wider rounded-none select-none">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Admin Role */}
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-gray-900 font-bold text-[13.5px]">
                  <Shield size={15} className="text-[#008CC1]" />
                  <span>Admin</span>
                </div>
                <p className="text-gray-400 text-[11.5px] font-medium leading-relaxed">
                  Full operational access. Cannot manage other admins or billing.
                </p>
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {['Masterclasses', 'Users', 'Inquiries', 'Payments (view)', 'Media', 'Settings'].map(tag => (
                    <span key={tag} className="bg-[#F4F5F6] border border-[#E9EAEB] text-[#5A626A] text-[9.5px] font-bold px-2 py-0.5 uppercase tracking-wider rounded-none select-none">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Editor Role */}
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-gray-900 font-bold text-[13.5px]">
                  <Pencil size={14} className="text-[#D9822B]" />
                  <span>Editor</span>
                </div>
                <p className="text-gray-400 text-[11.5px] font-medium leading-relaxed">
                  Day-to-day content and inquiries. No financial data.
                </p>
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {['Masterclasses', 'Inquiries', 'Media', 'Settings (content)'].map(tag => (
                    <span key={tag} className="bg-[#F4F5F6] border border-[#E9EAEB] text-[#5A626A] text-[9.5px] font-bold px-2 py-0.5 uppercase tracking-wider rounded-none select-none">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Viewer Role */}
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-gray-900 font-bold text-[13.5px]">
                  <Eye size={15} className="text-[#7A828A]" />
                  <span>Viewer</span>
                </div>
                <p className="text-gray-400 text-[11.5px] font-medium leading-relaxed">
                  Read-only across the workspace.
                </p>
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {['View everything', 'Export nothing'].map(tag => (
                    <span key={tag} className="bg-[#F4F5F6] border border-[#E9EAEB] text-[#5A626A] text-[9.5px] font-bold px-2 py-0.5 uppercase tracking-wider rounded-none select-none">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

        </div>
      )}

      {/* ── Invite Admin Modal Overlay ────────────────────────────────── */}
      {showInviteModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 transition-opacity">
          <form
            onSubmit={handleSendInvite}
            className="bg-white border border-gray-250 shadow-2xl max-w-lg w-full p-6 sm:p-8 flex flex-col gap-5 relative animate-in fade-in zoom-in-95 duration-200 rounded-none"
          >
            {/* Close cross */}
            <button
              type="button"
              onClick={() => setShowInviteModal(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
            >
              <X size={20} />
            </button>

            {/* Title & Subtitle */}
            <div className="space-y-1">
              <h2 className="text-[20px] font-bold text-gray-900 leading-tight">Invite an admin</h2>
              <p className="text-gray-400 text-[12px] font-medium">
                They'll get an email with a one-time link to set up their account.
              </p>
            </div>

            {/* Full Name */}
            <div className="flex flex-col gap-1.5">
              <label className="text-[12px] font-bold text-gray-700">Full name</label>
              <input
                type="text"
                value={inviteName}
                onChange={e => setInviteName(e.target.value)}
                placeholder="Welcome and Foundations"
                className="bg-white border border-gray-200 p-2.5 text-[13px] text-gray-800 focus:outline-none focus:ring-1 focus:ring-brand focus:border-brand w-full rounded-none"
              />
            </div>

            {/* Role Select */}
            <div className="flex flex-col gap-1.5">
              <label className="text-[12px] font-bold text-gray-700">Role</label>
              <div className="relative">
                <select
                  value={inviteRole}
                  onChange={e => setInviteRole(e.target.value as any)}
                  className="w-full appearance-none bg-white border border-gray-200 p-2.5 text-[13px] text-gray-800 focus:outline-none focus:ring-1 focus:ring-brand focus:border-brand rounded-none font-medium cursor-pointer pr-10"
                >
                  <option value="Admin">Admin</option>
                  <option value="Editor">Editor</option>
                  <option value="Viewer">Viewer</option>
                </select>
                <ChevronDown size={14} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
              </div>
            </div>

            {/* Email */}
            <div className="flex flex-col gap-1.5">
              <label className="text-[12px] font-bold text-gray-700">Email</label>
              <input
                type="email"
                value={inviteEmail}
                onChange={e => setInviteEmail(e.target.value)}
                placeholder="jane@example.com"
                className="bg-white border border-gray-200 p-2.5 text-[13px] text-gray-800 focus:outline-none focus:ring-1 focus:ring-brand focus:border-brand w-full rounded-none"
                required
              />
            </div>

            {/* Personal Note */}
            <div className="flex flex-col gap-1.5">
              <label className="text-[12px] font-bold text-gray-700">Personal note (optional)</label>
              <textarea
                value={inviteNote}
                onChange={e => setInviteNote(e.target.value)}
                placeholder="Excited to have you on the team"
                rows={3}
                className="bg-white border border-gray-200 p-2.5 text-[13px] text-gray-800 focus:outline-none focus:ring-1 focus:ring-brand focus:border-brand w-full rounded-none resize-none"
              />
            </div>

            {/* Footer Buttons */}
            <div className="flex justify-end gap-3 mt-2 items-center">
              <button
                type="button"
                onClick={() => setShowInviteModal(false)}
                className="text-gray-700 hover:text-gray-900 text-[13px] font-bold px-4 py-2 transition-colors rounded-none"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="bg-[#077DA7] hover:bg-[#056d93] text-white px-5 py-2.5 text-[13px] font-bold transition-colors rounded-none"
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
