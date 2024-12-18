import React, { useState } from 'react';
import stylesCare from '../../styles/CarePlanDr.module.css';
import styles from '../../styles/ChatWindow.module.css';


export function CarePlanDr({patient}) {
  const [isEditable, setIsEditable] = useState(false);

  // State for "Descrição" and "Medicação"
  const [descricao, setDescricao] = useState(
    "Deverá tomar o ben-u-ron ao pequeno-almoço caso acorde com dores.\nTodos os dias deverá caminhar 3 a 5 km a uma passada não acelerada."
  );

  const [medicacao, setMedicacao] = useState(
    "Ben-u-ron 500mg\nStimpack\nVoltaren"
  );

  const [duracao, setDuracao] = useState("13/10 - 24/11");

  // Toggle edit mode
  const toggleEdit = () => {
    setIsEditable((prev) => !prev);
  };

  return (
    <div className={stylesCare.container}>
      <div className={stylesCare.content}>
        <div className={stylesCare.title}>
          Plano personalizado de {patient.name}
          <br/>
        </div>
        <div className={stylesCare.doctor}>
          Doutor: Maurício Santos
          <br />
        </div>
        <div className={stylesCare.section}>
          <div className={stylesCare.sectionTitle}>Descrição</div>
          {isEditable ? (
            <textarea
              value={descricao}
              className='inputPlan'
              onChange={(e) => setDescricao(e.target.value)}
              rows="4"
            />
          ) : (
            <div className={styles.infoBox}>{descricao}</div>
          )}
        </div>
        <div className={stylesCare.medicationSection}>
          <div className={stylesCare.sectionTitle}>Medicação</div>
          {isEditable ? (
            <textarea
              value={medicacao}
              className='inputPlan'
              onChange={(e) => setMedicacao(e.target.value)}
              rows="3"
            />
          ) : (
          <div className={stylesCare.sectionContent}>{medicacao}</div>
        )}
        </div>
      
        <div className={stylesCare.infoGrid}>
          <div className={stylesCare.infoBox}>
            <div className={stylesCare.infoTitle}>Duração</div>
              {isEditable ? (
                <input
                  type="text"
                  value={duracao}
                  className='inputPlan'
                  onChange={(e) => setDuracao(e.target.value)}
                />
              ) : (
                <div className={styles.infoContent}>{duracao}</div>
              )}  
          </div>
          <div className={stylesCare.infoBox}>
            <div className={stylesCare.infoTitle}>Próxima consulta</div>
            <div className={stylesCare.infoContent}>3/11 - Consultório 3</div>
          </div>
        </div>

          <button onClick={toggleEdit} class={styles.sendIcon}>
        {isEditable ? "Save Plan" : "Edit Plan"}
        </button>
        {/*<input type='submit' value='Edit Plan' class={styles.sendIcon}/>*/}
      </div>
        </div>
      
    
    
  );
}