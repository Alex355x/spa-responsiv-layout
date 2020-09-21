import React from "react";
import Header from "./components/header/Header";
import About from "./components/about/About";
import Relationships from "./components/relationships/Relationships";
import Users from "./components/users/Users";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className='main__container'>
      <Header />
      <About />
      <Relationships />
      <Users /> 
      <Footer />
    </div>
  );
}

export default App;
