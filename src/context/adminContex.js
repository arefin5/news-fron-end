import { useState, createContext, useEffect } from "react";
import axios from "axios";
import { useRouter } from 'next/navigation'

const UserContext = createContext();
const AdminContext = createContext(); // Add a new context for admin-related state

const UserProvider = ({ children }) => {
  const [userState, setUserState] = useState({
    user: {},
    token: "",
  });

  const [adminState, setAdminState] = useState({
    isAdmin: false,
  });

  useEffect(() => {
    const storedUserData = JSON.parse(window.localStorage.getItem("auth")) || { user: {}, token: "" };
    setUserState(storedUserData);
    setAdminState({ isAdmin: storedUserData.isAdmin || false }); // Assuming isAdmin is stored in local storage
  }, []);

  const router = useRouter();
  const token = userState.token || "";

  axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  axios.defaults.baseURL = 'http://45.77.247.238:4000/api/';

  axios.interceptors.request.use(request => {
    if (request.method === 'put' || request.method === 'PUT') {
      console.log('Starting PUT Request', request);
    }
    return request;
  });

  axios.interceptors.response.use(
    function (response) {
      return response;
    },
    function (error) {
      let res = error.response;
      if (res.status === 401 && res.config && !res.config.__isRetryRequest) {
        setUserState({ user: {}, token: "" }); // Reset user state
        setAdminState({ isAdmin: false }); // Reset admin state
        window.localStorage.removeItem("auth");
        // router.push("/login");
      }
      return Promise.reject(error);
    }
  );

  return (
    <UserContext.Provider value={[userState, setUserState]}>
      <AdminContext.Provider value={[adminState, setAdminState]}>
        {children}
      </AdminContext.Provider>
    </UserContext.Provider>
  );
};

export { UserContext, AdminContext, UserProvider };
