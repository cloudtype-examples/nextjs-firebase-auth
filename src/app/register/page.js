'use client';

import { auth, provider } from '../firebase';
import { signInWithPopup } from 'firebase/auth';
import { useRouter } from 'next/navigation';

const Register = () => {
  const router = useRouter();

  const handleGoogleSignIn = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      router.push('/protected');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <div style={{ textAlign: 'center' }}>
        <h1>회원가입</h1>
        <button onClick={handleGoogleSignIn} style={{ padding: '10px 20px', fontSize: '16px', cursor: 'pointer' }}>
          <img src="/google-logo.png" alt="Google Logo" style={{ marginRight: '8px', width: '20px', height: '20px' }} />
          Google로 로그인
        </button>
      </div>
    </div>
  );
};

export default Register;
