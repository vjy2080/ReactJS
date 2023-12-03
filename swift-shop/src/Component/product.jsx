import { Card, Col, Row } from 'react-bootstrap';
import Container from 'react-bootstrap/esm/Container';
import './product.css'
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { addItem } from '../redux/slices/cartSlice';

const ProductPage = () => {
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('https://fakestoreapi.com/products');
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);


  return (
    <div>
      <Container className='my-3'>
        <Row xs={1} md={4} className="g-4">
          {products.map(product => (

            <Col key={product.id}>
              <Card>
                <Card.Img className='cardImg' variant="top" src={product.image} alt={product.title} />
                <Card.Body>
                  <Card.Title>{product.title}</Card.Title>
                  <Card.Text>
                    {product.description}
                  </Card.Text>
                  <p>Price: ${product.price}</p>
                  <button className='btn btn-primary'
                    onClick={e => dispatch(addItem({ name: product.title, price: product.price }))}
                    variant="primary">Add to cart</button>{' '}
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default ProductPage;
