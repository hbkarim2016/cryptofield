import Image from '../../includes/imgs/icoImg.png';
import './platform-responsive.css';
const Platform = () => {
    return(
        <div className="container">
            <div className="grid grid-two-cols">
                <div className='ico-img  grid content-center'>
                    <img src={Image} alt='ico' />
                </div>
                <div className='ico-content'>
                    <div className='sectionDesc-header'>
                        <span>WHAT IS ICO CRYPTO</span>
                        <h4>We’ve built a Platform to<br />
                            buy and sell shares.</h4>
                        <p className='main'><em>
                            ICO Crypto is a platform for the future of funding that <br />
                            powering dat for the new equity blockchain.         
                        </em></p>
                        <p>
                            While existing solutions offer to solve just one problem at a time our  <br />
                            team is up to build a secure, useful, & easy-to-use product based on  <br />
                            integration, and even a digital arbitration system.
                        </p>
                        <p>
                            While existing solutions offer to solve just one problem at a time our <br />
                            private blockchain. It will include easy cryptocurrency payments <br />
                            integration, and even a digital arbitration system.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Platform;