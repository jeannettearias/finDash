import '../styles/App.scss';
import Header from './layout/Header';
import Dashboard from './dashboards/dashboard';
import SideBar from './layout/SIdeBar';
import React from 'react';


function App() {
  return (
    <main className='main'>

      <section className='bar'>

        <Header />
      </section>

      <section className='content'>
        <SideBar />

        <section className='dashboard'>
          <Dashboard />
        </section>
      </section>

    </main>
  )
}
export default App;
