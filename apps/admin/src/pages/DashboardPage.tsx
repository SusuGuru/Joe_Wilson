import React from 'react';
import { TrendingUp, Users, Calendar, MessageSquare } from 'lucide-react';
import StatCard from '@/components/ui/StatCard';
import SectionCard from '@/components/ui/SectionCard';
import Badge from '@/components/ui/Badge';
import Avatar from '@/components/ui/Avatar';

// ─── Mock data ────────────────────────────────────────────────────────────────

const stats = [
  {
    label: 'Total Revenue',
    value: '$3,192',
    trend: '+18% vs last month',
    trendPositive: true,
    icon: <TrendingUp size={16} />,
  },
  {
    label: 'Active Students',
    value: 10,
    subtitle: 'Across 3 cohorts',
    icon: <Users size={16} />,
  },
  {
    label: 'Upcoming Sessions',
    value: 4,
    subtitle: 'Next within 7 days',
    icon: <Calendar size={16} />,
  },
  {
    label: 'Open Inquiries',
    value: 3,
    subtitle: 'Awaiting response',
    icon: <MessageSquare size={16} />,
  },
];

const upcomingSessions = [
  { date: '24', month: 'APR', title: 'Walking Lines in Worship', cohort: 'Foundations of Gospel Bass', time: 'Apr 24, 6:00 PM' },
  { date: '1', month: 'MAY', title: 'Modulations & Transitions', cohort: 'Foundations of Gospel Bass', time: 'May 1, 8:00 PM' },
  { date: '15', month: 'MAY', title: 'The MD Mindset', cohort: 'Advanced Worship Direction', time: 'May 15, 6:00 PM' },
  { date: '22', month: 'MAY', title: 'Arranging On The Fly', cohort: 'Advanced Worship Direction', time: 'May 22, 6:00 PM' },
];

const inquiries = [
  {
    name: 'Pastor Williams',
    message: "We'd love to have you direct music for our annual conference in July. Please share package.",
    date: 'Apr 18, 2026',
    type: 'booking' as const,
  },
  {
    name: 'Tina Adebayo',
    message: 'Will the Foundations cohort run again in the fall? I missed the enrollment window.',
    date: 'Apr 17, 2026',
    type: 'general' as const,
  },
  {
    name: 'Mount Zion AV Team',
    message: 'Inquiring about a 2-day workshop with our rhythm section. Budget approved.',
    date: 'Apr 15, 2026',
    type: 'booking' as const,
  },
];

const enrollments = [
  { name: 'Isaac Thompson', course: 'Joined Advanced Worship Direction', date: 'Apr 15, 2026' },
  { name: 'Ruth Eze', course: 'Joined Advanced Worship Direction', date: 'Apr 8, 2026' },
  { name: 'Sade Lawal', course: 'Joined Foundations of Gospel Bass', date: 'Apr 5, 2026' },
  { name: 'Grace Adeyemi', course: 'Joined Advanced Worship Direction', date: 'Apr 2, 2026' },
  { name: 'Naomi Carter', course: 'Joined Foundations of Gospel Bass', date: 'Apr 1, 2026' },
];

const payments = [
  { name: 'Isaac Thompson', course: 'Advanced Worship Direction', amount: '$499', status: 'success' as const },
  { name: 'Ruth Eze', course: 'Advanced Worship Direction', amount: '$499', status: 'success' as const },
  { name: 'Sade Lawal', course: 'Foundations of Gospel Bass', amount: '$349', status: 'failed' as const },
  { name: 'Grace Adeyemi', course: 'Advanced Worship Direction', amount: '$490', status: 'success' as const },
  { name: 'Naomi Carter', course: 'Foundations of Gospel Bass', amount: '$349', status: 'success' as const },
];

// ─── Component ────────────────────────────────────────────────────────────────

