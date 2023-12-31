import { Link } from "react-router-dom"
import Badge from 'react-bootstrap/Badge';
import { useContext } from "react";
import { CartContext } from "../Context/Cartcontext";
const Navbar = () => {
  const {cart} = useContext(CartContext);
  return (
    <nav className="nav">
      <div className="container flex">
        <Link to="/" className="link">Home</Link>
        <Link to="/cart" className="link">
          Cart{' '}
          {cart.length !== 0 && <Badge bg="secondary">{cart.length}</Badge>}
        </Link>
      </div>
    </nav>
  )
}

export default Navbar