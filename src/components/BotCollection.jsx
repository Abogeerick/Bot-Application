import React, { useState } from "react";
import { Link } from "react-router-dom";
import BotSpecs from "./BotSpecs";
import SortBar from "./SortBar"; // Import the SortBar component
import "../styles.css";

function BotCollection({ bots, enlistBot, sortBots, filterBotsByClass }) {
  const [selectedBot, setSelectedBot] = useState(null);

  const handleBotCardClick = (bot) => {
    setSelectedBot(bot);
  };

  const handleEnlistBot = (bot) => {
    enlistBot(bot);
    setSelectedBot(null);
  };

  return (
    <div>
      {selectedBot ? (
        <BotSpecs bot={selectedBot} enlistBot={() => handleEnlistBot(selectedBot)} />
      ) : (
        <>
          <SortBar onSort={sortBots} />
          <h2>Available Bots</h2>
          <ul>
            {bots.map((bot) => (
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