export default function DashboardPage() {
  const hour = new Date().getHours();
  const greeting = hour < 12 ? 'Good morning' : hour < 17 ? 'Good afternoon' : 'Good evening';

  return (
    <div className="p-5 lg:p-7 max-w-[1280px] mx-auto space-y-6">

      {/* Header */}
      <div>
        <p className="text-[11px] font-semibold text-brand uppercase tracking-widest mb-1">Overview</p>
        <h1 className="text-3xl font-bold text-gray-900 font-heading">{greeting}, Marcus</h1>
        <p className="text-gray-400 text-sm mt-1">Here's what needs your attention across the studio today.</p>
      </div>

      {/* Stats grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
        {stats.map((stat) => (
          <StatCard
            key={stat.label}
            label={stat.label}
            value={stat.value}
            icon={stat.icon}
            trend={stat.trend}
            subtitle={stat.subtitle}
            trendPositive={stat.trendPositive}
          />
        ))}
      </div>

      {/* Middle row: Sessions + Inquiries */}
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-4">

        {/* Upcoming sessions */}
        <SectionCard title="Upcoming sessions" linkLabel="View all">
          <p className="px-5 pb-3 text-[12px] text-gray-400">Live classes and scheduled cohort meetings.</p>
          <div className="divide-y divide-gray-50">
            {upcomingSessions.map((session, i) => (
              <div key={i} className="flex items-center gap-4 px-5 py-3.5 hover:bg-gray-50/60 transition-colors">
                {/* Date badge */}
                <div className="w-10 flex-shrink-0 text-center">
                  <p className="text-[18px] font-bold text-gray-900 leading-none">{session.date}</p>
                  <p className="text-[9px] font-semibold text-gray-400 uppercase tracking-wider mt-0.5">{session.month}</p>
                </div>
                {/* Info */}
                <div className="flex-1 min-w-0">
                  <p className="text-[13px] font-semibold text-gray-900 truncate">{session.title}</p>
                  <p className="text-[11px] text-gray-400 mt-0.5 truncate">{session.cohort} · {session.time}</p>
                </div>
                <Badge label="Upcoming" variant="upcoming" />
              </div>
            ))}
          </div>
        </SectionCard>

        {/* New inquiries */}
        <SectionCard title="New inquiries" linkLabel="All">
          <div className="divide-y divide-gray-50">
            {inquiries.map((inq, i) => (
              <div key={i} className="px-5 py-4 hover:bg-gray-50/60 transition-colors">
                <div className="flex items-start justify-between gap-2 mb-1">
                  <p className="text-[13px] font-semibold text-gray-900">{inq.name}</p>
                  <Badge
                    label={inq.type.charAt(0).toUpperCase() + inq.type.slice(1)}
                    variant={inq.type}
                  />
                </div>
                <p className="text-[11px] text-gray-400 leading-relaxed line-clamp-2">{inq.message}</p>
                <p className="text-[10px] text-gray-300 mt-1.5">{inq.date}</p>
              </div>
            ))}
          </div>
        </SectionCard>
      </div>

      {/* Bottom row: Enrollments + Payments */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">

        {/* Recent enrollments */}
        <SectionCard title="Recent enrollments" linkLabel="View users">
          <div className="divide-y divide-gray-50">
            {enrollments.map((enr, i) => (
              <div key={i} className="flex items-center gap-3 px-5 py-3.5 hover:bg-gray-50/60 transition-colors">
                <Avatar name={enr.name} />
                <div className="flex-1 min-w-0">
                  <p className="text-[13px] font-semibold text-gray-900 truncate">{enr.name}</p>
                  <p className="text-[11px] text-gray-400 truncate">{enr.course}</p>
                </div>
                <p className="text-[11px] text-gray-400 flex-shrink-0">{enr.date}</p>
              </div>
            ))}
          </div>
        </SectionCard>

        {/* Recent payments */}
        <SectionCard title="Recent payments" linkLabel="All payments">
          <div className="divide-y divide-gray-50">
            {payments.map((pay, i) => (
              <div key={i} className="flex items-center gap-3 px-5 py-3.5 hover:bg-gray-50/60 transition-colors">
                <Avatar name={pay.name} />
                <div className="flex-1 min-w-0">
                  <p className="text-[13px] font-semibold text-gray-900 truncate">{pay.name}</p>
                  <p className="text-[11px] text-gray-400 truncate">{pay.course}</p>
                </div>
                <div className="flex items-center gap-2 flex-shrink-0">
                  <p className="text-[13px] font-semibold text-gray-900">{pay.amount}</p>
                  <Badge
                    label={pay.status.charAt(0).toUpperCase() + pay.status.slice(1)}
                    variant={pay.status}
                  />
                </div>
              </div>
            ))}
          </div>
        </SectionCard>
      </div>
    </div>
  );
}
