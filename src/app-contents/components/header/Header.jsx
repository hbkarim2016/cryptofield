import { Link } from 'react-router-dom';
import Image from '../../includes/imgs/Vectorlogo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faClose } from '@fortawesome/free-solid-svg-icons'
import './header.css';
import './header-responsive.css';
import { useDispatch, useSelector } from 'react-redux';
import { navFunc } from '../../redux/reducers/headerSlice';
const Header = () => {
    
    const dispatch = useDispatch();

    const {navBar} = useSelector( state => state.headerReducer )
    
    const handleMenu = () => {
        dispatch( navFunc() );
    }

    return(
        <div className="container header flex">
            <div className="logo content-center flex">
                <img src={Image} alt='vector logo' />
                <h4>Cryptofield</h4>
            </div>
            <ul className={`links mobile-menu ${ navBar === 1 ? 'active' : '' } content-center flex`}>
                <li>
                    <Link 
                    to='#platform'>
                        what is ico
                    </Link>
                </li>
                <li>
                    <Link 
                    to='#tokenSale'>
                        Token sale
                    </Link>
                </li>
                <li>
                    <Link 
                    to='#roadMap'>
                        Road map
                    </Link>
                </li>
                <li>
                    <Link 
                    to='#apps'>
                        Apps
                    </Link>
                </li>
                <li>
                    <Link 
                    to='#team'>
                        Team
                    </Link>
                </li>
                <li>
                    <Link 
                    to='#faqs'>
                        Faqs
                    </Link>
                </li>
                <li>
                    <Link 
                    to='#contact'>
                        contact
                    </Link>
                </li>
            </ul>
            <div onClick={handleMenu} className='mobile-menu-icon flex content-center'><FontAwesomeIcon icon={navBar === 0 ? faBars : faClose} /></div>
            <div className="sign-btns">
                <button className='btn'>Sign up</button>
                <button className='btn'>Login</button>
            </div>
        </div>
    )
}
export default Header;