import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import './globals.css';
import './fonts.css';

//Components import - niet weg!!
import Navbar from "./components/svg/Navbar";
import Header from './components/Header';
import Footer from './components/Footer';
import PageWrapper from "./components/PageWrapper";

//Pages imports
import Motm from './pages/Motm';
import LandingPage from './pages/LandingPage';
import Youtube from './pages/Youtube';

  //Blog imports
  import Blog from './pages/Blog';
  import Create from './pages/Create';
  import Update from './pages/Update';
  import Detail from './pages/Detail';

import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <PageWrapper>
      <Header />
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/Motm" element={<Motm />} />
          <Route path="/Youtube" element={<Youtube />} />
          <Route path="/Blog" element={<Blog />} />
          <Route path="/Blog/Create" element={<Create />} />
          <Route path="/Blog/Update" element={<Update />} />
          <Route path="/Blog/Detail" element={<Detail />} />
        </Routes>
      </BrowserRouter>
      <Footer/>
    </PageWrapper>
  </React.StrictMode>
);

reportWebVitals(console.log);
