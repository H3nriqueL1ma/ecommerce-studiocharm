/* eslint-disable import/no-anonymous-default-export */
import ContentHome from './EcommerceContentHome';
import Menu from './MenuEcommerce';
import MenuLoginCadastro from './MenuLoginCadastro';
import Rodape from './RodapeEcommerce';
import '../styles/queries.css';
import '../styles/style-form-login-cadastro.css';
import LoginContent from './LoginContent';
import CadastroContent from './CadastroContent';
import RecuperarSenhaContent from './RecuperarSenhaContent';
import MenuMinhaConta from './MenuMinhaConta';
import MinhaContaContent from './MinhaContaContent';

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

export function RecuperarSenha() {
    return (
        <>
            <MenuLoginCadastro />
            <RecuperarSenhaContent />
        </>
    );
}

export function MinhaConta() {
    return (
        <>
            <MenuMinhaConta />
            <MinhaContaContent />
            <Rodape />
        </>
    );
}

export default { Home, Login, Cadastro, RecuperarSenha }