/** @format */
import React from "react";
import "bulma/css/bulma.css";
import AlexaImage from "./images/alexa.png";
import CortanaImage from "./images/cortana.png";
import siriImage from "./images/siri.jpeg";
import Animal from "./Componet/Animal";
import ProfileCard from "./Componet/ProfileCard.js";

//mport SearchBar from "./Componet/SearchBar";
//import Book from "./Componet/Book/Book";
//import Concep from "./Componet/Book/Conceptos/Concep";

import "./index";
function App() {
  return (
    <div>
      <Animal />
      <section className="hero is-primary">
        <div className="hero-body">
          <p>Personal Digital Assistants</p>
        </div>
      </section>
      <div className="container">
        <section className="section">
          <div className="columns">
            <div className="column is-4">
              <ProfileCard
                title="Alexa"
                handle="@alexa99"
                image={AlexaImage}
                description="Alexa was created by Amazon and helps you buy things,"
              />
            </div>

            <div className="column is-4">
              <ProfileCard
                title="Cortana"
                handle="@cortana77"
                image={CortanaImage}
                description="Cortana was made by Microsoft, Who what is does?"
              />
            </div>

            <div className="column is-4">
              <ProfileCard
                title="Siri"
                handle="@Siri01"
                image={siriImage}
                description="Siri was made bu Apple and is being phased put."
              />
            </div>
          </div>
        </section>
      </div>

      {/* <br></br>
       <SearchBar />
      <Book /> 
       <Concep /> */}
    </div>
  );
}

export default App;
