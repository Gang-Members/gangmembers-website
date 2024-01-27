import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import './index.css';

//Components import - Misschien weg?
import Header from './components/Header';
import Footer from './components/Footer';

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
    <Header/>
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
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log);
