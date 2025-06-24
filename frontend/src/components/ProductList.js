import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function ProductList() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchProducts = async () => {
    try {
      const res = await axios.get("http://localhost:8080/api/products");
      setProducts(res.data);
    } catch (err) {
      console.error("Erreur lors du chargement des produits :", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleDelete = async (id) => {
    const confirm = window.confirm("Voulez-vous vraiment supprimer ce produit ?");
    if (!confirm) return;

    try {
      await axios.delete(`http://localhost:8080/api/products/${id}`);
      fetchProducts(); // refresh list
    } catch (err) {
      console.error("Erreur lors de la suppression :", err);
    }
  };

  if (loading) return <p>Chargement...</p>;

  return (
    <div>
      <table className="styled-table">
        <thead>
          <tr>
            <th>Nom</th>
            <th>Description</th>
            <th>Prix (DH)</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((p) => (
            <tr key={p.id}>
              <td>{p.name}</td>
              <td>{p.description}</td>
              <td>{p.price}</td>
              <td>
                <Link to={`/edit/${p.id}`}>
                  <button>Modifier</button>
                </Link>
                <button onClick={() => handleDelete(p.id)}>Supprimer</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
