import { createContext, useState } from "react";
import LoginButton from "./Components/LoginButton";
import LoginEmailInput from "./Components/LoginEmailInput";
import LoginPasswordInput from "./Components/LoginPasswordInput";
import { submitLogin } from "./Functions/loginSubmit"

export const LoginContext = createContext(null);


export default function LoginPage() {
  const [loginState, setLoginState,] = useState({ email: '', pwd: '' })

  return (
    <LoginContext.Provider value={{ loginState, setLoginState }}>
      <div className="h-screen flex justify-center items-center">
        <div className="card w-96 bg-base-300 shadow-xl p-16">
          <h2 className="text-secondary text-4xl">Login</h2>
          <form onSubmit={(e) => submitLogin(e, loginState)}>
            <p>Please, log in to continue</p>
            <LoginEmailInput />
            <LoginPasswordInput />
            <LoginButton />
            <p>mail: {loginState.email}</p>
            <p>password: {loginState.pwd}</p>
          </form>
        </div>
      </div>
    </LoginContext.Provider>
  );
}