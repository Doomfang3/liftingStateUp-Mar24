import { useState } from 'react'

const Form = () => {
  /* const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isChecked, setIsChecked] = useState(false) */

  const [formValues, setFormValues] = useState({ email: '', password: '', isChecked: false })
  const [isPasswordShown, setIsPasswordShown] = useState(false)

  const handleChange = event => {
    let value = event.target.value
    const name = event.target.name
    if (event.target.type === 'checkbox') {
      value = event.target.checked
    }

    setFormValues({ ...formValues, [name]: value })
  }

  const handleSubmit = event => {
    event.preventDefault()
    console.log(event)

    //console.log({ email, password, isChecked })
    console.log(formValues)
  }

  return (
    <>
      <h1>Form</h1>
      <form style={{ display: 'flex', flexDirection: 'column' }} onSubmit={handleSubmit}>
        <label>
          Email:
          <input
            name='email'
            value={formValues.email}
            onChange={handleChange}
            type='email'
            required
          />
        </label>
        <label>
          Password:
          <input
            name='password'
            value={formValues.password}
            onChange={handleChange}
            type={isPasswordShown ? 'text' : 'password'}
            required
          />{' '}
          <button onClick={() => setIsPasswordShown(!isPasswordShown)} type='button'>
            Show password
          </button>
        </label>
        <label>
          <input
            name='isChecked'
            type='checkbox'
            checked={formValues.isChecked}
            onChange={handleChange}
            required
          />
          Conditions you have to agree to to sell you soul
        </label>
        <button type='submit'>Submit</button>
      </form>
    </>
  )
}

export default Form
