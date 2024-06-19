import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export default function RecuperarSenhaContent() {
    return (
        <>
            <Form id="login" className="m-auto">
                <div id="title" className="d-flex align-items-center">
                    <i class="bi bi-shield-lock-fill"></i>
                    <h2 className="m-0">Redefinição de senha</h2>
                </div>
                <div id="inputs">
                    <div className="div-input">
                        <Form.Label className="ms-2">Insira seu e-mail cadastrado</Form.Label>
                        <Form.Control type="text" autoComplete="off" id="email-cadastrado"></Form.Control>
                    </div>
                </div>
                <div>
                    <Button id="link-recuperar">Enviar link de recuperação</Button>
                </div>
            </Form>
        </>
    );
}