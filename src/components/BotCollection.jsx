// components/BotCollection.js
import React, { useState } from "react";
import { Link } from "react-router-dom";
import BotSpecs from "./BotSpecs";
import SortBar from "./SortBar"; // Import the SortBar component
import "../styles.css";

function BotCollection({ bots, enlistBot }) {
  const [selectedBot, setSelectedBot] = useState(null);
  const [filteredBots, setFilteredBots] = useState(bots);

  const handleBotCardClick = (bot) => {
    setSelectedBot(bot);
  };

  const handleEnlistBot = (bot) => {
    enlistBot(bot);
    setSelectedBot(null);
  };

  const handleSort = (field) => {
    const sortedBots = [...filteredBots].sort((a, b) => a[field] - b[field]);
    setFilteredBots(sortedBots);
  };

  return (
    <div>
      {selectedBot ? (
        <BotSpecs bot={selectedBot} enlistBot={() => handleEnlistBot(selectedBot)} />
      ) : (
        <>
          <SortBar onSort={handleSort} /> {/* Add the SortBar component */}
          <h2>Available Bots</h2>
          <ul>
            {filteredBots.map((bot) => (
              <li key={bot.id} onClick={() => handleBotCardClick(bot)}>
                <Link to={`/bots/${bot.id}`}>
                  {bot.name} - {bot.type}
                </Link>
                <button onClick={() => handleEnlistBot(bot)}>Enlist</button>
                <img src={bot.avatar_url} alt={`Avatar of ${bot.name}`} />
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
}

export default BotCollection;
