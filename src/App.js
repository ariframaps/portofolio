import { Header } from './components/layout/Header';
import { Home } from './pages/homepage/Home';
import { Footer } from './components/layout/Footer';
import { useEffect, useState } from 'react';
import { CursorsEffect } from './components/others/CursorsEffect';

function App() {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (event) => {
    const { clientX, clientY } = event;
    setCursorPosition({ x: clientX, y: clientY });
  };

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);
  return (
    <div className="App">
      <CursorsEffect cursorPosition={cursorPosition} />
      <Header />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
