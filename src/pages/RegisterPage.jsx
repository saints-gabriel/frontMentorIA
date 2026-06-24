import Logo from '../components/Logo.jsx';
import RegisterForm from '../components/RegisterForm.jsx';
import { useNavigate } from 'react-router-dom';
import Button from '../components/Button.jsx';
import { register } from '../services/authService.js';
import styles from './RegisterPage.module.css';

const RegisterPage = () => {
  const navigate = useNavigate();

  const handleRegister = async ({ nome, email, password }) => {
    try {
      const data = await register({ nome, email, password });
      if (data.token) {
        localStorage.setItem('authToken', data.token);
      }
      navigate('/home');
    } catch (error) {
      console.error('Erro ao registrar:', error);
      alert(error.message || 'Não foi possível criar a conta.');
    }
  };

  const handleLoginAccount = () => {
    navigate('/login');
  };

  return (
    <div className={styles.page}>
      <div className={styles.card}>
        <div className={styles.logoSection}>
          <Logo />
        </div>

        <h1 className={styles.heading}>
          Crie sua conta para entrar na plataforma
        </h1>

        <RegisterForm onRegister={handleRegister} />

        <Button onClick={handleLoginAccount}>
          Já tem uma conta? Entre!
        </Button>
      </div>
    </div>
  );
};

export default RegisterPage;
