/* eslint-disable jsx-a11y/anchor-is-valid */
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";
import Accordion from 'react-bootstrap/Accordion';
import '../styles/style-content.css';

export default function ContentHome() {
    return (
        <>
            <Row id="text-banner" className="m-0 p-3 ps-5">
                <Col lg={4} className="d-flex align-items-center">
                    <div>
                        <h1>Cosméticos</h1>
                        <p>Nossa linha de cosméticos é rica em ativos hidratantes, antioxidantes e nutrientes essenciais, oferecendo soluções para todas as suas necessidades de beleza. Desde cremes faciais que promovem a renovação celular até maquiagens que realçam sua beleza natural, nossos produtos garantem resultados visíveis e duradouros.</p>
                    </div>
                </Col>
                <Col lg={8} id="img-banner"></Col>
            </Row>

            <Row className="m-0 mt-4">
                <Col lg={4} className="d-flex justify-content-center">
                    <div id="categories" className="p-4">
                        <Accordion alwaysOpen>
                            <Accordion.Item eventKey="0">
                                <Accordion.Header>Categoria</Accordion.Header>
                                <Accordion.Body>
                                    <ul id="lista-categorias" class="list-unstyled">
                                        <li>
                                            <a>Shampoos e Condicionadores</a>
                                        </li>
                                        <li>
                                            <a>Máscaras e Ativadores</a>
                                        </li>
                                        <li>
                                            <a>Finalizadores e Modeladores</a>
                                        </li>
                                        <li>
                                            <a>Tinturas e Colorações</a>
                                        </li>
                                    </ul>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="1">
                                <Accordion.Header>Preço</Accordion.Header>
                                <Accordion.Body>
                                    <ul id="lista-preços" class="list-unstyled">
                                        <li>
                                            <a>Até R$69</a>
                                        </li>
                                        <li>
                                            <a>De R$70 a R$99</a>
                                        </li>
                                        <li>
                                            <a>De R$100 a R$169</a>
                                        </li>
                                        <li>
                                            <a>Acima de R$170</a>
                                        </li>
                                    </ul>
                                </Accordion.Body>
                            </Accordion.Item>

                            <Accordion.Item eventKey="2">
                                <Accordion.Header>Marca</Accordion.Header>
                                <Accordion.Body>
                                    <ul id="lista-marcas" class="list-unstyled">
                                        <li>
                                            <a>Arvensis</a>
                                        </li>
                                    </ul>
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </div>
                </Col>

                <Col lg={8} className="p-4">
                    <div className="card-product">
                        <div id="image" class="text-center">
                            <img src="imagem-produto-teste.webp" alt="imagem-produto" />
                        </div>
                        <div id="title" class="ps-4 pe-4">
                            <h1>ARVENSIS</h1>
                        </div>
                        <div id="description" class="ps-4 pe-4">
                            <p>Arvensis Tec Liss Shampoo 300ml</p>
                        </div>
                        <div id="price" class="ps-4 pe-4">
                            <div class="d-flex align-items-baseline">
                            <h4>R$ 64,19</h4>
                            <h5>no PIX</h5>
                            </div>
                        </div>
                        <div id="price-details" class="ps-4 pe-4">
                            <p>em até 4x de R$16,04 no cartão</p>
                        </div>
                    </div>
                </Col>
            </Row>
        </>
    );
}