import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import Navbar from './Navbar';

export default function DashboardLayout() {
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);
  const [desktopCollapsed, setDesktopCollapsed] = useState(false);

  return (
    <div className="flex h-screen overflow-hidden" style={{ backgroundColor: '#1A1919' }}>
      {/* Sidebar */}
      <Sidebar
        mobileOpen={mobileSidebarOpen}
        onMobileClose={() => setMobileSidebarOpen(false)}
        desktopCollapsed={desktopCollapsed}
        onDesktopToggle={() => setDesktopCollapsed(prev => !prev)}
      />

      {/* Main area */}
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        {/* Navbar */}
        <Navbar
          onMobileMenuToggle={() => setMobileSidebarOpen(prev => !prev)}
          isMobileSidebarOpen={mobileSidebarOpen}
        />

        {/* Scrollable content */}
        <main className="flex-1 overflow-y-auto bg-surface-secondary">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
