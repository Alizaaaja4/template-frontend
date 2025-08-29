// src/layouts/AdminLayout.jsx

import { Outlet } from 'react-router-dom';
import Sidebar from '../components/admin/Sidebar';

const AdminLayout = () => {
  return (
    <div className="flex h-screen bg-admin-white">
      <Sidebar />
      <main className="flex-1 p-8 overflow-y-auto">
        <Outlet />
      </main>
    </div>
  );
};

export default AdminLayout;