import React, { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, Mail, ChevronLeft, ChevronRight } from 'lucide-react';
import { ALL_USERS, type User } from '@/data/users';

const PAGE_SIZE = 10;

// ─── Helpers ──────────────────────────────────────────────────────────────────

function getInitials(name: string) {
  return name
    .split(' ')
    .slice(0, 2)
    .map(n => n[0])
    .join('')
    .toUpperCase();
}

function UserAvatar({ user }: { user: User }) {
  if (user.avatar) {
    return (
      <img
        src={user.avatar}
        alt={user.name}
        className="w-9 h-9 rounded-full object-cover flex-shrink-0"
      />
    );
  }
  return (
    <div className="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0">
      <span className="text-[12px] font-semibold text-gray-500">{getInitials(user.name)}</span>
    </div>
  );
}

// ─── Pagination ───────────────────────────────────────────────────────────────

function Pagination({
  page,
  total,
  pageSize,
  onChange,
}: {
  page: number;
  total: number;
  pageSize: number;
  onChange: (p: number) => void;
}) {
  const totalPages = Math.ceil(total / pageSize);
  if (totalPages <= 1) return null;

  const pages: (number | '...')[] = [];
  if (totalPages <= 5) {
    for (let i = 1; i <= totalPages; i++) pages.push(i);
  } else {
    pages.push(1, 2, 3);
    if (page > 5) pages.push('...');
    pages.push(totalPages);
  }

  return (
    <div className="flex items-center justify-center gap-1 py-5">
      <button
        onClick={() => onChange(Math.max(1, page - 1))}
        disabled={page === 1}
        className="w-8 h-8 flex items-center justify-center text-gray-400 hover:text-gray-700 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
      >
        <ChevronLeft size={16} />
      </button>

      {pages.map((p, i) =>
        p === '...' ? (
          <span key={`ellipsis-${i}`} className="w-8 h-8 flex items-center justify-center text-gray-400 text-[13px]">
            ...
          </span>
        ) : (
          <button
            key={p}
            onClick={() => onChange(p as number)}
            className={[
              'w-8 h-8 flex items-center justify-center text-[13px] font-medium transition-colors',
              page === p
                ? 'bg-brand text-white'
                : 'text-gray-600 hover:bg-gray-100',
            ].join(' ')}
          >
            {p}
          </button>
        )
      )}

      <button
        onClick={() => onChange(Math.min(totalPages, page + 1))}
        disabled={page === totalPages}
        className="w-8 h-8 flex items-center justify-center text-gray-400 hover:text-gray-700 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
      >
        <ChevronRight size={16} />
      </button>
    </div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function UsersPage() {
  const navigate = useNavigate();
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(1);

  const filtered = useMemo(() => {
    const q = search.toLowerCase();
    return ALL_USERS.filter(
      u =>
        u.name.toLowerCase().includes(q) ||
        u.email.toLowerCase().includes(q)
    );
  }, [search]);

  const paged = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  const handleSearch = (val: string) => {
    setSearch(val);
    setPage(1);
  };

  return (
    <div className="p-5 lg:p-7 max-w-[1100px] mx-auto space-y-6 pb-10">

      {/* ── Header ──────────────────────────────────────────────────── */}
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
        <div>
          <p className="text-[11px] font-semibold text-brand uppercase tracking-widest mb-1">Community</p>
          <h1 className="text-3xl font-bold text-gray-900 font-heading">Users</h1>
          <p className="text-gray-400 text-sm mt-1">
            Everyone who has joined a cohort or signed up for the studio.
          </p>
        </div>

        {/* Search — desktop: top right; mobile: below header */}
        <div className="relative w-full sm:w-72 flex-shrink-0 sm:self-center">
          <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
          <input
            type="text"
            value={search}
            onChange={e => handleSearch(e.target.value)}
            placeholder="Search by name or email"
            className="w-full bg-white border border-gray-200 pl-8 pr-4 py-2.5
              text-[13px] text-gray-700 placeholder:text-gray-400
              focus:outline-none focus:ring-1 focus:ring-brand/40 focus:border-brand/60
              transition-all duration-200"
          />
        </div>
      </div>

      {/* ── Table ───────────────────────────────────────────────────── */}
      <div className="bg-white border border-gray-100 shadow-card overflow-hidden">

        {/* Table header — dark */}
        <div
          className="grid items-center px-5 py-3.5"
          style={{
            backgroundColor: '#1A1919',
            gridTemplateColumns: '2fr 2fr 1fr 80px',
          }}
        >
          <p className="text-[10px] font-semibold text-white/60 uppercase tracking-widest">User</p>
          <p className="text-[10px] font-semibold text-white/60 uppercase tracking-widest hidden sm:block">Email</p>
          <p className="text-[10px] font-semibold text-white/60 uppercase tracking-widest hidden sm:block">Joined</p>
          <p className="text-[10px] font-semibold text-white/60 uppercase tracking-widest text-right hidden sm:block">Cohorts</p>
        </div>

        {/* Rows */}
        {paged.length > 0 ? (
          <ul className="divide-y divide-gray-50">
            {paged.map(user => (
              <li
                key={user.id}
                onClick={() => navigate(`/admin/users/${user.id}`)}
                className="grid items-center px-5 py-3.5 hover:bg-gray-50/70 transition-colors cursor-pointer"
                style={{ gridTemplateColumns: '2fr 2fr 1fr 80px' }}
              >
                {/* USER column */}
                <div className="flex items-center gap-3 min-w-0">
                  <UserAvatar user={user} />
                  <div className="min-w-0">
                    <p className="text-[13px] font-semibold text-gray-900 leading-tight truncate">{user.name}</p>
                    <p className="text-[11px] text-gray-400 leading-tight mt-0.5">{user.id}</p>
                  </div>
                </div>

                {/* EMAIL column */}
                <div className="hidden sm:flex items-center gap-2 min-w-0">
                  <Mail size={12} className="text-gray-400 flex-shrink-0" />
                  <p className="text-[13px] text-gray-500 truncate">{user.email}</p>
                </div>

                {/* JOINED column */}
                <p className="hidden sm:block text-[13px] text-gray-500">{user.joined}</p>

                {/* COHORTS column */}
                <p className="hidden sm:block text-[14px] font-bold text-gray-900 text-right">{user.cohorts}</p>
              </li>
            ))}
          </ul>
        ) : (
          <div className="flex flex-col items-center justify-center py-16 text-center">
            <p className="text-gray-500 font-medium">No users found</p>
            <p className="text-gray-400 text-sm mt-1">Try a different name or email.</p>
          </div>
        )}

        {/* Pagination */}
        <div className="border-t border-gray-100">
          <Pagination
            page={page}
            total={filtered.length}
            pageSize={PAGE_SIZE}
            onChange={setPage}
          />
        </div>
      </div>

    </div>
  );
}
