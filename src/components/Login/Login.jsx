import { Link } from "react-router-dom"
import Inputs from '../../props elements/Inputs'
import "./Login.css"

function Login() {

  const handleLogin = async (event) => {
    event.preventDefault();

    const email = event.target.email.value;   // Corrigido para capturar o valor correto do email
    const password = event.target.password.value;

    try {
      const response = await fetch('http://localhost:3333/auth/login', {
        body: JSON.stringify({ email, password }),
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        }
      });

      if (!response.ok) {
        throw new Error(`Ocorreu erro na requisição: ${response.status}`);
      }

      const data = await response.json()
      console.log('API: ', data);

      if (data.token) {
        localStorage.setItem('user', data.user)
        localStorage.setItem('user', JSON.stringify(data.user)); 
      } else {
        throw new Error('O token não foi retornado pela API')
      }

    } catch (error) {
      console.error('Erro na requisição:', error);
    }
  }

  return (
    <>
      <section className="main-login">

        <div className="container-square">

          <section className="SectionLogin">
            <form
              onSubmit={handleLogin}
              className="form">

              <div className="title-register">
                <p className="title">Acesse sua conta</p>
                <p className="text-reg">Seu primeiro acesso? Então registre-se <Link className="link-reg" to='/cadastro'>aqui.</Link></p>
              </div>

              <div className="inputs-area">

                <Inputs
                  label='Email*'
                  placeholder='Insira seu email'
                  type='email'
                  name='email'
                />
                <Inputs
                  label='Senha*'
                  placeholder='Insira sua senha'
                  type='password'
                  name='password'
                />

              </div>

              <div className="button-area">
                <button className="button-submit">Acessar conta</button>
              </div>

            </form>
          </section>
        </div>

      </section>
    </>
  )
} 

export default Login