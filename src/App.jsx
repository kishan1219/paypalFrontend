import React, { useEffect, useState } from 'react';
import axios from 'axios';
import "./App.css";

import { Card, FAQ, Feedback, Footer, Header, HelpSection, Hero } from "./components";
function App() {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    axios.get('/data.json')
      .then(response => {
        setCards(response.data.cards);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);
  return (
    <>
      <div className="p-1 font-paypal-open">
        <Header />
        <Hero />
        <div className="flex flex-col lg:flex-row justify-center items-center gap-x-10">
      {cards.map((card, index) => (
        <Card key={index} {...card} />
      ))}
    </div>
        <FAQ />
        <HelpSection/>
        <Feedback/>
        <Footer />
      </div>
    </>
  );
}

export default App;
