
import React from 'react';
import News from './Components/News';

function App() {
  return (
    <div className="App">
      <header className="bg-black text-white p-4">
        <h1 className="text-3xl">Welcome to the News Website</h1>
      </header>
      <main className="p-4">
        <News />
      </main>
    </div>
  );
}

export default App;
