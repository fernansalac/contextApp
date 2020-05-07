import React from 'react';
import Navbar2 from './components/Navbar2';
import ThemeContextProvider from './contexts/ThemeContext';
import ThemeToggle2 from './components/ThemeToggle2';
import AuthContextProvider from './contexts/AuthContext';
import BookList2 from './components/BookList2';
import BookContextProvider from './contexts/BookContext';

function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
        <AuthContextProvider>
          <Navbar2 />
          <BookContextProvider>
            <BookList2 />
          </BookContextProvider>
          <ThemeToggle2 />
        </AuthContextProvider>
      </ThemeContextProvider>
    </div>
  );
}

export default App;
