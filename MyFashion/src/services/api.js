// src/services/api.js
import axios from 'axios';

const API_URL = 'https://example.com/api/products'; // Replace with your API URL

export const fetchProducts = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error('Error fetching products:', error);
    throw error;
  }
};
