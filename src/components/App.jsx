import '../styles/App.scss';
import Header from './layout/Header';
import SideBar from './layout/SIdeBar';
import Body from './body/body';
import React from 'react';


function App() {
  // CONECT TO THE BACKEND API/JSON HERE

  ///////////////////// data definition ////////////////////
  // cards
  const cards = [
    {
      id: 1,
      title: "Card 1",
      description: "Description for Card 1",
    },
    {
      id: 2,
      title: "Card 2",
      description: "Description for Card 2",
    },
    {
      id: 3,
      title: "Card 3",
      description: "Description for Card 3",
    },
  ];














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
          <Body />
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

