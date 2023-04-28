import React from 'react'
import './FormInput.css'
import { InputHTMLAttributes } from 'react'

type FormInputProps = {
  label: string
} & InputHTMLAttributes<HTMLInputElement>

function FormInput({ label, ...options }: FormInputProps) {
  return (
    <div className='form-input'>
      <input {...options} className='form-input__input' />

      <label
        htmlFor={options.id}
        className={`form-input__label ${
          options.value ? 'form-input__label--shrink' : ''
        }`}
      >
        {label}
      </label>
    </div>
  )
}

export default FormInput
