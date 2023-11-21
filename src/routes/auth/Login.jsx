
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import "../../css/styleLogin.css";

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        history.push('/home');
    };

    return (
        <div>

            <h1>Login</h1>
            <p>Seja bem-vindo(a) novamente. Faça login para acessar a sua conta.</p>
            <form onSubmit={handleSubmit} method="post">
                <div className="campo">
                    <span className="material-symbols-outlined">person</span>
                    <input type="email" name="login" id="ilogin" placeholder="Seu e-mail" required maxLength="30" value={email} onChange={handleEmailChange} /> 
                    <label htmlFor="ilogin">Login</label>
                </div>
                <div className="campo">
                    <span className="material-symbols-outlined">vpn_key</span>
                    <input type="password" name="senha" id="isenha" placeholder="Sua senha" required minLength="4" value={password} onChange={handlePasswordChange} />
                    <label htmlFor="senha">Senha</label>
                </div>
                <NavLink className="login-btn" to="/home">Entrar como colaborador</NavLink>
                <NavLink className="login-btn" to="/home">Entrar como cliente</NavLink>

                <NavLink
                    to="/forgot-password"
                    className="botao">
                    Esqueci a senha <span className="material-symbols-outlined">mail</span>
                </NavLink>
            </form>
        </div>
    );
}

