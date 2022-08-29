
export default function LoginButton({ style = '' }) {
  if (typeof style !== 'string') {
    throw new Error('LoginButton says: parameter "style" must be a string')
  }

  return (
    <div className={style}>
      <button
        className="btn btn-primary btn-wide"
        type="submit"
      >
        Log in
      </button>
    </div>
  )
}