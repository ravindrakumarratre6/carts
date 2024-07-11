import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import CartList from './CartList';
import { addCart } from '../redux/reducer/cartSlice';
import { Container, Button, TextField, Box } from '@mui/material';

const OrderPage = () => {
  const dispatch = useDispatch();
  const [newCart, setNewCart] = useState({
    products: [],
    totalProducts: 0,
    total: 0,
    discountedTotal: 0,
  });

  const handleAdd = () => {
    dispatch(addCart(newCart));
  };

  return (
    <Container>
      <Box mt={4}>
        <TextField
          label="Total Products"
          value={newCart.totalProducts}
          onChange={(e) => setNewCart({ ...newCart, totalProducts: Number(e.target.value) })}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Total"
          value={newCart.total}
          onChange={(e) => setNewCart({ ...newCart, total: Number(e.target.value) })}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Discounted Total"
          value={newCart.discountedTotal}
          onChange={(e) => setNewCart({ ...newCart, discountedTotal: Number(e.target.value) })}
          fullWidth
          margin="normal"
        />
        <Button variant="contained" color="primary" onClick={handleAdd}>
          Add Cart
        </Button>
      </Box>
      <CartList />
    </Container>
  );
};

export default OrderPage;
