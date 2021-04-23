import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import axios from 'axios';
import {
  Row,
  Col,
  Image,
  Card,
  Button,
  ListGroup,
  ListGroupItem,
} from 'react-bootstrap';

import Rating from '../components/Rating';

const ProductScreen = ({ match }) => {
  const [product, setProduct] = useState({});
  useEffect(() => {
    const fetchProduct = async () => {
      const { data } = await axios.get(`/api/products/${match.params.id}`);
      setProduct(data);
    };
    fetchProduct();
  }, [match]);

  console.log(product);
  return (
    <>
      <Link to='/' className='btn btn-light my-3'>
        Go Back
      </Link>
      <Row>
        <Col md={6}>
          <Image src={product.image} alt={product.name} fluid />
        </Col>
        <Col md={3}>
          <ListGroup className='list-group-flush'>
            <ListGroupItem>
              <h3>{product.name}</h3>
            </ListGroupItem>
            <ListGroupItem>
              <Rating
                value={product.rating}
                text={` ${product.numReviews} Reviews`}
              />
            </ListGroupItem>
            <ListGroupItem>
              <h5>Price : $ {product.price}</h5>{' '}
            </ListGroupItem>
            <ListGroupItem>
              {' '}
              <h5>Description </h5>
              <br />
              {product.description}{' '}
            </ListGroupItem>
          </ListGroup>
        </Col>

        <Col md={3}>
          <Card>
            <ListGroup variant='flush'>
              <ListGroupItem>
                <Row>
                  <Col>Price :</Col>
                  <Col>$ {product.price}</Col>
                </Row>
              </ListGroupItem>
              <ListGroupItem>
                <Row>
                  <Col>Status :</Col>
                  <Col>
                    {' '}
                    {product.countInStock ? 'In Stock ' : 'Out Of Stock'}
                  </Col>
                </Row>
              </ListGroupItem>

              <ListGroupItem>
                {' '}
                <Button
                  className='  btn-block'
                  type='btn'
                  disabled={product.countInStock === 0}
                >
                  {' '}
                  Add To Cart
                </Button>{' '}
              </ListGroupItem>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default ProductScreen;
