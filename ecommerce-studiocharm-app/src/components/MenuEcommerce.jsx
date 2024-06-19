/* eslint-disable jsx-a11y/anchor-is-valid */
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import '../styles/style-menu.css';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function Menu() {
    const [showMenuCanvas, setShowMenuCanvas] = useState(false);
    const [showPesquisaCanvas, setShowPesquisaCanvas] = useState(false);

    const handleCloseMenuCanvas = () => setShowMenuCanvas(false);
    const handleShowMenuCanvas = () => setShowMenuCanvas(true);
    const handleClosePesquisaCanvas = () => setShowPesquisaCanvas(false);
    const handleShowPesquisaCanvas = () => setShowPesquisaCanvas(true);

    useEffect(() => {
        const divSearch = document.querySelector("#div-search");
        const rowMenu = document.querySelector("#row-menu");
        if (window.innerWidth >= 1245 && window.innerWidth <= 1269) {
            rowMenu.classList.remove("justify-content-between");
            rowMenu.classList.add("justify-content-around");
            divSearch.classList.remove("col-lg-5");
            divSearch.classList.add("col-lg-6");
        } else if (window.innerWidth >= 1270) {
            rowMenu.classList.remove("justify-content-around");
            rowMenu.classList.add("justify-content-between");
        } else {
            rowMenu.classList.remove("justify-content-between");
            rowMenu.classList.add("justify-content-around");
            divSearch.classList.remove("col-lg-6");
            divSearch.classList.add("col-lg-5");
        }

        const handleWindowResize = () => {
            window.addEventListener("resize", () => {
                if (window.innerWidth >= 1245 && window.innerWidth <= 1269) {
                    rowMenu.classList.remove("justify-content-between");
                    rowMenu.classList.add("justify-content-around");
                    divSearch.classList.remove("col-lg-5");
                    divSearch.classList.add("col-lg-6");
                } else if (window.innerWidth >= 1270) {
                    rowMenu.classList.remove("justify-content-around");
                    rowMenu.classList.add("justify-content-between");
                } else {
                    rowMenu.classList.remove("justify-content-between");
                    rowMenu.classList.add("justify-content-around");
                    divSearch.classList.remove("col-lg-6");
                    divSearch.classList.add("col-lg-5");
                }
            });
        }

        window.addEventListener("resize", handleWindowResize);

        return () => {
            window.removeEventListener("resize", handleWindowResize);
        };
    }, []);

    return (
        <>
            <Navbar id="menu" expand="xl" className="bg-body-tertiary">
                <Container fluid>
                    <Navbar.Brand>
                        <img id="logo" src="Logo.png" alt="logo" />
                    </Navbar.Brand>

                    <div className="d-flex me-2">
                        <button class="button-toggler navbar-toggler" type="button" onClick={handleShowPesquisaCanvas}>
                            <i class="bi bi-search"></i>
                        </button>

                        <button class="button-toggler navbar-toggler" type="button" onClick={handleShowMenuCanvas}>
                            <span class="navbar-toggler-icon"></span>
                        </button>

                        <a id="carrinho" class="button-toggler navbar-toggler" href="#">
                            <i class="bi bi-basket"></i>
                        </a>
                    </div>

                    <Navbar.Collapse id="navbarSupportedContent">
                        <Row id="row-menu" className="align-items-center">
                            <Col lg={5} id="div-search" className="column">
                                <Form id="search-form" className="d-flex align-items-center">
                                    <Form.Control id="search" className="me-2" type="search" placeholder="O que você procura hoje?" aria-label="Search" autoComplete="off" />
                                    <Button id="submit-search" className="btn-outline-success" type="submit">
                                        <i class="bi bi-search"></i>
                                    </Button>
                                </Form>
                            </Col>

                            <Col lg={6} id="div-items" className="column column-items-menu">
                                <Nav className="me-auto mb-2 mb-lg-0">
                                    <Nav.Item className="d-flex align-items-center">
                                        <Link id="atendimento" className="d-flex align-items-center" to="/atendimento">
                                            <i class="bi bi-chat-right-text-fill me-3"></i>
                                            <p class="m-0">Atendimento</p>
                                        </Link>
                                    </Nav.Item>
                                    <Nav.Item className="d-flex align-items-center">
                                        <Link id="sign-in" className="d-flex align-items-center" to="/login">
                                            <i class="bi bi-person-circle me-2"></i>
                                            <p class="m-0">Entrar</p>
                                        </Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link id="carrinho" className="d-flex align-items-center">
                                            <i class="bi bi-basket"></i>
                                        </Nav.Link>
                                    </Nav.Item>
                                </Nav>  
                            </Col>
                        </Row>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            <Offcanvas show={showMenuCanvas} onHide={handleCloseMenuCanvas} className="offcanvas-width" scroll={true}>
                <Offcanvas.Header closeButton>
                    <div className="d-flex align-items-center">
                        <i id="icon-sign-in-canvas" class="bi bi-person-circle me-2"></i>
                        <div id="content-canvas-sign">
                            <Offcanvas.Title>Olá, visitante</Offcanvas.Title>
                            <Link id="sign-in" class="d-flex align-items-center text-decoration-none" to="/login">
                                <p class="m-0">Entrar</p>
                            </Link>
                        </div>
                    </div>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <Row id="row-menu" className="align-items-center justify-content-around">
                        <Col lg={6} className="cloumn column-items-menu">
                            <Nav.Item className="d-flex align-items-center">
                                <Link id="atendimento" className="d-flex align-items-center" to="/atendimento">
                                    <i class="bi bi-chat-right-text-fill me-2"></i>
                                    <p class="m-0 canvas-text">Atendimento</p>
                                </Link>
                            </Nav.Item>
                            <Nav.Item className="d-flex align-items-center">
                                <Link id="sign-in" className="d-flex align-items-center" to="/minha-conta">
                                    <i class="bi bi-person-circle me-2"></i>
                                    <p class="m-0 canvas-text">Minha Conta</p>
                                </Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Link id="meus-pedidos" className="d-flex align-items-center" to="/usuario-conta/pedidos">
                                    <i class="bi bi-box-seam-fill me-2"></i>
                                    <p class="m-0 canvas-text">Meus pedidos</p>
                                </Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Link id="favoritos" className="d-flex align-items-center" to="/usuario-conta/favoritos">
                                    <i class="bi bi-bag-heart-fill me-2"></i>
                                    <p class="m-0 canvas-text">Favoritos</p>
                                </Link>
                            </Nav.Item>
                        </Col>
                    </Row>
                </Offcanvas.Body>
            </Offcanvas>

            <Offcanvas show={showPesquisaCanvas} onHide={handleClosePesquisaCanvas} className="offcanvas-width-pesquisa" scroll={true}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Pesquisar</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <Row id="row-menu" className="align-items-center justify-content-center">
                        <div id="div-search" className="column">
                            <Form id="search-form" className="d-flex align-items-center" role="search">
                                <Form.Control id="search" className="me-2" type="search" placeholder="O que você procura hoje?" autoComplete="off" />
                                <Button id="submit-search" className="btn-outline-success" type="submit">
                                    <i class="bi bi-search"></i>
                                </Button>
                            </Form>
                        </div>
                    </Row>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
}