import { createContext, useState } from "react";
import LoginButton from "./Components/LoginButton";
import LoginEmailInput from "./Components/LoginEmailInput";
import LoginPasswordInput from "./Components/LoginPasswordInput";
import { submitLogin } from "./Functions/loginSubmit";
import pandaImg from "App/Assets/Images/panda1.png";

export const LoginContext = createContext(null);


export default function LoginPage() {
  const [loginState, setLoginState,] = useState({ email: '', pwd: '' })

  function handleFormSubmit(e) {
    submitLogin(e, loginState)
  }

  return (
    <LoginContext.Provider value={{ loginState, setLoginState }}>
      <div className="h-screen flex justify-center items-center">
        <div className="card w-96 bg-base-300 shadow-xl p-16">
          <div className="flex justify-center pb-10">
            <img className="h-44" src={pandaImg} alt="logo" />
          </div>
          <h2 className="text-secondary text-4xl">Login</h2>
          <p className="pt-1">Please, log in to continue</p>
          <form onSubmit={handleFormSubmit} className="flex flex-col space-y-4 pt-6">
            <LoginEmailInput />
            <LoginPasswordInput />
            <LoginButton />
          </form>
          <p className="pt-4">Don't have an account? <span className="text-secondary font-bold">sign up</span></p>
        </div>
      </div>
    </LoginContext.Provider>
  );
}