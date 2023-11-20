import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Header } from './Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Herosection } from './components/Herosection';
import { Cards } from './components/Cards';
import { Benifits } from './components/Benifits';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <Header/>
    <Herosection />
    <Cards/>
    <Benifits/>
  
  </>
    
    
);


