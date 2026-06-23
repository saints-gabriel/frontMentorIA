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
      if (data.token) {
        localStorage.setItem('authToken', data.token);
      }
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

        <button
                type="button"
                className={styles.forgotLink}
                onClick={handleCreateAccount}
              >
                Criar conta
              </button>
      </div>
    </div>
  );
};

export default LoginPage;