import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const Crud = () => {
  const [products, setProducts] = useState([]);
  const [form, setForm] = useState({ name: '', price: '', quantity: '' });
  const [editingId, setEditingId] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  const { logout, isLoggedIn } = useAuth();
  const navigate = useNavigate();

  const API_URL = 'http://localhost:5005/api/products';

  useEffect(() => {
    if (!isLoggedIn) {
      navigate('/');
      return;
    }

    fetchProducts();
  }, [isLoggedIn]);

  const fetchProducts = async () => {
    try {
      const res = await axios.get(API_URL);
      setProducts(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.price || !form.quantity) {
      toast.warn('All fields are required');
      return;
    }

    try {
      if (editingId) {
        await axios.put(`${API_URL}/${editingId}`, form);
        toast.success('Product Updated')
      } else {
        await axios.post(API_URL, form);
        toast.success('Product Created')
      }
      setForm({ name: '', price: '', quantity: '' });
      setEditingId(null);
      fetchProducts();
    } catch (err) {
      toast.error('Failed to save product')
      console.error(err);
    }
  };

  const handleEdit = (product) => {
    setForm({ name: product.name, price: product.price, quantity: product.quantity });
    setEditingId(product._id);
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure to delete this product?")) {
      try {
        await axios.delete(`${API_URL}/${id}`);
        toast.info('Product Deleted')
        fetchProducts();
        
      } catch (err) {
        toast.error('Failed to delete product');
        console.error(err);
      }
    }
  };

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="p-6 pt-20 bg-gradient-to-b from-sky-300 px-50">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl text-sky-950 font-bold">Product CRUD</h2>
        <button onClick={handleLogout} className="bg-sky-700 text-white px-4 py-2 rounded hover:bg-sky-800">Logout</button>
      </div>

      <input type="text" placeholder="Search by product name..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} className="w-100 mt-8 mb-4 p-2 border-2 border-sky-900 outline-none focus:border-3 focus:border-sky-600 rounded" />

      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 pt-5 mb-6">
        <input type="text" name="name" placeholder="Product Name" value={form.name} onChange={handleChange} className="flex-1 p-2 border-2 border-sky-900 outline-none focus:border-3 focus:border-sky-600 rounded" />
        <input type="number" name="price" placeholder="Price" value={form.price} onChange={handleChange} className="flex-1 p-2 border-2 border-sky-900 outline-none focus:border-3 focus:border-sky-600 rounded"/>
        <input type="number" name="quantity" placeholder="Quantity" value={form.quantity} onChange={handleChange} className="flex-1 p-2 border-2 border-sky-900 outline-none focus:border-3 focus:border-sky-600 rounded" />
        <button type="submit" className="bg-sky-600 text-white px-4 py-2 hover:bg-sky-700 rounded"> {editingId ? 'Update' : 'Create'} </button>
      </form>

      

      <table className="w-full border-2 mt-8  text-left">
        <thead>
          <tr className="text-center text-sky-950">
            <th className="p-2 border-2">No</th>
            <th className="p-2 border-2">Name</th>
            <th className="p-2 border-2">Price</th>
            <th className="p-2 border-2">Quantity</th>
            <th className="p-2 border-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product, index) => (
              <tr key={product._id}>
                <td className="p-2 border-2">{index + 1}</td>
                <td className="p-2 border-2">{product.name}</td>
                <td className="p-2 border-2">{product.price}</td>
                <td className="p-2 border-2">{product.quantity}</td>
                <td className="p-2 border-2  space-x-2">
                  <div className='flex justify-center gap-5'>
                    <button onClick={() => handleEdit(product)} className="px-3 py-1 justify-center bg-sky-600 text-white rounded"> Edit </button>
                    <button onClick={() => handleDelete(product._id)} className="px-3 py-1 bg-red-600 text-white rounded" > Delete </button>
                  </div>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4" className="text-center py-4">No products found</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Crud;