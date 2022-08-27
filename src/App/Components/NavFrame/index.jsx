import React, { Fragment } from 'react';
import Header from './Components/Header';
import FooterMenu from './Components/FooterMenu';
import './style.css';

 export default function NavFrame({ children }) {
   return (

      <div className="nav-frame">
        <Header />
        <div className="render-div">{ children }</div>
        <FooterMenu />
      </div>

    );
 };
