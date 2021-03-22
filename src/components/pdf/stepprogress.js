import React, { useState } from "react";
import { Document, Page } from "react-pdf";
import { ProgressBar,Step } from "react-step-progress-bar";
import StepProgressBar from 'react-step-progress';
//import 'react-step-progress/dist/index.css';
import "../../styles.css";


export default function StepProgress(props) {
    const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  const {pdf,value} =props;

  console.log("a");
  console.log(value);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
        console.log(numPages);
  }
  console.log(pageNumber);
  
  function changePage(offset) {
    setPageNumber(prevPageNumber => prevPageNumber + offset);
  }


  function step2Validator(

  ) {
    
  }
  
  function step3Validator() {

  }
  
  function onFormSubmit() {
      
  }
  

return (
    <>
     <StepProgressBar
  startingStep={0}
  onSubmit={onFormSubmit}
  steps={[
    {
     
    },
    {
     
      validator: step2Validator
    },
    {
      
      validator: step3Validator
    }
  ]}
/>;  
          </>
  );
}
