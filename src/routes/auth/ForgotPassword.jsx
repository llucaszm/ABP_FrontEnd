
import { useState } from 'react';
import { NavLink } from 'react-router-dom';

export default function ForgotPassword() {


    return (
        <div>
                <h1>Recuperar a senha</h1>
                <p>Digite o endereço de e-mail associado à sua conta. Enviaremos um e-mail com um link para redefinir sua senha.</p>
                <form action="login.php" method="post">
                <div className="campo">
                    <span className="material-symbols-outlined">person</span>
                    <input type="email" name="email" id="iemail" placeholder="Seu e-mail" required maxLength="30" /> 
                    <label htmlFor="ilogin">Digite seu email</label>
                </div>
                <a href="novaSenha.html" className="botao">
                    Esqueci a senha <span className="material-symbols-outlined">mail</span>
                </a>
                <p>Verifique sua caixa de entrada. Enviamos um e-mail contendo um link seguro para redefinir sua senha. Se não encontrar o e-mail em sua caixa de entrada, verifique sua pasta de spam.</p>
                </form>
        </div>
    );
}

