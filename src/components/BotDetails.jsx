// src/components/BotDetails.js
import React from "react";

function BotDetails({ match, history, deleteBot }) {
  const botId = match.params.id;

  const handleDelete = async () => {
    await deleteBot(botId);
    history.push("/");
  };

  return (
    <div>
      <h2>Bot Details</h2>
      {/* Display detailed information about the bot */}
      {/* Implement a delete button here */}
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
}

export default BotDetails;
