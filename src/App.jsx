// src/App.js
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import BotCollection from "./components/BotCollection";
import YourBotArmy from "./components/YourBotArmy";
import BotDetails from "./components/BotDetails";

function App() {
  const [bots, setBots] = useState([]);
  const [army, setArmy] = useState([]);

  useEffect(() => {
    // Fetch bot data from the backend and update the state
    fetchBots();
  }, []);

  const fetchBots = () => {
    fetch("http://localhost:3000/bots")
      .then((response) => response.json())
      .then((bots) => setBots(bots))
      .catch((error) => console.error("Error fetching bot data: ", error));
  };

  const enlistBot = (bot) => {
    // Add the bot to the army state
    setArmy([...army, bot]);
  };

  const releaseBot = (botId) => {
    // Remove the bot from the army state
    setArmy(army.filter((bot) => bot.id !== botId));
  };

  const deleteBot = (botId) => {
    // Remove the bot from the backend and update the army state
    fetch(`http://localhost:3000/bots/${botId}`, {
      method: "DELETE",
    })
      .then((response) => {
        if (response.ok) {
          // Successful deletion from the backend, now release the bot from the army
          releaseBot(botId);
        } else {
          throw new Error("Failed to delete bot.");
        }
      })
      .catch((error) => {
        console.error("Error deleting bot: ", error);
      });
  };

  return (
    <Router>
      <div>
        <h1>Bot Battlr</h1>
        <Route exact path="/" render={() => <BotCollection bots={bots} enlistBot={enlistBot} />} />
        <Route path="/your-bot-army" render={() => <YourBotArmy army={army} releaseBot={releaseBot} />} />
        <Route path="/bots/:id" render={(props) => <BotDetails {...props} deleteBot={deleteBot} />} />
      </div>
    </Router>
  );
}

export default App;