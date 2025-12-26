
export default function Login() {
  return (
    <>
      <div className="divMain">
        <div className="container1">
          <h1>Login</h1>
          <form className="formulario">
            <input type="text" name="emailLogin" placeholder="Email" />
            <input type="password" name="passLogin" placeholder="Password" />
            <button
              type="button" className="mostrarSenha"></button>
          </form>

          <a href='linkAqui'>
            <h4 className='forgotPass'>Forgot Password?</h4>
          </a>

          <button type='submit' className='loginB'>Login</button>
          <h4>Don't have an account? <a className='linkSign' href='linkAqui'>Signup</a></h4>

          <div class="separador">
            <span class="linha"></span>
            <span class="texto">OR</span>
            <span class="linha"></span>
          </div>

          <button type='submit' className='faceLogin'>
            <span className='iconFace'></span>
            <span className='buttonText'>Login with Facebook</span>
          </button>
          
          <button type='submit' className='googleLogin'>
            <span className='iconGoogle'></span>
            <span className='buttonTextG'>Login with Google</span>
          </button>
        </div>
      </div>
    </>
  );
}
