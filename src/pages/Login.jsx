import React, { useState } from 'react'
import { auth } from '../Firebase.config'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { Link, useNavigate } from "react-router-dom"



export default function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()

    const login = (e) => {
        e.preventDefault()
        try {
            signInWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    console.log(userCredential)
                    const user = userCredential.user.email;
                    localStorage.setItem('user', user)
                    navigate("/loader")
                })
        }
        catch (error){
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
                <form className='form'>
                    <h2 className='header-form'> Connexion</h2>
                    <div className="input">
                        <label>Adresse Mail</label>
                        <input type="text" className="register-input" onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className="input">
                        <label>Mot de passe</label>
                        <input type="password" className="register-input" onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <div className="connection-page">
                        <Link to="/" className='connect-link'>Vous avez déjà un compte ?</Link>
                    </div>
                    <button type='submit' className='register-btn' onClick={login}> Se connecter</button>
                </form>
            </div>
        </div>
    </div>
)
}
