'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../firebase';

const withAuth = (WrappedComponent) => {
  return (props) => {
    const router = useRouter();
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState(null);

    useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, (user) => {
        if (!user) {
          router.push('/login');
        } else {
          setUser(user);
          setLoading(false);
        }
      });

      return () => unsubscribe();
    }, [router]);

    if (loading) {
      return <p>로딩 중...</p>;
    }

    return <WrappedComponent user={user} {...props} />;
  };
};

export default withAuth;
