import Button from "react-bootstrap/esm/Button";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";
import Form from "react-bootstrap/Form";

export default function CadastroContent() {
    return (
        <>
            <Form id="cadastro" className="m-auto">
                <Row className="m-0">
                    <Col lg={6} className="pe-3">
                        <div id="title" className="d-flex align-items-center">
                            <i class="bi bi-person-fill-add"></i>
                            <h2 className="m-0">Cadastro</h2>
                        </div>
                        <div id="inputs">
                            <div className="div-input">
                                <Form.Label className="ms-2">Nome Completo</Form.Label>
                                <Form.Control type="text" autoComplete="off" id="nome-completo"></Form.Control>
                            </div>
                            <div className="d-flex align-items-center div-input">
                                <div>
                                    <Form.Label className="ms-2">Nome de Usuário</Form.Label>
                                    <Form.Control type="text" autoComplete="off" id="nome-usuário"></Form.Control>
                                </div>
                                <div>
                                    <Form.Label id="label-celular">Celular</Form.Label>
                                    <Form.Control type="text" autoComplete="off" id="celular"></Form.Control>
                                </div>
                            </div>
                            <div className="div-input">
                                <Form.Label className="ms-2">Senha</Form.Label>
                                <Form.Control type="password" autoComplete="off" id="senha"></Form.Control>
                            </div>
                            <div className="div-input">
                                <Form.Label className="ms-2">Confirme sua Senha</Form.Label>
                                <Form.Control type="password" autoComplete="off" id="confirma-senha"></Form.Control>
                            </div>
                        </div>
                    </Col>
                    <Col lg={6} className="ps-3">
                        <div id="title" className="d-flex align-items-center">
                        <i class="bi bi-house-add-fill"></i>
                            <h2 className="m-0">Endereço</h2>
                        </div>
                        <div id="inputs">
                            <div className="div-input">
                                <Form.Label className="ms-2">Rua</Form.Label>
                                <Form.Control type="text" autoComplete="off" id="rua"></Form.Control>
                            </div>
                            <div className="d-flex align-items-center div-input">
                                <div>
                                    <Form.Label className="ms-2">Bairro</Form.Label>
                                    <Form.Control type="text" autoComplete="off" id="bairro"></Form.Control>
                                </div>
                                <div>
                                    <Form.Label id="label-celular">Cidade</Form.Label>
                                    <Form.Control type="text" autoComplete="off" id="cidade"></Form.Control>
                                </div>
                                <div>
                                    <Form.Label id="label-celular">Estado</Form.Label>
                                    <Form.Select id="estado">
                                        <option value="1">SP</option>
                                        <option value="2">AC</option>
                                        <option value="3">AL</option>
                                        <option value="4">AP</option>
                                        <option value="5">AM</option>
                                        <option value="6">BA</option>
                                        <option value="7">CE</option>
                                        <option value="8">DF</option>
                                        <option value="9">ES</option>
                                        <option value="10">GO</option>
                                        <option value="11">MA</option>
                                        <option value="12">MT</option>
                                        <option value="13">MS</option>
                                        <option value="14">MG</option>
                                        <option value="15">PA</option>
                                        <option value="16">PB</option>
                                        <option value="17">PB</option>
                                        <option value="18">PE</option>
                                        <option value="19">PI</option>
                                        <option value="20">RJ</option>
                                        <option value="21">RN</option>
                                        <option value="22">RS</option>
                                        <option value="23">RO</option>
                                        <option value="24">RR</option>
                                        <option value="25">SC</option>
                                        <option value="26">SE</option>
                                        <option value="27">TO</option>
                                    </Form.Select>
                                </div>
                            </div>
                            <div className="div-input">
                                <Form.Label className="ms-2">CEP</Form.Label>
                                <Form.Control type="password" autoComplete="off" id="cep"></Form.Control>
                            </div>
                            <div className="div-input text-end">
                                <Button id="cadastrar">Cadastrar-se</Button>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Form>
        </>
    );
}