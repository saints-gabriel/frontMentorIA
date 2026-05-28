import Logo from '../components/Logo.jsx';
import LoginForm from '../components/LoginForm.jsx';
import { useNavigate } from "react-router-dom";
import Button from '../components/Button.jsx'
import styles from './RegisterPage.module.css';

const RegisterPage = () => {
  const navigate = useNavigate();

  const handleRegister = async ({ nome, email, password }) => {
    console.log('Register:', { nome, email, password });
  };

  const handleCreateAccount = () => {
    console.log('Criar conta');
  };

  const handleLoginAccount = () => {
    navigate('/login');
  };

  return (
    <div className={styles.page}>
      <div className={styles.card}>
        {/* Logo — placeholder até o dev adicionar a imagem real */}
        <div className={styles.logoSection}>
          <Logo />
        </div>

        <h1 className={styles.heading}>
          Crie sua conta para entrar na plataforma
        </h1>

        <LoginForm
          onRegister={handleRegister}
          onCreateAccount={handleCreateAccount}
        />

        <Button
        onClick={handleLoginAccount}>
          Já tem uma conta? Entre!
        </Button>
      </div>
    </div>
  );
};

export default RegisterPage;
