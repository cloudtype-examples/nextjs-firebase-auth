"use client";

import { auth, provider } from "../firebase";
import { signInWithPopup } from "firebase/auth";
import { useRouter } from "next/navigation";

const Register = () => {
  const router = useRouter();

  const handleGoogleSignIn = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      router.push("/protected");
    } catch (error) {
      console.error(error);
    }
  };

  const handleEmailRegister = () => {
    router.push("/email-register");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold mb-4">회원가입</h1>
        <button
          onClick={handleGoogleSignIn}
          className="w-full py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 mb-4"
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/1024px-Google_%22G%22_logo.svg.png"
            alt="Google Logo"
            className="inline-block w-6 h-6 mr-2"
          />
          Google로 로그인
        </button>
        <button
          onClick={handleEmailRegister}
          className="w-full py-2 px-4 border border-transparent text-sm font-medium rounded-md text-blue-700 bg-white hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          <img
            src="https://img.icons8.com/?size=100&id=85467&format=png&color=000000"
            alt="Email Icon"
            className="inline-block w-6 h-6 mr-2"
          />
          이메일로 회원가입
        </button>
      </div>
    </div>
  );
};

export default Register;
