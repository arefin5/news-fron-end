"use client"
import { useState, createContext, useEffect } from "react";
import axios from "axios";
import { useRouter } from 'next/navigation'


const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [state, setState] = useState({
    user: {},
    token: "",
  });

  useEffect(() => {
    setState(JSON.parse(window.localStorage.getItem("auth")) || { user: {}, token: "" }); // Handle case when there's no data in localStorage
  }, []);

  const router = useRouter();
  const token = state.token || "";
  axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;

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
        setState({ user: {}, token: "" }); // Reset the state
        window.localStorage.removeItem("auth");
        // router.push("/login");
      }
      return Promise.reject(error); // Ensure the error is propagated after handling
    }
  );

  return (
    <UserContext.Provider value={[state, setState]}>
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserProvider };
