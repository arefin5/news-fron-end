"use client"
import { useContext } from 'react';
import { useRouter } from 'next/router';
import { UserContext } from '../../context';

const ProtectRoute = ({ children }) => {
  const router = useRouter();
  const { state } = useContext(UserContext);

  useEffect(() => {
    if (!state.token || !state.isAdmin) {
      router.push('/login'); // Redirect to login if user is not logged in or not an admin
    }
  }, [state.token, state.isAdmin]);

  return children;
};

export default ProtectRoute;
