import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCarts, setPage, deleteCart } from '../redux/reducer/cartSlice';
import { Container, Typography, Grid, Card, CardContent, Button, Pagination, Box } from '@mui/material';

const CartList = () => {
  const dispatch = useDispatch();
  const carts = useSelector((state) => state.carts.carts);
  const cartStatus = useSelector((state) => state.carts.status);
  const error = useSelector((state) => state.carts.error);
  const currentPage = useSelector((state) => state.carts.currentPage);

  useEffect(() => {
    dispatch(fetchCarts(currentPage));
  }, [currentPage, dispatch]);

  const handlePageChange = (event, value) => {
    dispatch(setPage(value));
  };

  const handleDelete = (id) => {
    dispatch(deleteCart(id));
  };

  let content;

  if (cartStatus === 'loading') {
    content = <div>Loading...</div>;
  } else if (cartStatus === 'succeeded') {
    content = carts.map((cart) => (
      <Grid item xs={12} sm={6} md={4} key={cart.id}>
        <Card>
          <CardContent>
            <Typography variant="h6">Cart ID: {cart.id}</Typography>
            <Typography>Total Products: {cart.totalProducts}</Typography>
            <Typography>Total: ${cart.total}</Typography>
            <Typography>Discounted Total: ${cart.discountedTotal}</Typography>
            <Button variant="contained" color="secondary" onClick={() => handleDelete(cart.id)}>
              Delete
            </Button>
          </CardContent>
        </Card>
      </Grid>
    ));
  } else if (cartStatus === 'failed') {
    content = <div>{error}</div>;
  }

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Carts
      </Typography>
      <Grid container spacing={3}>
        {content}
      </Grid>
      <Box mt={4} display="flex" justifyContent="center">
        <Pagination
          count={10} // Assuming there are 100 carts and 10 pages
          page={currentPage}
          onChange={handlePageChange}
          color="primary"
        />
      </Box>
    </Container>
  );
};

export default CartList;
