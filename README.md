# Minutentag Beer — Front-End

This is the front-end application for the **Minutentag Beer** project, built with **React** and **Vite**. It connects to the back-end server to display beer products, manage user interactions, and perform operations like listing, filtering, and viewing product details.

## 🔮 Future Features

Here are some features planned for future implementation:

- **Cart Feature**: Add a shopping cart functionality to allow users to add, remove, and manage beer products. State management could be handled using **Context API** or **Jotai**, though performance considerations will be taken into account before finalizing the approach.

- **Login and Signup Pages**: Implement authentication pages to allow users to create accounts and log in securely.

- **Order History**: Provide users with a feature to view their past orders, including details like order date, items purchased, and total cost.

## 🧩 Project Structure

This front-end complements the [Minutentag Beer Server](https://github.com/pedrojose06/minutentag-server). It communicates with the server via **GraphQL** to fetch data such as beer listings and user information.

## 🚀 Getting Started

### Prerequisites

- Node.js (version 18 or above)
- npm or yarn

### Installation

```bash
git clone https://github.com/pedrojose06/minutentag-beer
cd minutentag-beer
npm install
```

### .Env File

Rename the **.env.example** to **.env** file and verify that the VITE_API_URL variable is correctly set to point to the back-end server.

### Running the App

```bash
npm run dev
```

Then open [http://localhost:5173](http://localhost:5173) in your browser.

## 🔗 Connecting to the Server

Make sure the [Minutentag Beer Server](https://github.com/pedrojose06/minutentag-server) is running at:

```
http://localhost:4000/graphql
```

You can configure the GraphQL endpoint inside your front-end code if needed (e.g., in a `.env` file or service file).

## 🧪 Example Usage

The app will display a list of beers fetched via GraphQL. You can:

- View a list of beers
- Click on a beer to see details

## 🛠 Technologies Used

- [React](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [GraphQL](https://graphql.org/)
- [Apollo Client](https://www.apollographql.com/docs/react/)

## 📦 Build

To create a production build:

```bash
npm run build
```

Then preview it locally:

```bash
npm run preview
```

## 📄 License

This project is licensed under the MIT License.