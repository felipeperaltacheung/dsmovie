import {ReactComponent as GitHubIcon} from 'assests/img/gitIcon.svg';
import './styles.css';

function Navbar(){

  return (
    <header>
      <nav className='container'>
        <div className='dsmovie-nav-content'>
          <h1>DSMovie</h1>
          <a href="www.pudim.com.br" >
            <div className='dsmovie-contact-container'>
              <GitHubIcon />
              <p className='dsmovie-contact-link'>/devsuperior</p>
            </div>
          </a>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;