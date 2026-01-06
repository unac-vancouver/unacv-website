import { Link } from 'react-router-dom';
import logo from '../../assets/unacvancouver-logo.png';

const NavbarLogo = () => {
  return (
    <Link to="/" className="flex items-center">
      <img src={logo} alt="UN Association in Canada - Vancouver Branch" className="h-16" />
    </Link>
  );
};

export default NavbarLogo;
