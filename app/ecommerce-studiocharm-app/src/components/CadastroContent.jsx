import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";
import { Form } from "react-router-dom";

export default function CadastroContent() {
    return (
        <>
            <Form id="cadastro" className="m-auto">
                <Row>
                    <Col lg={6}>
                        <div id="title-cadastro">
                            
                        </div>
                    </Col>
                    <Col lg={6}>
                        <div id="title-endereco"></div>
                    </Col>
                </Row>
            </Form>
        </>
    );
}