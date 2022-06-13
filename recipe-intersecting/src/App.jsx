import React from 'react';
import './App.css';
import Header from './components/Header';
import ContentContainer from './components/ContentContainer';
import Footer from './components/Footer';

const App = () => {
  return (
  <>
     <Header/>
    <main>
      
     <hr />
     <ContentContainer />
    </main>
     <Footer />
    </>
  );
}

export default App;

