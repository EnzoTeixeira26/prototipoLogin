
export default function Signup() {
    return (
        <>
            <div className="divMain">
        <div className="container1">
          <h1>Signup</h1>
          <form className="formulario">
            <input type="text" name="emailLogin" placeholder="Email" />
            <input type="password" name="createPass" placeholder="Create Password" />
            <input type="password" name="confirmPass" placeholder="Confirm Password" />
            <button
              type="button" className="mostrarSenha"></button>
          </form>

          <button type='submit' className='loginB'>Signup</button>
          <h4>Already have an account? <a className='linkSign' href='linkAqui'>Login</a></h4>

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
    )
}