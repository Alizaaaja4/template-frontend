import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useAuth } from "../../context/AuthContext"; 

import businessW from "../../assets/business-w.png";
import businessR from "../../assets/business-r.png";
import userW from "../../assets/user-w.png";
import userR from "../../assets/user-r.png";
import transactionW from "../../assets/card-w.png"; 
import transactionR from "../../assets/card-r.png";
import fieldW from "../../assets/data-w.png"; 
import fieldR from "../../assets/data-r.png"; 
import activeW from "../../assets/active-w.png";
import activeR from "../../assets/active-r.png";
import ticketW from "../../assets/ticket-w.png";
import ticketR from "../../assets/ticket-r.png";
import logoutR from "../../assets/logout-r.png";

import ModalLogout from "./ModalLogout";

const navLinks = [
  { name: "Business Overview", path: "/admin/dashboard", iconW: businessW, iconR: businessR },
  { name: "Users Management", path: "/admin/users", iconW: userW, iconR: userR, adminOnly: true }, // khusus admin
  { name: "Field Management", path: "/admin/fields", iconW: fieldW, iconR: fieldR },
  { name: "Transaction", path: "/admin/transactions", iconW: transactionW, iconR: transactionR },
  { name: "Active Field", path: "/admin/active-fields", iconW: activeW, iconR: activeR },
  { name: "Ticketing", path: "/admin/ticketing", iconW: ticketW, iconR: ticketR },
];

const Sidebar = () => {
  const { user } = useAuth(); 
  const [isModalOpen, setIsModalOpen] = useState(false);

  const filteredNavLinks = navLinks.filter(link => {
    return link.adminOnly ? user.role === 'Super Admin' : true;
  });

  return (
    <aside className="w-64 bg-dark-red text-white flex flex-col">
      <div className="p-6 text-center border-b border-white/20">
        <h1 className="text-2xl font-bold">[Nama Brand]</h1>
        <p className="text-sm text-gray-300">({user?.role || 'Role'})</p>
      </div>

      <nav className="flex-1 px-4 py-2 space-y-2 mt-4">
        {filteredNavLinks.map((link) => (
          <NavLink key={link.name} to={link.path}>
            {({ isActive }) => (
              <div
                className={`flex items-center p-3 rounded-lg transition-colors duration-200 ${
                  isActive
                    ? "bg-white text-dark-red font-bold shadow-md"
                    : "text-white hover:bg-red-700 font-medium"
                }`}
              >
                <div className="w-6 h-6 flex items-center justify-center">
                  <img
                    src={isActive ? link.iconR : link.iconW}
                    alt={`${link.name} icon`}
                    className="h-5 w-5"
                  />
                </div>
                <span className="ml-3">{link.name}</span>
              </div>
            )}
          </NavLink>
        ))}
      </nav>

      <div className="p-4">
        <button
          onClick={() => setIsModalOpen(true)}
          className="w-full flex items-center p-3 rounded-lg bg-white text-dark-red font-bold hover:bg-gray-200 transition-colors duration-200 shadow-md"
        >
          <div className="w-6 h-6 flex items-center justify-center">
            <img src={logoutR} alt="Logout icon" className="h-5 w-5" />
          </div>
          <span className="ml-3">Logout</span>
        </button>
      </div>

      <ModalLogout isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </aside>
  );
};

export default Sidebar;