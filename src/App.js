import React from 'react';
import Navbar2 from './components/Navbar2';
import ThemeContextProvider from './contexts/ThemeContext';
import ThemeToggle2 from './components/ThemeToggle2';
import AuthContextProvider from './contexts/AuthContext';
import BookList2 from './components/BookList2';

function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
        <AuthContextProvider>
          <Navbar2 />
          <BookList2 />
          <ThemeToggle2 />
        </AuthContextProvider>
      </ThemeContextProvider>
    </div>
  );
}

export default App;
