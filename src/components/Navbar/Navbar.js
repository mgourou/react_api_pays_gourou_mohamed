import './Navbar.css';

function Navbar(props) {

  return (
    <div className={`Navbar ${props.darkMode ? 'dark-mode' : ''}`}>
        <nav >
            <ul>
                <li>Where In The World ?</li>
                <li><button className='btn_dark_mode' onClick={props.toggleDarkMode}>{props.darkMode ? 'Mode clair' : 'Mode sombre'}</button></li>
            </ul>
        </nav>
    </div>
  );
}

export default Navbar;