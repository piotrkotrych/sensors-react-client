import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Logo from '../../assets/logo_small.png'
import './navbar.css'

function NavbarMain() {
  return (
    <Navbar expand="lg" className='bg-brand-light fixed-top'>
      <Container fluid>
        <Navbar.Brand href="#home">
          <img src={Logo} alt="sensor.ai" className='logo-small' />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className='navbar-light navbar-brand-colors' />
        <Navbar.Collapse id="basic-navbar-nav" className='justify-content-center'>
          <Nav>
            <Nav.Link href="#home" className='navbar-light navbar-brand-colors-menu'>Home</Nav.Link>
            <Nav.Link href="#home" className='navbar-light navbar-brand-colors-menu'>About us</Nav.Link>
            <Nav.Link href="#home" className='navbar-light navbar-brand-colors-menu'>Our sensors</Nav.Link>
            <Nav.Link href="#home" className='navbar-light navbar-brand-colors-menu'>Pricing</Nav.Link>
            <Nav.Link href="#home" className='navbar-light navbar-brand-colors-menu'>API</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavbarMain