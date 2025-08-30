import { useState } from 'react';
import Header from "../../components/admin/fields-management/Header";
import TableControls from "../../components/admin/fields-management/TableControls";
import FieldsTable from "../../components/admin/fields-management/FieldsTable";
import Pagination from "../../components/admin/fields-management/Pagination";
import ModalAddField from '../../components/admin/fields-management/ModalAddField';
import ModalEditField from '../../components/admin/fields-management/ModalEditField';
import ModalDelateField from '../../components/admin/fields-management/ModalDelateField';

const FieldsPage = () => {
  // State untuk setiap modal
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  // State untuk menyimpan data lapangan yang dipilih
  const [selectedField, setSelectedField] = useState(null);

  // --- Fungsi untuk menangani aksi dari tabel ---
  const handleEdit = (management_lap) => {
    setSelectedField(management_lap);
    setIsEditModalOpen(true);
  };

  const handleDelete = (management_lap) => {
    setSelectedField(management_lap);
    setIsDeleteModalOpen(true);
  };
  
  const handleConfirmDelete = () => {
    console.log("Deleting field:", selectedField);
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
      <Header onAddFieldClick={() => setIsAddModalOpen(true)} />

      <div className="bg-white p-4 rounded-lg shadow-md mb-4">
        <TableControls />
      </div>

      {/* Kirim fungsi handle ke tabel */}
      <FieldsTable 
        onEditFieldClick={handleEdit}
        onDeleteFieldClick={handleDelete}
      />
      <Pagination 
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />

      {/* Render semua modal di sini */}
      <ModalAddField 
        isOpen={isAddModalOpen} 
        onClose={() => setIsAddModalOpen(false)} 
      />
      <ModalEditField
        isOpen={isEditModalOpen}
        onClose={() => setIsEditModalOpen(false)}
        management_lap={selectedField}
      />
      <ModalDelateField
        isOpen={isDeleteModalOpen}
        onClose={() => setIsDeleteModalOpen(false)}
        onConfirm={handleConfirmDelete}
        management_lap={selectedField}
      />
    </div>
  );
};

export default FieldsPage;