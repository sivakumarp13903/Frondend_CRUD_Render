import { useState } from "react";
import './App.css';
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import Name from "./components/Name/Name";
import Parent from "./components/Props/Parent";
import Hooks from "./components/Hooks/Hooks";
import UseContext from "./components/Hooks/UseContext";
import ContextProvider from "./ContextProvider/ContextProvider";
import ButtonMain from "./pages/Home/ButtonMain";


function App() {

  return (
    <>
   <div>
        {/* <NavBar/>
        <Footer/> */}
        {/* <Name/> */}
        {/* <Parent/> */}
        {/* <Hooks/> */}
        {/* <UseContext/> */}
          <ButtonMain/>
      </div>
    </>
  );
}

export default App;
