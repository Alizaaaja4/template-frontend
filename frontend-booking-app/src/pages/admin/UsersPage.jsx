// src/pages/admin/UsersPage.jsx
import { useState } from 'react';
import Header from "../../components/admin/users-management/Header";
import TableControls from "../../components/admin/users-management/TableControls";
import UsersTable from "../../components/admin/users-management/UsersTable";
import Pagination from "../../components/admin/users-management/Pagination";
import ModalAddUser from '../../components/admin/users-management/ModalAddUser';
import ModalEditUser from '../../components/admin/users-management/ModalEditUser'; // Impor Modal Edit
import ModalDelateUser from '../../components/admin/users-management/ModalDelateUser'; // Impor Modal Delete

const UsersPage = () => {
  // State untuk setiap modal
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  // State untuk menyimpan data user yang dipilih
  const [selectedUser, setSelectedUser] = useState(null);

  // --- Fungsi untuk menangani aksi dari tabel ---
  const handleEdit = (user) => {
    setSelectedUser(user);
    setIsEditModalOpen(true);
  };

  const handleDelete = (user) => {
    setSelectedUser(user);
    setIsDeleteModalOpen(true);
  };
  
  const handleConfirmDelete = () => {
    console.log("Deleting user:", selectedUser);
    // Logika untuk call API delete akan ada di sini
    setIsDeleteModalOpen(false); // Tutup modal setelah selesai
  }

  // --- State dan fungsi untuk pagination ---
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 5; 

  const handlePageChange = (page) => {
    console.log(`Mengambil data untuk halaman: ${page}`);
    setCurrentPage(page);
  };

  return (
    <div className="p-1 md:p-4">
      <Header onAddUserClick={() => setIsAddModalOpen(true)} />

      <div className="bg-white p-4 rounded-lg shadow-md mb-4">
        <TableControls />
      </div>

      {/* Kirim fungsi handle ke tabel */}
      <UsersTable 
        onEditUserClick={handleEdit}
        onDeleteUserClick={handleDelete}
      />
      <Pagination 
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />

      {/* Render semua modal di sini */}
      <ModalAddUser 
        isOpen={isAddModalOpen} 
        onClose={() => setIsAddModalOpen(false)} 
      />
      <ModalEditUser
        isOpen={isEditModalOpen}
        onClose={() => setIsEditModalOpen(false)}
        user={selectedUser}
      />
      <ModalDelateUser
        isOpen={isDeleteModalOpen}
        onClose={() => setIsDeleteModalOpen(false)}
        onConfirm={handleConfirmDelete}
        user={selectedUser}
      />
    </div>
  );
};

export default UsersPage;