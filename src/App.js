import React from "react";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import HomePage from "./component/pages/HomePage";
import Header from "./component/common/header/header"
import Footer from "./component/common/footer/footer"
import Layout from "./component/common/Layout";

function App() {
  return (
    <div>

     <BrowserRouter>
        <Header/>
          <Layout>
            <Routes> 
              <Route path='/' element={<HomePage />}/>
            </Routes> 
          </Layout>
        <Footer/>
      </BrowserRouter>

    </div>
  );
}

export default App;
