import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import BotCollection from "./components/BotCollection";
import YourBotArmy from "./components/YourBotArmy";
import BotDetails from "./components/BotDetails";

function App() {
  const [bots, setBots] = useState([]);
  const [army, setArmy] = useState([]);

  useEffect(() => {
    fetchBots();
  }, []);

  const fetchBots = () => {
    fetch("http://localhost:3000/bots")
      .then((response) => response.json())
      .then((bots) => setBots(bots))
      .catch((error) => console.error("Error fetching bot data: ", error));
  };

  const enlistBot = (bot) => {
    if (!army.some((armyBot) => armyBot.id === bot.id)) {
      setArmy([...army, bot]);
    }
  };

  const releaseBot = (botId) => {
    setArmy(army.filter((bot) => bot.id !== botId));
  };

  const deleteBot = (botId) => {
    fetch(`http://localhost:3000/bots/${botId}`, {
      method: "DELETE",
    })
      .then((response) => {
        if (response.ok) {
          setBots(bots.filter((bot) => bot.id !== botId));
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
        <Navbar />
        <h1>Bot Battlr</h1>
        <Routes>
          <Route
            path="/"
            element={<BotCollection bots={bots} enlistBot={enlistBot} />}
          />
          <Route
            path="/your-bot-army"
            element={<YourBotArmy army={army} releaseBot={releaseBot} />}
          />
          <Route
            path="/bots/:id"
            element={<BotDetails bots={bots} deleteBot={deleteBot} />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
