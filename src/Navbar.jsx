import {FaBars} from 'react-icons/fa';
import { useGlobalContext } from './Context'
import NavLinks from './NavLinks';
const Navbar = () => {
  const {openSidebar}=useGlobalContext();
  return <nav>
    <div className='nav-center'>
      <h3>strapi</h3>
      <button onClick={openSidebar} className='toggle-btn'>
        <FaBars />
      </button>
      <NavLinks />
    </div>
  </nav>
}

export default Navbar