import React from 'react';
import { InputField } from '../components/InputField';
import styles from '../styles/LoginForm.module.css';

export const LoginForm = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Collect form data
    const form = e.target;
    const formData = new FormData(form);


    // Display the key/value pairs
    for (var pair of formData.entries())
    {
    console.log(pair[0]+ ', '+ pair[1]); 
    }
    try {
      // Send the form data to the server
      const response = await fetch('http://localhost:5000/api/submit', {
        method: 'POST',
        body: formData,
      });

      // Check the server response
      if (response.ok) {
        const data = await response.json();
        console.log('Form submitted successfully:', data);
      } else {
        console.error('Error submitting form:', response.statusText);
      }
    } catch (error) {
      console.error('Network error:', error);
    }
  };


  return (
    <main className={styles.loginContainer}>
      <div className={styles.formWrapper}>
        <div className={styles.contentWrapper}>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/eacea02d161c6313a230d93f8ac8af830a57c784304b18f53569b7eb321289ab?placeholderIfAbsent=true&apiKey=5903daf91f7a4a1096d1d46ef291cb79"
            className={styles.logo}
            alt="CareLink logo"
          />
          <h1 className={styles.title}>CareLink</h1>
          <p className={styles.subtitle}>
            Conectando Você à Saúde, Onde e Quando Precisar
          </p>
          
          <form onSubmit={handleSubmit} className={styles.form}>
            <InputField
              label="Nome"
              id="fullName"
              placeholder="Nome Completo"
            />
            <InputField
              label="Senha"
              id="password"
              type="password"
              placeholder="Senha"
            />
            
            <a href="#" className={styles.forgotPassword}>
              Esqueceu sua senha?
            </a>
            
            <button type="submit" className={styles.submitButton}>
              <span>Entrar</span>
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/15fdd6c445e84f0ec2360f5cca18d4c5f8850db595d378f7916082a97e115148?placeholderIfAbsent=true&apiKey=5903daf91f7a4a1096d1d46ef291cb79"
                className={styles.buttonIcon}
                alt=""
              />
            </button>
          </form>
          
          <p className={styles.signupText}>
            <span className={styles.signupLabel}>Não tem conta?</span>
            {" "}
            <a href="#" className={styles.signupLink}>Cadastre-se</a>
          </p>
        </div>
      </div>
    </main>
  );
};