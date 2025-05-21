import '../styles/App.scss';
import Header from './layout/Header';
import React from 'react';

function App() {
  return (
    <>
      <main>
        <section className='dashboard'>

          <Header />
          <div className='dashboard__content'>
            <h1>Dashboard</h1>
            <p>Welcome to the dashboard!</p>
          </div>

        </section>
      </main>
    </>
  )
}

export default App;
