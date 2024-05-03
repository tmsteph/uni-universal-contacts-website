import React from 'react';
import './App.css'; // Ensure your CSS is properly linked
import UniLogo from './Uni_Logo.webp'; // Make sure the logo is in the src folder

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={UniLogo} alt="Uni Contacts Logo" className="App-logo" style={{ animation: 'none' }}/>
        <h1>Welcome to Uni Contacts</h1>
        <p>Connect anywhere with ease.</p>
      </header>
      <section className="Features">
        <h2>Features</h2>
        <ul>
          <li>Manage and interact with contacts from Gmail</li>
          <li>Send to or from any interface seamlessly</li>
          <li>Intuitive and user-friendly design</li>
        </ul>
      </section>
    </div>
  );
}

export default App;

