import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function NavBarComponent() {
    return (
        <Navbar expand="lg" className="bg-body-tertiary" sticky="top">
            <Container fluid className='lg:px-20'>
                <Navbar.Brand href="#" className='font-action'>[Website Name]</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="flex-grow-1 pe-3 justify-content-center "
                        style={{ maxHeight: '300px' }}
                        navbarScroll
                    >
                        <Nav.Link className='uppercase' href="#action1">Home</Nav.Link>
                        <Nav.Link className='uppercase' href="#action2">Catalogues</Nav.Link>
                        <NavDropdown title="PRODUCTS" id="navbarScrollingDropdown">
                            <NavDropdown.Item className='px-3 py-2 hover:text-green-500 transition-all ease-out' href="#action3">Kitchen Wall Tiles</NavDropdown.Item>
                            <NavDropdown.Item className='px-3 py-2 hover:text-green-500 transition-all ease-out' href="#action3">Kitchen Floor Tiles</NavDropdown.Item>
                            <NavDropdown.Item className='px-3 py-2 hover:text-green-500 transition-all ease-out' href="#action4">Bathroom Wall Tiles</NavDropdown.Item>
                            <NavDropdown.Item className='px-3 py-2 hover:text-green-500 transition-all ease-out' href="#action4">Bathroom Floor  Tiles</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link className='uppercase' href="#action2">Where to buy</Nav.Link>
                    </Nav>
                    <div className="d-flex">
                        <button className='uppercase px-3 py-2 bg-green-500 text-white font-medium text-sm'>Find your tile</button>
                    </div>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBarComponent;