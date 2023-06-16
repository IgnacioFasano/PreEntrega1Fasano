import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from "../CartWidget/CartWidget"

const NavBar = () => {
return (

    <Navbar bg="primary" variant="dark">
        <Container>
            <Navbar.Brand href="#home">Mi Ecommerce</Navbar.Brand>
            <Nav className="me-auto">
                <Nav.Link href="#home">Celulares</Nav.Link>
                <Nav.Link href="#features">Tablets</Nav.Link>
                <Nav.Link href="#pricing">Notebooks</Nav.Link>
            </Nav>
        </Container>
        <CartWidget />
    </Navbar>
      )
          
}
<CartWidget/>

export default NavBar