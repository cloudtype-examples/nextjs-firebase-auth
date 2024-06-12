'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../firebase';

const ProtectedPage = () => {
  const router = useRouter();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (!user) {
        router.push('/register');
      } else {
        setUser(user);
      }
    });

    return () => unsubscribe();
  }, [router]);

  if (!user) {
    return <p>로딩 중...</p>;
  }

  return (
    <div>
      <h1>환영합니다, {user.displayName}!</h1>
      <p>{user.email}</p>
    </div>
  );
};

export default ProtectedPage;
