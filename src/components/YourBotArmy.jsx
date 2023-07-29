// src/components/YourBotArmy.js
import React from "react";

function YourBotArmy({ army, releaseBot }) {
  return (
    <div>
      <h2>Your Bot Army</h2>
      <ul>
        {army.map((bot) => (
          <li key={bot.id}>
            {bot.name} - {bot.type}
            <button onClick={() => releaseBot(bot.id)}>Release</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default YourBotArmy;
