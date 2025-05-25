import '../styles/App.scss';
import Header from './layout/Header';
import Dashboard from './dashboards/Dashboard';
import React from 'react';

function App() {
  return (
    <>
      <main>
        <section className='header'>
          <Header />
        </section>
        <section>
          <Dashboard />
        </section>
        <section className='footer'>
          {/* Footer content goes here */}
        </section>

      </main>
    </>
  )
}

export default App;
