import '../Logo/Logo.scss';
import LogoCv from '../../../assets/images/logo-cv.png';




const Logo = () => {

  return (
    <div className="logo-container">
      <img className="solid-logo" src={LogoCv} alt="CV" />
    </div>
  )
}

export default Logo
