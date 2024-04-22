"use client"
import { useContext, useEffect, useState } from 'react';
import { UserContext } from "../../context";
import axios from 'axios';
import { useRouter } from "next/navigation";

const useCurrentUser = () => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useRouter();
  const [state] = useContext(UserContext);

  useEffect(() => {
    const fetchCurrentUser = async () => {
      if (state && state.isAuthenticated && state.user.role === "admin") {
        try {
          const { data } = await axios.get('/profile');
          setCurrentUser(data);
        } catch (error) {
          navigate.push('/login');
        } finally {
          setLoading(false);
        }
      } else {
        setLoading(false);
      }
    };

    if (state.isAuthenticated) {
      fetchCurrentUser();
    } else {
      navigate.push('/login');
    }
  }, [axios, navigate, state]);

  return { currentUser, loading };
};

export default useCurrentUser;
