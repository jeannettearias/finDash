import '../styles/App.scss';
import Header from './layout/Header';
import React from 'react';

function App() {
  return (
    <>
      <main>
        <section className='dashboard'>
          <Header />
        </section>
        <section className='content'>

        </section>
      </main>
    </>
  )
}

export default App;
