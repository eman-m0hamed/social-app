import './nav.css'
import {Link} from 'react-router-dom'
import DarkMoode from '../darkmod/DarkMoode'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faBars, faBell, faEnvelope, faHome, faSearch, faUser, faRightFromBracket} from '@fortawesome/free-solid-svg-icons'
import CurrentUser from '../../FackApis/CurrentUserData'
function Nav() {
  return (
    <nav className="Card">
      <div className="nav-container">
        {/* .................Nav Left................*/}
        <div className="nav-left">
          <Link to="/">
            <h3 className="logo">FAMILY_PLAZA</h3>
          </Link>
          <Link to="/">
            <FontAwesomeIcon icon={faHome} />
          </Link>
          <Link to="/profile/id">
            <FontAwesomeIcon icon={faUser} />
          </Link>
          <Link to="/logout">
            <FontAwesomeIcon icon={faRightFromBracket} />
          </Link>
          <div className="Nav-serchbar">
            <FontAwesomeIcon icon={faSearch} className="search" />
            <input type="search" className="btn " />
          </div>
        </div>
        {/* .................Nav Right................*/}
        <div className="nav-right">
          <Link to="/chatbox/id">
            <FontAwesomeIcon icon={faEnvelope} />
          </Link>
          <Link to="">
            <FontAwesomeIcon icon={faBell} />
          </Link>
          <DarkMoode />
          <Link to="">
            <FontAwesomeIcon icon={faBars} />
          </Link>
          <div className="user">
            <img
              src={
                "https://proj.nozoluna.com/public/dash/assets/img/" +
                localStorage.getItem("image")
              }
              alt=""
            />
            <h6>{localStorage.getItem("name")}</h6>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Nav