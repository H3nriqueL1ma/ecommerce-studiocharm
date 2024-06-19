import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

export default function LoginContent() {
    return (
        <>
            <Form id="login" className="m-auto">
                <div className="text-end">
                   <Link to="/cadastro">Não tem cadastro?</Link> 
                </div>
                <div className="input-login">
                    <Form.Label className="ms-2">E-mail</Form.Label>
                    <Form.Control type="email" autoComplete="off"></Form.Control>
                </div>
                <div className="input-login">
                    <Form.Label className="ms-2">Senha</Form.Label>
                    <div className="d-flex align-items-center">
                        <div>
                            <Form.Control id="senha" type="password" autoComplete="off"></Form.Control>
                        </div>
                        <div>
                            <Button id="entrar">Entrar</Button>
                        </div>
                    </div>
                </div>
                <div className="text-start">
                   <Link to="/recuperar-senha">Esqueceu a senha?</Link> 
                </div>
            </Form>
        </>
    );
}