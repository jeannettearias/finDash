import '../styles/App.scss';
import Header from './layout/Header';
import Dashboard from './dashboards/Dashboard';
import SideBar from './layout/SideBar';
import React from 'react';



function App() {
  return (
    <>
      <main className='Dashboard'>
        <Header />
        <SideBar />
        <Dashboard />

      </main>
    </>
  )
}

export default App;
