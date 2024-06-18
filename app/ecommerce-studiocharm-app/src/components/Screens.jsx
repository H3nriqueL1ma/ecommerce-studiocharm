/* eslint-disable import/no-anonymous-default-export */
import ContentHome from './EcommerceContentHome';
import Menu from './MenuEcommerce';
import MenuLoginCadastro from './MenuLoginCadastro';
import Rodape from './RodapeEcommerce';
import '../styles/queries.css';
import '../styles/style-form-login-cadastro.css';
import LoginContent from './LoginContent';
import CadastroContent from './CadastroContent';

export function Home() {
    return (
        <>
            <Menu />
            <ContentHome />
            <Rodape />
        </>
    );
}

export function Login() {
    return (
        <>
            <MenuLoginCadastro />
            <LoginContent />
        </>
    );
}

export function Cadastro() {
    return (
        <>
            <MenuLoginCadastro />
            <CadastroContent />
        </>
    );
}

export default { Home, Login, Cadastro }