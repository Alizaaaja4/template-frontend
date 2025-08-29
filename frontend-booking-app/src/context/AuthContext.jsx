import { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({
    role: 'Admin', // <-- GANTI INI menjadi 'Staff' untuk mencoba peran lain
  });

  const logout = () => {
    // Logika untuk logout
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// 3. Buat "Hook" custom untuk mempermudah penggunaan context
export const useAuth = () => {
  return useContext(AuthContext);
};