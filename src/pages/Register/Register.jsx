import React from 'react'
import { NavLink } from 'react-router'

export const Register = () => {
  return (
    <div>
        <h1>Register PAGE</h1>

        <NavLink to="/" className="btn btn-primary" >GO TO Home PAGE</NavLink>
    </div>
  )
}

export default Register