import { useRef } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./app-contents/components/header/Header";
import Home from "./app-contents/pages/home/Home";
import NotFound from "./app-contents/pages/notFound/NotFound";

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
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
