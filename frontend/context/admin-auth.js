import { createContext, useState } from "react";

export const AdminContext = createContext({
  admin: {},
  adminLogin: () => {},
  adminLogout: () => {},
});

const AdminContextProvider = (props) => {
  const [admin, setAdmin] = useState({});

  const adminLoginHandler = (adminObj) => {
    setAdmin(adminObj);
  };

  const adminLogoutHandler = () => {
    setAdmin({});
  };

  return (
    <AdminContext.Provider
      value={{
        admin,
        adminLogin: adminLoginHandler,
        adminLogout: adminLogoutHandler,
      }}
    >
      {props.children}
    </AdminContext.Provider>
  );
};

export default AdminContextProvider;
