import Header from "../../components/header/Header";
import Banner from "../../components/banner/Banner";
import Platform from "../../components/platform/Platform";
import Process from "../../components/process/Process";
import { useRef } from "react";
import './home.css';
import './home-responsive.css';
const Home = () => {
  
    const headerRef = useRef();
  
    window.addEventListener( 'scroll', () => {
        if( headerRef !== undefined ){
          if( window.pageYOffset > 10 ){
            headerRef.current.classList.add('headerDownStyle')
          }else{
            headerRef.current.classList.remove('headerDownStyle')
          }
        }
      })
    return(
        <div>
            <header ref={headerRef} className='test'>
                <Header />
            </header>
            <section className="banner-section">
                <div className="banner-bg">
                    <Banner />
                </div>
            </section>
            <section id='platform' className="platform-section">
                <Platform />
            </section>
            <section id='process'>
                <Process />
            </section>
        </div>
    )
}
export default Home;