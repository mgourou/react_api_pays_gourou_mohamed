import './Navbar.css';

function Navbar(props) {

  return (
    <div className={`Navbar ${props.isDarkMode ? 'dark-mode' : ''}`}>
        <nav >
            <ul>
                <li>Where In The World ?</li>
                <li><button className={` ${props.isDarkMode ? 'white-mode' : 'dark-mode'}`} onClick={props.toggleDarkMode}>{props.isDarkMode ? 'Mode clair' : 'Mode sombre'}</button></li>
            </ul>
        </nav>
    </div>
  );
}

export default Navbar;