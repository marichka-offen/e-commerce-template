import './Button.css'
import Spinner from '../Spinner/Spinner'

const ButtonTypes = {
  google: 'button--google-sign-in',
  inverted: 'button--inverted',
}

function Button({ text, buttonType, isLoading, ...options }) {
  return (
    <button
      disabled={isLoading}
      className={`button ${buttonType ? ButtonTypes[buttonType] : ''}`}
      {...options}
    >
      {isLoading ? <Spinner /> : text}
    </button>
  )
}

export default Button
