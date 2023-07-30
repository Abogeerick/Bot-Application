# Bot Application

A simple React application that allows users to view a collection of bots, enlist bots into their army, and manage their bot army. This project was built to practice React development skills and demonstrate how to interact with an API to fetch and manipulate data.

## Table of Contents

- [Requirements](#requirements)
- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [Technologies] (#Technologies Used)
- [License](#license)
- [Author](#author)

## Requirements

To run this project, you need the following:

- Git installed on your machine to clone the repository.
- Code editor (e.g., VS Code) for viewing and editing the code.
- Node.js installed to install and manage dependencies.
- JSON Server installed globally for simulating a server.

## Installation

1. Clone this repository by running the following command in your terminal:
   ```bash
   $ git clone https://github.com/Abogeerick/Bot-Application.git
2. Navigate to the cloned repository folder:
```bash
    $ cd Bot-Application
```
3. Install project dependencies by running:
```bash
    $ npm install
```

## Usage

1. Ensure the JSON Server is running by executing the following command in your terminal:
```bash
     $ json-server --watch db.json
```
2. Start the React development server by running:
```bash
     $ npm run dev
```

## Features
As a user, you can:

1. View a collection of bots with their details (name, type, health, damage, armor, bot class, and catchphrase).
2. Enlist a bot into your army by clicking on the "Enlist" button on the bot's card.
3. View your bot army and release bots from your army.
4. Delete a bot from the bot collection (Note: The deletion is not persisted to the backend in core deliverables).
5. Sort bots by various fields such as health, damage, and armor.
6. Filter bots by their bot class using the filter bar.
7. Click on a bot's card to view detailed information about the bot.

## Technologies Used

1. React.js: Frontend JavaScript library for building user interfaces.
2. React Router: For handling routing within the application.
3. Axios: For making HTTP requests to the backend API.
4. CSS: For styling the components and creating a visually appealing user interface.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Author
This project was created by Erick Aboge. Feel free to reach out if you have any questions or feedback regarding this project.

