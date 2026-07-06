import Logo from '../components/Logo.jsx';
import LoginForm from '../components/LoginForm.jsx';
import Button from '../components/Button.jsx';
import { useNavigate } from 'react-router-dom';
import { login } from '../services/authService.js';
import styles from './LoginPage.module.css';

const LoginPage = () => {
  const navigate = useNavigate();

  const handleLogin = async ({ email, password }) => {
    try {
      const data = await login({ email, password });
        localStorage.setItem('authToken', data.jwtoken);
        localStorage.setItem('nome', data.usuario.nome);
        localStorage.setItem('email', data.usuario.email);
      navigate('/home');
    } catch (error) {
      console.error('Erro ao entrar:', error);
      alert(error.message || 'Não foi possível fazer login.');
    }
  };

  const handleForgotPassword = () => {
    console.log('Esqueci a senha');
  };

  const handleCreateAccount = () => {
    navigate('/register');
  };

  return (
    <div className={styles.page}>
      <div className={styles.card}>
        <div className={styles.logoSection}>
          <Logo />
        </div>

        <h1 className={styles.heading}>
          Faça seu login para entrar na plataforma
        </h1>

        <LoginForm
          onLogin={handleLogin}
          onForgotPassword={handleForgotPassword}
          onCreateAccount={handleCreateAccount}
        />

        <Button className={styles.button}
                type="button"
                onClick={handleCreateAccount}
              >
                Criar conta
              </Button>
      </div>
    </div>
  );
};

export default LoginPage;