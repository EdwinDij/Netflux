import React, { useState } from 'react'
import { Link, useNavigate } from "react-router-dom"
import { auth } from '../Firebase.config'
import { createUserWithEmailAndPassword } from 'firebase/auth'


export default function Register() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate()

    const register = async (e) => {
        e.preventDefault()
       try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password)
        navigate('/loader')
        const user = userCredential.user.email
        localStorage.setItem('user', user)
        console.log(userCredential)
       }
       catch(error) {
        console.log(error)
       }
    }

    return (
        <div className='register'>
            <div className="register-header">
                <h1 className='header-title'>Netflux</h1>
            </div>
            <div className="register-container">
                <div className="register-form">
                    <form  className='form'>
                        <h2 className='header-form'> S'inscrire</h2>
                        <div className="input">
                            <label>Adresse Mail</label>
                            <input type="text" className="register-input" onChange={(e) => setEmail(e.target.value)}/>
                        </div>
                        <div className="input">
                            <label>Mot de passe</label>
                            <input type="password" className="register-input" onChange={(e) => setPassword(e.target.value)}/>
                        </div>
                        <div className="connection-page">
                            <Link to="/Login" className='connect-link'>Vous avez déjà un compte ?</Link>
                        </div>
                        <button type='submit' className='register-btn' onClick={register}> S'inscrire</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
