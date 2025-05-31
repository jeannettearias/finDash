import '../styles/App.scss';
import Header from './layout/Header';
import Dashboard from './dashboards/dashboard';
import SideBar from './layout/SIdeBar';
import Footer from './layout/Footer';
import React from 'react';


function App() {
  return (
    <main className='main'>
      <Header />

      <div className='side-bar-container'>
        <SideBar />
      </div>
      <div className='dashboard-container'>
        <Dashboard />
      </div>

      <Footer />
    </main>

  )
}
export default App;
