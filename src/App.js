import { HashRouter, Route, Routes } from "react-router-dom";
import Home1 from "./HomePage/Componant/Home1/Home1";
import PageHome from "./HomePage/Home";

function App() {
  return (
    <>

       

     
        <HashRouter>
          <Routes>
            <Route path="/" element={<PageHome />} />
            <Route path="/Home1" element={<Home1 />} />
          </Routes>
        </HashRouter>
      

    
    </>
  );
}

export default App;
