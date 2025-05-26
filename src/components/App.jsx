import '../styles/App.scss';
import Header from './layout/Header';
import Dashboard from './dashboards/Dashboard';
import React from 'react';

function App() {
  return (
    <>
      <main className='main-container'>
        <Header />
        <body>
          <Dashboard />
        </body>

      </main>
    </>
  )
}

export default App;
