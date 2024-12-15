import React from 'react';
import { InputField } from '../components/InputField';
import styles from '../styles/LoginForm.module.css';
import { useNavigate } from 'react-router-dom';

export const RegisterForm = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Collect form data
    const form = e.target;
    const formData = new FormData(form);

    const isDoctor = !!formData.get('isDoctor').name; // Checks if a file name exists
    formData.append('isDoctor', isDoctor);


    // Display the key/value pairs
    for (var pair of formData.entries())
    {
    console.log(pair[0]+ ', '+ pair[1]); 
    }
    try {
      // Send the form data to the server
      const response = await fetch('http://localhost:5000/register', {
        method: 'POST',
        body: formData,
      });

      // Check the server response
      if (response.ok) {
        navigate("/login");
      } else if(response.status == 409) {
        alert("Nome já existente");
      } else {
        console.error('Error submitting form:', response.statusText);
      }
    } catch (error) {
      console.error('Network error:', error);
    }
  };

  const navigate = useNavigate();

  return (
    <main className={styles.loginContainer}>
      <div className={styles.formWrapper}>
        <div className={styles.contentWrapper}>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/eacea02d161c6313a230d93f8ac8af830a57c784304b18f53569b7eb321289ab?placeholderIfAbsent=true&apiKey=5903daf91f7a4a1096d1d46ef291cb79"
            className={styles.logo}
            alt="CareLink logo"
            onClick={() => { navigate("/")}}
          />
          <h1 className={styles.title}>CareLink</h1>
          <p className={styles.subtitle}>
            Formulário de registo
          </p>
          
          <form onSubmit={handleSubmit} className={styles.form}>
            <InputField
              label="Nome"
              id="fullName"
              type="text"
              placeholder="Nome Completo"
            />
            <InputField
              label="Senha"
              id="password"
              type="password"
              placeholder="Senha"
            />
            <InputField
              label="Certificado Medico"
              id="isDoctor"
              type="file"
            />
            
          <button type="submit" className={styles.submitButton}>
            <span>Registar</span>
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/15fdd6c445e84f0ec2360f5cca18d4c5f8850db595d378f7916082a97e115148?placeholderIfAbsent=true&apiKey=5903daf91f7a4a1096d1d46ef291cb79"
              className={styles.buttonIcon}
              alt=""
            />
          </button>
          </form>
          
          <p className={styles.signupText}>
            <span className={styles.signupLabel}>Já tem conta?</span>
            {" "}
            <a onClick={()=>{ navigate("/login")}} className={styles.signupLink}>voltar</a>
          </p>
        </div>
      </div>
    </main>
  );
};