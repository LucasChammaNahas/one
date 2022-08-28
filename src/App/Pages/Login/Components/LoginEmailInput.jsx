import { useContext } from "react"
import { LoginContext } from "../LoginPage";

export default function LoginEmailInput({ style = '' }) {
  const { loginState, setLoginState } = useContext(LoginContext);

  if (typeof style !== 'string') {
    throw new Error('LoginEmailInput says: parameter "style" must be a string')
  }

  return (
    <div className={style}>
      <input
        className="input input-bordered w-full max-w-xs"
        type="text"
        placeholder="Email"
        value={loginState.email}
        onChange={(e) => setLoginState({ ...loginState, email: e.target.value })}
      />
    </div>
  )
}