import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ProductFormPage from './pages/ProductFormPage';

function App() {
  return (
    <Router>
      <div className="container">
        <nav className="navbar">
          <Link to="/">Produits</Link>
          <Link to="/ajouter">Ajouter</Link>
        </nav>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/ajouter" element={<ProductFormPage />} />
          <Route path="/edit/:id" element={<ProductFormPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
