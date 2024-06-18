import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";
import '../styles/style-rodapé.css';

export default function Rodape() {
    return (
        <>
            <Row id="rodapé" className="m-0 mb-3 justify-content-center">
                <div id="salao-e-contato" className="d-flex align-items-center justify-content-around">
                    <Row>
                        <Col xl={6} id="salao" class="d-flex align-items-center me-5">
                            <div id="logo">
                                <img src="Logo-Rodape.png" alt="logo-rodape" />
                            </div>
                            <div id="text-salao">
                                <p class="m-0">Transforme sua beleza no Studio Charm! Aqui, acreditamos que cada pessoa merece se sentir única e especial. Oferecemos uma variedade de serviços personalizados, desde cortes de cabelo e coloração até tratamentos estéticos e de bem-estar.</p>
                            </div>
                        </Col>

                        <Col xl={5} id="contato" className="d-flex align-items-center">
                            <div>
                                <h4 class="m-0">Nosso Whatsapp:</h4>
                                <div class="d-flex align-items-center">
                                    <i class="bi bi-whatsapp me-2"></i>
                                    <p class="m-0">(11) 2629-1731</p>
                                </div>
                            </div>
                            <div>
                                <h4 class="m-0">Nosso E-mail:</h4>
                                <div class="d-flex align-items-center">
                                    <i class="bi bi bi-envelope-fill me-2"></i>
                                    <p class="m-0">studiocharmoficial@gmail.com</p>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>

                <div id="pagamento">
                    <div>
                        <h4 class="m-0">Formas de Pagamento:</h4>
                        <div>
                            <img src="metodos-pagamento.png" alt="metodos-pagamento" />
                        </div>
                    </div>
                </div>
            </Row>
        </>
    ); 
}