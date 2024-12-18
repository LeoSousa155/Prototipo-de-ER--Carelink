import {React, useEffect } from 'react';
import { InputField } from '../components/InputField';
import styles from '../styles/CalendarForm.module.css';
import { useNavigate, useLocation } from 'react-router-dom';
import { Header } from '../components/Header';

export const CalendarForm = () => {
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
      const response = await fetch('http://localhost:5000/calendar/add-event', {
        method: 'POST',
        body: formData,
      });

      // Check the server response
      if (response.ok) {
        const route = await response.json();
        console.log("Rota de login: ", route.path);
        navigate(route.path);
      } 
      else if (response.status == 404 || response.status == 401) {
        alert("Usuário ou senha incorretos");
      } 
      else {
        console.error('Error submitting form:', response.statusText);
      }
    } 
    catch (error) {
      console.error('Network error:', error);
    }
  };

  const navigate = useNavigate();

  return (
    <main className={styles.loginContainer}>
      <Header />
      <div className={styles.formWrapper}>
        <div className={styles.contentWrapper}>
          <p className={styles.subtitle}>
            Adicione um novo evento ao seu calendário
          </p>
          
          <form onSubmit={handleSubmit} className={styles.form}>
            <InputField
              label="Nome do evento"
              id="subject"
              placeholder="Evento"
            />
            <InputField
              label="Data do evento"
              id="date"
              type="date"
            />
            
            <button type="submit" className={styles.submitButton}>
              <span>Submeter</span>
              <img
                src="https://www.svgrepo.com/show/459905/create-note-alt.svg"
                className={styles.buttonIcon}
                alt=""
              />
            </button>
          </form>
          
          <p className={styles.signupText}>
            {" "}
            <a onClick={()=> {navigate("/calendar")}} className={styles.signupLink}>Voltar</a>
          </p>
        </div>
      </div>
    </main>
  );
};