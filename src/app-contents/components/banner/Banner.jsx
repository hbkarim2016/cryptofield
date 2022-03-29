import Image from '../../includes/imgs/bannerImg.png';
import './banner.css';
import './banner-responsive.css';
const Banner = () => {
    return(
        <div className="container">
            <div className="grid grid-two-cols">
                <div className='banner-content'>
                    <div className='banner-date flex'>
                        <div className='banner-date-item text-center'>
                            <h4>10</h4>
                            <p>DAYS</p>
                        </div>
                        <div className='banner-date-item text-center'>
                            <h4>24</h4>
                            <p>HOUR</p>
                        </div>
                        <div className='banner-date-item text-center'>
                            <h4>60</h4>
                            <p>MINU</p>
                        </div>
                        <div className='banner-date-item text-center'>
                            <h4>33</h4>
                            <p>SECO</p>
                        </div>
                    </div>
                    <div className='banner-header'>
                        <h1>Algorithmic & Blockchain <br/>
                            Solutions for Crypto<br/>
                            Investments</h1>
                    </div>
                    <div className='banner-btns'>
                        <button className='btn'>Buy Tokens</button>
                        <button className='btn'>sign up to join</button>
                    </div>
                </div>
                <div className='banner-img'>
                    <img src={Image} alt='banner img' />
                </div>
            </div>
        </div>
    )
}
export default Banner;