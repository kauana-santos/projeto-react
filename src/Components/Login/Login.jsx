import {FaUser, FaLock} from "react-icons/fa";
import { useState } from "react";
import './Login.css'


const Login = () => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        alert(`Enviando dados: ${username} - ${password}`);
    }

    return(
        <div className="container">
            <form onSubmit={handleSubmit}>
                <h1>Acesse o sistema</h1>
                <div className="input-field">
                    <input required type="email" placeholder="Email" 
                    onChange={(e) => setUsername(e.target.value)}/>
                    <FaUser className="icon"/>
                </div>
                <div className="input-field">
                    <input required type="password" placeholder="Senha" 
                    onChange={(e) => setPassword(e.target.value)}/>
                    <FaLock className="icon"/>
                </div>

                <div className="recall-forget">
                    <label htmlFor="">
                        <input type="checkbox" />
                        Lembre de mim
                    </label>
                    <a href="#">Esqueceu a senha</a>
                </div>
                <button>Entrar</button>

                <div className="signUp">
                    <p>Não tem uma conta <a href="#">Registrar</a></p>
                </div>
            </form>
        </div>
    )
}

export default Login