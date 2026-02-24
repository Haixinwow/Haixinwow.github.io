import { useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

function RootWrapper() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const rootDiv = document.getElementById('root');
    if (rootDiv) {
      if (menuOpen) {
        rootDiv.classList.add('menu-open');
      } else {
        rootDiv.classList.remove('menu-open');
        rootDiv.classList.add('menu-closed')
      }
    }
  }, [menuOpen]);

  return (
    <App menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
  );
}

createRoot(document.getElementById('root')).render(
  <RootWrapper />
);