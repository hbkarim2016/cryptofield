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
                    <a href='#platform'>
                        what is ico
                    </a>
                </li>
                <li>
                    <a href='#tokenSale'>
                        Token sale
                    </a>
                </li>
                <li>
                    <a href='#roadMap'>
                        Road map
                    </a>
                </li>
                <li>
                    <a href='#apps'>
                        Apps
                    </a>
                </li>
                <li>
                    <a href='#team'>
                        Team
                    </a>
                </li>
                <li>
                    <a href='#faqs'>
                        Faqs
                    </a>
                </li>
                <li>
                    <a href='#contact'>
                        contact
                    </a>
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