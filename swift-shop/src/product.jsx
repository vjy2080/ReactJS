import { Card, Col, Row, Button } from 'react-bootstrap';
import Container from 'react-bootstrap/esm/Container';

function ProductPage() {

  const imageUrls = [
    "https://smartslider3.com/wp-content/uploads/slider/cache/8f51fb62cd90a12da0786d5270593022/jackets.webp",
    "https://smartslider3.com/wp-content/uploads/slider/cache/82a85dc7bbb6919f259c6dffab1c4d55/shorts.webp",
    "https://smartslider3.com/wp-content/uploads/slider/cache/5134d39b32fa966987d4682fc0e2eac4/shoes.webp",
    "https://smartslider3.com/wp-content/uploads/slider/cache/a2d7f7f41d80d085ed7a971371e0302b/hats.webp",
    "https://smartslider3.com/wp-content/uploads/slider/cache/a0ad4f003ababb1377e2ea3c551fb11a/blazers.webp",
    "https://smartslider3.com/wp-content/uploads/slider/cache/0896c8aa6ffdcc095f1ffa62a1ccf737/jeans.webp",
    "https://smartslider3.com/wp-content/uploads/slider/cache/ed0501b089bd683020290c30c4f66a38/shirts.webp",
    "https://smartslider3.com/wp-content/uploads/slider/cache/2ae37435211837c7f7b077675cfed461/sunglasses.webp",
    "https://smartslider3.com/wp-content/uploads/slider/cache/a0ad4f003ababb1377e2ea3c551fb11a/blazers.webp",
    "https://smartslider3.com/wp-content/uploads/slider/cache/0896c8aa6ffdcc095f1ffa62a1ccf737/jeans.webp",
    "https://smartslider3.com/wp-content/uploads/slider/cache/ed0501b089bd683020290c30c4f66a38/shirts.webp",
    "https://smartslider3.com/wp-content/uploads/slider/cache/2ae37435211837c7f7b077675cfed461/sunglasses.webp"

  ];



  return (
    <Container>
      <Row xs={1} md={4} className="g-4">
        {imageUrls.map((imageUrl, idx) => (
          <Col key={idx}>
            <Card>
              <Card.Img variant="top" src={imageUrl} />
              <Card.Body>
                <Card.Title>Shop-Item {idx + 1}</Card.Title>
                <Card.Text>
                  Decscription of {idx + 1},<br /> Found more detail of {idx + 1} click below link.
                </Card.Text>
                <div className="btn  w-100">
                  <Button variant="primary"><a href="#" className='text-decoration-none text-light'>Click Here</a></Button>{' '}
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}



export default ProductPage;