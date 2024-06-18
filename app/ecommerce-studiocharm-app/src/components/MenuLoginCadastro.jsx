/* eslint-disable jsx-a11y/anchor-is-valid */
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import '../styles/style-menu.css';

export default function MenuLoginCadastro() {
    return (
        <>
            <Navbar id="menu" expand="xl" className="bg-body-tertiary">
                <Container fluid>
                    <Navbar.Brand>
                        <img id="logo" src="Logo.png" alt="logo" />
                    </Navbar.Brand>
                </Container>
            </Navbar>
        </>
    );
}