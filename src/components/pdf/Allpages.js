import React, { Component, useState } from "react";
import { Document, Page } from "react-pdf";
import {Button} from 'react-bootstrap';
import "../../styles.css";


const styles = {
  color: "blue",
      backgroundColor: "black",
      padding: "50px",
      fontFamily: "Arial"
};


export class AllPages extends Component {
  constructor(props) {
    super();    
    this.pdf = props.pdf;
    this.state = {
      pages:"0",
      isDisabled: null
 }
}
onDocumentLoadSuccess=( {numPages} )=> {
  this.setState({
     pages:numPages,
  });     
}
paneDidMount = (node) => {    
  if(node) {      
    node.addEventListener("scroll", this.handleScroll.bind(this));      
  }
}

handleScroll = (event) => {    
  var node = event.target;
  const bottom = node.scrollHeight - node.scrollTop === node.clientHeight;
  if (bottom) {      
    console.log("BOTTOM REACHED:",bottom); 
    this.setState({ isDisabled: "present" });
    console.log(this.state.isDisabled)
  }    
}


  render(){
    return(
 <React.Fragment>   
   { <div class="_53Ji7 "><ul class="_1Lo2h "><li class="_2Jtxm _35Ago "><span class="_2kL0S"></span><div class="_1hzhf "></div></li><li class="_2Jtxm _35Ago "><span class="_2kL0S"></span><div class="_1hzhf "></div></li><li class="_2Jtxm _35Ago  _35Ago  _35Ago  _35Ago  "><span class="_2kL0S"></span></li></ul><div ></div></div> }

   <div className="all-page-container">
   <div ref={this.paneDidMount}  style={{overflowY: 'scroll', maxHeight: '400px'}}>
      <Document
      file={this.pdf}
      options={{ workerSrc: "/pdf.worker.js" }}
      onLoadSuccess={this.onDocumentLoadSuccess}
    >
      {Array.from(new Array(this.state.pages), (el, index) => (
        <Page key={`page_${index + 1}`} pageNumber={index + 1} />
      ))}
    </Document>
    </div>
    </div>
    <div>

    </div>
     
    {!this.state.isDisabled ? null : <Button style={{styles}} outline >Previous</Button>}         
     
    <div  style={styles}><i class="ion-social-github"></i>&nbsp;&nbsp;Sample Footer</div>
      </React.Fragment>  
    )
  
  }
}

export default AllPages
