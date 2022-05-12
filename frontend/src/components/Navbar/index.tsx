import {ReactComponent as GitHubIcon} from 'assests/img/gitIcon.svg';


function Navbar(){

    return(
        <header>
        <nav>
          <div>
          <h1>DSMovie</h1>
          <a href="www.pudim.com.br" >
          <div>
            <GitHubIcon />
            <p>/devsuperior</p>
          </div>
          </a>
          </div>
        </nav>
      </header>
    );
}

export default Navbar;