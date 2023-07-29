// components/BotSpecs.js
import React from "react";
import { Link } from "react-router-dom";
import "../styles.css";

function BotSpecs({ bot, enlistBot }) {
  return (
    <div>
      <h2>Bot Details</h2>
      <h3>{bot.name}</h3>
      <p>Type: {bot.type}</p>
      <p>Health: {bot.health}</p>
      <p>Damage: {bot.damage}</p>
      <p>Armor: {bot.armor}</p>
      <p>Bot Class: {bot.bot_class}</p>
      <p>Catchphrase: {bot.catchphrase}</p>
      <img src={bot.avatar_url} alt={`Avatar of ${bot.name}`} />
      <button onClick={enlistBot}>Enlist</button>
      <Link to="/">Back to Bot Collection</Link>
    </div>
  );
}

export default BotSpecs;
