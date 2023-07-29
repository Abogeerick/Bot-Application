import React from "react";
import { Link } from "react-router-dom";
import "../styles.css";

function YourBotArmy({ army, releaseBot }) {
  return (
    <div>
      <h2>Your Bot Army</h2>
      <ul>
        {army.map((bot) => (
          <li key={bot.id}>
            {bot.name} - {bot.type}
            <button onClick={() => releaseBot(bot.id)}>Release</button>
            <img src={bot.avatar_url} alt={`Avatar of ${bot.name}`} />
          </li>
        ))}
      </ul>
      <Link to="/">Back to Bot Collection</Link>
    </div>
  );
}

export default YourBotArmy;
