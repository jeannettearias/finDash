import '../styles/App.scss';
import Header from './layout/Header';
import SideBar from './layout/SIdeBar';
import Body from './body/body';
import React from 'react';


function App() {
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

