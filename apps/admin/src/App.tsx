import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import DashboardLayout from '@/components/layout/DashboardLayout';
import DashboardPage    from '@/pages/DashboardPage';
import MasterclassesPage    from '@/pages/MasterclassesPage';
import MasterclassDetailPage from '@/pages/MasterclassDetailPage';
import UsersPage        from '@/pages/UsersPage';
import UserDetailPage   from '@/pages/UserDetailPage';
import InquiriesPage    from '@/pages/InquiriesPage';
import MediaLibraryPage from '@/pages/MediaLibraryPage';
import PaymentsPage     from '@/pages/PaymentsPage';
import SettingsPage     from '@/pages/SettingsPage';
import AccountPage      from '@/pages/AccountPage';
import QuoteRequestsPage from '@/pages/QuoteRequestsPage';

export default function App() {
  return (
    <Routes>
      {/* Redirect root to dashboard */}
      <Route path="/" element={<Navigate to="/admin/dashboard" replace />} />

      {/* Admin section — wrapped in shared layout */}
      <Route path="/admin" element={<DashboardLayout />}>
        <Route index element={<Navigate to="dashboard" replace />} />
        <Route path="dashboard"    element={<DashboardPage />} />
        <Route path="masterclasses" element={<MasterclassesPage />} />
        <Route path="masterclasses/:id" element={<MasterclassDetailPage />} />
        <Route path="users"        element={<UsersPage />} />
        <Route path="users/:id"     element={<UserDetailPage />} />
        <Route path="inquiries"    element={<InquiriesPage />} />
        <Route path="media-library" element={<MediaLibraryPage />} />
        <Route path="payments"     element={<PaymentsPage />} />
        <Route path="settings"     element={<SettingsPage />} />
        <Route path="account"      element={<AccountPage />} />
        <Route path="quote-requests" element={<QuoteRequestsPage />} />
      </Route>

      {/* Catch-all fallback */}
      <Route path="*" element={<Navigate to="/admin/dashboard" replace />} />
    </Routes>
  );
}
