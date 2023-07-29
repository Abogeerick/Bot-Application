import React from "react";
import { Link } from "react-router-dom";
import "../styles.css";

function YourBotArmy({ army, releaseBot }) {
  const handleReleaseBot = (botId) => {
    // Call the releaseBot function passed from the parent component (App) to release the bot from the army
    releaseBot(botId);
  };

  const handleDeleteBot = (botId) => {
    // Call the releaseBot function passed from the parent component (App) to delete the bot
    releaseBot(botId); // This will release the bot from the army (frontend)
    // Now, make an API call to delete the bot from the backend
    fetch(`http://localhost:3000/bots/${botId}`, {
      method: "DELETE",
    })
      .then((response) => {
        if (response.ok) {
          console.log("Bot deleted successfully from backend.");
        } else {
          throw new Error("Failed to delete bot from backend.");
        }
      })
      .catch((error) => {
        console.error("Error deleting bot from backend: ", error);
      });
  };

  return (
    <div>
      <h2>Your Bot Army</h2>
      <ul>
        {army.map((bot) => (
          <li key={bot.id}>
            {bot.name} - {bot.type}
            <button onClick={() => handleReleaseBot(bot.id)}>Release</button>
            <button
              onClick={() => handleDeleteBot(bot.id)}
              style={{ color: "red" }}
            >
              X
            </button>
            <img src={bot.avatar_url} alt={`Avatar of ${bot.name}`} />
          </li>
        ))}
      </ul>
      <Link to="/">Back to Bot Collection</Link>
    </div>
  );
}

export default YourBotArmy;
