import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import ProductForm from '../components/ProductForm';

export default function ProductFormPage() {
  const { id } = useParams();
  const [productToEdit, setProductToEdit] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    document.title = id ? "Modifier Produit" : "Ajouter Produit";
    if (id) {
      axios.get(`http://localhost:8080/api/products/${id}`)
        .then((res) => setProductToEdit(res.data));
    }
  }, [id]);

  const handleSuccess = () => {
    navigate('/');
  };

  return (
    <ProductForm
      productToEdit={productToEdit}
      onSuccess={handleSuccess}
      onCancel={() => navigate('/')}
    />
  );
}
