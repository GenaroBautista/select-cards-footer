/** @format */
import React from "react";
import "bulma/css/bulma.css";
//import CortanaImage from "./images/cortana.png";
//import siriImage from "./images/siri.jpeg";
import Animal from "./Componet/Attrib/Animal.js";
//import ProfileCard from "./Componet/Attrib/ProfileCard.js ";
import Button from "./Componet/Button/Button.js";

//mport SearchBar from "./Componet/SearchBar";
//import Book from "./Componet/Book/Book";
//import Concep from "./Componet/Book/Conceptos/Concep";

import "./index";
function App() {
  return (
    <div>
      <Animal />
      {/* <section className="hero is-primary">
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
      </div> */}

      <br></br>
      <div>
        <Button purpose="primary" danger outline>
          Click me!
        </Button>
      </div>
      <div>
        <Button danger outline>
          Buy Now!
        </Button>
      </div>
      <div>
        <Button warning>See Deal!</Button>
      </div>
      <div>
        <Button secundary outline>
          Hide Ads!
        </Button>
      </div>
      <div>
        <Button secundary rounded>
          Something!
        </Button>
      </div>

      {/* <br></br>
       <SearchBar />
      <Book /> 
       <Concep /> */}
    </div>
  );
}

export default App;
