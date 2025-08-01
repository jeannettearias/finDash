import '../styles/App.scss';
import Header from './layout/Header';
import SideBar from './layout/SIdeBar';
import Body from './body/Body';
import React from 'react';
import { useEffect, useState } from 'react';
import jsonCards from '../data/cards.json';
import jsonCategories from '../data/categories.json';
import jsonWallets from '../data/wallets.json';

function App() {
  // CONECT TO THE BACKEND API/JSON HERE
  const [cards, setCards] = useState([]);
  const [categories, setCategories] = useState([]);
  const [wallets, setWallets] = useState([]);
  const [users, setUsers] = useState([]);
  const [notifications, setNotifications] = useState([]);
  ///////////////////// data definition ////////////////////

  useEffect(() => {
    // Fetch data from an API or JSON file
    setCards(jsonCards);
    setWallets(jsonWallets);

  }, []);

  useEffect(() => {
    // Fetch categories data from an API or JSON file
    setCategories(jsonCategories);

  }, []);

  return (

    <main className="Dashboard">

      <aside className="side-bar">
        <SideBar />
      </aside>

      <section className="main-content">
        <header className="header">
          <Header />
        </header>

        <section className="body">
          <Body cards={cards}
            categories={categories}
            wallets={wallets}
          />
        </section>
      </section>
    </main>
  )
}
export default App;

// Layout structure for the application
/*
+----------------+----------------------------+
|                |          Header            |
|   SideBar      +----------------------------+
|                |          Body              |
+----------------+----------------------------+
*/

///////////////////// data definition ////////////////////
// cards
// transactions movements
// categories
// wallets
// users
// notifications
//////////////////////////////////////////////////////////


