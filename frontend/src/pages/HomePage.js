import React, { useEffect } from 'react';
import ProductList from '../components/ProductList';

export default function HomePage() {
  useEffect(() => {
    document.title = "Liste des Produits";
  }, []);

  return (
    <div>
      <h1>Liste des produits</h1>
      <ProductList />
    </div>
  );
}
