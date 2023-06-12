import React from "react";
import Banner from "../Banner/Banner";

function HappyBanner({ numOfTries }) {

  const numberText = numOfTries > 1 ? `${numOfTries} guesses` : '1 guess'; 

  return (
    <Banner status='happy'>
      <p>
        <strong>Congratulations!</strong> Got it in
        <strong> {numberText}</strong>.
      </p>
    </Banner> 
  );
}

export default HappyBanner;
