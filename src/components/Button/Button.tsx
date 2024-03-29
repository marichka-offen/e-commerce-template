import './Button.css'
import { ButtonHTMLAttributes } from 'react'
import React from 'react'
import Spinner from '../Spinner/Spinner'

const ButtonTypes: { [key: string]: string } = {
  google: 'button--google-sign-in',
  inverted: 'button--inverted',
}

type ButtonProps = {
  text: string
  buttonType?: string
  isLoading?: boolean
} & ButtonHTMLAttributes<HTMLButtonElement>

function Button({ text, buttonType, isLoading, ...options }: ButtonProps) {
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
