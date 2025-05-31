import '../styles/App.scss';
import Header from './layout/Header';
import Dashboard from './dashboards/dashboard';
import SideBar from './layout/SIdeBar';

import React from 'react';


function App() {
  return (
    <main className='main'>

      <section className='bar'>
        <SideBar />
        <Header />
      </section>

      <section className='dashboard-container'>
        <Dashboard />
      </section>

    </main>
  )
}
export default App;
