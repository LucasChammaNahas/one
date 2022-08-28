import { useContext, useState } from "react"
import { LoginContext } from "../LoginPage";
import visibilityOn from "App/Assets/Images/visibility_on_icon.svg"
import visibilityOff from "App/Assets/Images/visibility_off_icon.svg"

export default function LoginPasswordInput({ style = '' }) {
  const { loginState, setLoginState } = useContext(LoginContext);
  const [inputType, setInputType] = useState('password')

  if (typeof style !== 'string') {
    throw new Error('LoginPasswordInput says: parameter "style" must be a string')
  }

  function handleInputType() {
    if (inputType === 'text') {
      setInputType('password')
    } else {
      setInputType('text')
    }
  }

  return (
    <div className={style}>
      <div className="relative">
        <input
          className="input input-bordered w-full max-w-xs"
          type={inputType}
          placeholder="Password"
          value={loginState.pwd}
          onChange={(e) => setLoginState({...loginState, pwd: e.target.value})}
        />
        <div className="absolute h-full flex items-center right-3 top-0">
          <button type="button" onClick={handleInputType}>
            <img src={inputType === 'text' ? visibilityOn : visibilityOff} alt="visibility on" />
          </button>
        </div>
      </div>
    </div>
  )
}