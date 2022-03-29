import Image from '../../includes/imgs/processImg.png';
import Icon_1 from '../../includes/imgs/ico-icon.png';
import Icon_2 from '../../includes/imgs/investors-icon.png';
import Icon_3 from '../../includes/imgs/bitcoin-icon.png';
import './process.css';
import './process-responsive.css';
const Process = () => {
    return(
        <div className="container">
            <div className="grid grid-two-cols">
                <div className='process-img grid content-center'>
                    <img src={Image} alt='ico' />
                </div>
                <div className='process-content'>
                    <div className='sectionDesc-header'>
                        <span>Work Process</span>
                        <h4>Crypto Working Process</h4>
                        <p>
                            Don’t get shirty with me owt to do with me arse down the pub have<br />
                            it car boot happy days no biggie bevriy only aquid Im goods in my <br />
                            flat the little rotter cheeky.!
                        </p>
                        <div className='process-services'>
                            <div className='service-single flex'>
                                <div className='service-icon'>
                                    <img src={Icon_1} alt='icon service' />
                                </div>
                                <div className='service-content'>
                                    <h5>ico Platform</h5>
                                    <p>For business which a product online <br />
                                       product listings in the</p>
                                </div>
                            </div>
                            <div className='service-single flex'>
                                <div className='service-icon'>
                                    <img src={Icon_2} alt='icon service' />
                                </div>
                                <div className='service-content'>
                                    <h5>Investors</h5>
                                    <p>For business which a product online <br />
                                       product listings in the</p>
                                </div>
                            </div>
                            <div className='service-single flex'>
                                <div className='service-icon'>
                                    <img src={Icon_3} alt='icon service' />
                                </div>
                                <div className='service-content'>
                                    <h5>Investments</h5>
                                    <p>For business which a product online <br />
                                       product listings in the</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Process;