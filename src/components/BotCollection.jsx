// src/components/BotCollection.js
import React from "react";
import { Link } from "react-router-dom";

function BotCollection({ bots, enlistBot }) {
  return (
    <div>
      <h2>Available Bots</h2>
      <ul>
        {bots.map((bot) => (
          <li key={bot.id}>
            <Link to={`/bots/${bot.id}`}>
              {bot.name} - {bot.type}
            </Link>
            <button onClick={() => enlistBot(bot)}>Enlist</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BotCollection;
