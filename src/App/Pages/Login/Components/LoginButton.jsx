import { useContext } from "react"
import { LoginContext } from "../LoginPage";
import { submitLogin } from "../Functions/loginSubmit"

export default function LoginButton({ style = '' }) {
  const { loginState } = useContext(LoginContext);

  if (typeof style !== 'string') {
    throw new Error('LoginButton says: parameter "style" must be a string')
  }

  return (
    <div className={style}>
      <button
        className="btn btn-primary btn-wide"
        type="submit"
        // onClick={() => submitLogin(loginState)}
      >
        Log in
      </button>
    </div>
  )
}