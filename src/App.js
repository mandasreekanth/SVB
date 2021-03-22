import React, { Component } from "react";
import SinglePagePDFViewer from "./components/pdf/single-page";
import AllPages from "./components/pdf/Allpages";
import samplePDF from "./sample.pdf";
import {Button} from 'react-bootstrap';
import "./styles.css";
import * as ReactBootStrap from "react-bootstrap";
import {
    BrowserRouter as Router,
    Link
  } from "react-router-dom";

const styles = {
  color: "blue",
      backgroundColor: "black",
      padding: "50px",
      fontFamily: "Arial"
};

export  class App extends React.Component {
render(){
  return (
    <React.Fragment>
      
    <div className="">
      <h4>All Pages</h4>
      <div >
        <AllPages pdf={samplePDF} />
      </div>
    </div>
    <div  style={styles}><i class="ion-social-github"></i>&nbsp;&nbsp;Sample Footer</div>
 
 
    
     </React.Fragment>
  );
}
}
export default App
