import React from 'react'

export default function Register() {
  return (
    <div className='register'>
        <div className="register-header">
            <h1 className='header-title'>Netflux</h1>
        </div>
        <div className="register-container">
            <div className="register-form">
                <form action='post' className='form'>
                    <h2 className='header-form'> S'inscrire</h2>
                    <div className="input">
                    <label>Adresse Mail</label>
                    <input type="text" className="register-input"/>
                    </div>
                    <div className="input">
                    <label>Mot de passe</label>
                    <input type="password" className="register-input"/>
                    </div>
                    <div className="connection-page">
                        <a className='connect-link'>Vous avez déjà un compte ?</a>
                    </div>
                    <button type='submit' className='register-btn'> S'inscrire</button>
                </form>
            </div>
        </div>
    </div>
  )
}
