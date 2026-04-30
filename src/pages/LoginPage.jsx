import Logo from '../components/Logo.jsx';
import LoginForm from '../components/LoginForm.jsx';
import styles from './LoginPage.module.css';

const LoginPage = () => {
  const handleLogin = async ({ email, password }) => {
    // TODO: integrar com serviço de autenticação
    console.log('Login:', { email, password });
  };

  const handleForgotPassword = () => {
    console.log('Esqueci a senha');
  };

  const handleCreateAccount = () => {
    console.log('Criar conta');
  };

  return (
    <div className={styles.page}>
      <div className={styles.card}>
        {/* Logo — placeholder até o dev adicionar a imagem real */}
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
      </div>
    </div>
  );
};

export default LoginPage;
