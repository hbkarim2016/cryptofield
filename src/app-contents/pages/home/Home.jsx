import Banner from "../../components/banner/Banner";
import Platform from "../../components/platform/Platform";
import Process from "../../components/process/Process";
import './home.css';
import './home-responsive.css';
const Home = () => {
    return(
        <div>
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