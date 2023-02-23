import Logo from '../imagenes/freecodecamp-logo.png'

function Logofree() {
  return (
    <div className='freecodecamp-logo-contenedor'>
      <img src={ Logo } className='freecodecamp-logo' alt='logo' />
    </div>
  )
}

export { Logofree };
