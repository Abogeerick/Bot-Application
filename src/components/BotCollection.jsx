import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import BotSpecs from "./BotSpecs";
import SortBar from "./SortBar";
import FilterBar from "./FilterBar";
import "../styles.css";

function BotCollection({ bots, enlistBot, filterBotsByClass }) {
  const [selectedBot, setSelectedBot] = useState(null);
  const [filteredBots, setFilteredBots] = useState(bots);

  const handleBotCardClick = (bot) => {
    setSelectedBot(bot);
  };

  const handleEnlistBot = () => {
    if (selectedBot) {
      enlistBot(selectedBot);
      setSelectedBot(null);
    }
  };

  const handleSort = (field) => {
    const sortedBots = [...filteredBots].sort((a, b) => a[field] - b[field]);
    setFilteredBots(sortedBots);
  };

  const handleFilterByClass = (selectedClasses) => {
    if (selectedClasses.length === 0) {
      setFilteredBots(bots); // If no class is selected, show all bots
    } else {
      const filteredByClass = bots.filter((bot) => selectedClasses.includes(bot.bot_class));
      setFilteredBots(filteredByClass);
    }
  };

  useEffect(() => {
    setFilteredBots(bots);
  }, [bots]);

  return (
    <div>
      {selectedBot ? (
        <BotSpecs bot={selectedBot} enlistBot={handleEnlistBot} />
      ) : (
        <>
          <FilterBar onFilter={handleFilterByClass} />
          <SortBar onSort={handleSort} />
          <h2>Available Bots</h2>
          <ul className="bot-grid">
            {filteredBots.map((bot) => (
              <li key={bot.id} className="bot-card" onClick={() => handleBotCardClick(bot)}>
                <Link to={`/bot-specs/${bot.id}`} className="bot-link">
                  <img src={bot.avatar_url} alt={`Avatar of ${bot.name}`} />
                  <div className="bot-info">
                    <div className="bot-name">{bot.name}</div>
                    <div className="bot-type">{bot.type}</div>
                  </div>
                </Link>
                <button onClick={() => handleEnlistBot(bot)}>Enlist</button>
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
}

export default BotCollection;