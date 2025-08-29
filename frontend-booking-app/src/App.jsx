import { Routes, Route } from 'react-router-dom';;

// auth
import LoginPage from './pages/auth/LoginPage';

// admin
import AdminLayout from './layouts/AdminLayout';
import BusinessPage from './pages/admin/BusinessPage';
import UsersPage from './pages/admin/UsersPage';

function App() {
  return (
    <Routes>
      {/* Rute Publik */}
      <Route path="/" element={<LoginPage />} />
      <Route path="/login" element={<LoginPage />} />

      {/* Rute Admin */}
      <Route path="/admin" element={<AdminLayout />}>
        <Route path="dashboard" element={<BusinessPage />} />
        <Route path="users" element={<UsersPage />} />
      </Route>

      {/* Rute default jika halaman tidak ditemukan */}
      <Route path="*" element={<div>404 Not Found</div>} />
    </Routes>
  );
}

export default App;