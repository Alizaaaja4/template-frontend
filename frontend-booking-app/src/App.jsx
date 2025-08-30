import { Routes, Route } from 'react-router-dom';;

// auth
import LoginPage from './pages/auth/LoginPage';

// admin
import AdminLayout from './layouts/AdminLayout';
import BusinessPage from './pages/admin/BusinessPage';
import UsersPage from './pages/admin/UsersPage';
import FieldsPage from './pages/admin/FieldsPage';

// not found 404
import NotFoundPage from './pages/not-found/NotFoundPage';

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
        <Route path="fields" element={<FieldsPage />} />
      </Route>

      {/* Rute default jika halaman tidak ditemukan */}
      <Route path="*" element={<NotFoundPage/>} />
    </Routes>
  );
}

export default App;