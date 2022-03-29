import { useRef } from "react";
import Header from "./app-contents/components/header/Header";
import Home from "./app-contents/pages/home/Home";

function App() {

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

  return (
    <div className="App">
      <header ref={headerRef} className='test'>
        <Header />
      </header>
      <div>
        <Home />
      </div>
    </div>
  );
}

export default App;
