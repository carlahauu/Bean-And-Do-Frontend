# Bean & Do Frontend

This is the **frontend** for the Bean & Do productivity app, built with **React.js**. It interacts with a separate Spring Boot backend, which handles data storage and API operations.

> Note: This repository contains only the frontend. The backend is hosted separately in another repository.

## Features

- View and manage task lists
- Create, update, and delete tasks
- Designed according to a Figma mockup for clean, intuitive UX
- Uses **Axios** to communicate with the backend API
- Standard Pomodoro timer (25 minute work, 5/10 minute break)

## Getting Started

### Prerequisites

- Node.js >= 18.x
- npm or yarn
- A running instance of the backend (Spring Boot app)

### Installation

1. Clone this repository:
git clone https://github.com/YOUR_USERNAME/Bean-And-Do-Frontend.git

cd Bean-And-Do-Frontend

2. Install Dependencies
npm install
or 
yarn install

4. Configure the backend URL
Create a .env file in the root:
Ex: VITE_BACKEND_URL=http://localhost:8080

5. Run
npm run dev
or 
yarn dev

