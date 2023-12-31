import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const Cards = ({data}) => {
  
  return (
     <Card style={{ width: '18rem'}}>
      <Card.Img variant="top" style={{ height: '13rem',objectFit:'cover'}} src={data.thumbnail} />
      <Card.Body>
        <Card.Title>{data.title}</Card.Title>
        <Card.Text>
          {data.brand}
        </Card.Text>
        <Button variant="warning">
        <Link to={`/${data.id}`} className='link'>see more</Link>      
        </Button>
      </Card.Body>
    </Card>
  )
}

export default Cards