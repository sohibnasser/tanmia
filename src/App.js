import { HashRouter, Route, Routes } from "react-router-dom";
import ShoppingCartProvider from "./Pages/HomePage/Componant/ShoppingContext/ShoppingContext";
import Home from "./Pages/HomePage/Home";
import ShoppingPage from "./Pages/ShoppingPage/ShoppingPage";
//  import './Design-System/main.css';

function App() {
  return (
    <>
      <ShoppingCartProvider>
        <HashRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/ShoppingPage" element={<ShoppingPage />} />
          </Routes>
        </HashRouter>
      </ShoppingCartProvider>

    
    </>
  );
}

export default App;
