import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function ProductForm({ onSuccess, productToEdit, onCancel }) {
  const [product, setProduct] = useState({ name: '', description: '', price: '' });
  const [errors, setErrors] = useState({});
  const [backendErrors, setBackendErrors] = useState([]);

  useEffect(() => {
    if (productToEdit) setProduct(productToEdit);
  }, [productToEdit]);

  const validate = () => {
    const errs = {};
    if (!product.name.trim()) errs.name = "Le nom est obligatoire";
    if (product.price === '' || isNaN(product.price) || Number(product.price) < 0)
      errs.price = "Le prix doit être un nombre positif ou nul";
    return errs;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      setBackendErrors([]);
      return;
    }

    try {
      if (product.id) {
        await axios.put(`http://localhost:8080/api/products/${product.id}`, product);
      } else {
        await axios.post("http://localhost:8080/api/products", product);
      }
      setErrors({});
      setBackendErrors([]);
      onSuccess();
    } catch (err) {
      if (err.response?.status === 400) {
        const errorData = err.response.data;
        if (errorData.errors) {
          setBackendErrors(errorData.errors);
        } else {
          setBackendErrors(["Erreur de validation."]);
        }
      } else {
        setBackendErrors(["Erreur serveur."]);
        console.error(err);
      }
    }
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <h2>{product.id ? "Modifier" : "Ajouter"} un produit</h2>

      {backendErrors.length > 0 && (
        <div className="backend-error">
          <ul>
            {backendErrors.map((e, i) => (
              <li key={i}>{e}</li>
            ))}
          </ul>
        </div>
      )}

      <label>
        Nom:
        <input
          type="text"
          value={product.name}
          onChange={(e) => setProduct({ ...product, name: e.target.value })}
        />
        {errors.name && <span className="error">{errors.name}</span>}
      </label>

      <label>
        Description:
        <textarea
          value={product.description || ''}
          onChange={(e) => setProduct({ ...product, description: e.target.value })}
        />
      </label>

      <label>
        Prix:
        <input
          type="number"
          step="0.01"
          value={product.price}
          onChange={(e) => setProduct({ ...product, price: e.target.value })}
        />
        {errors.price && <span className="error">{errors.price}</span>}
      </label>

      <div className="form-buttons">
        <button type="submit">{product.id ? "Enregistrer" : "Ajouter"}</button>
        {product.id && <button type="button" onClick={onCancel}>Annuler</button>}
      </div>
    </form>
  );
}
