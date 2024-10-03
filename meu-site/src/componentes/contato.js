
import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import '../css/contato.css'
const Contato = () => {
  const [state, handleSubmit] = useForm("movagngl"); // Substitua pelo seu ID de formulário do Formspree

  if (state.succeeded) {
    return <p className="success-message">Mensagem enviada com sucesso!</p>;
  }

  return (
    <div className="contato">
      <h2>Entre em Contato</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">
          Seu Nome
        </label>
        <input
          id="name"
          type="text"
          name="name"
          required
        />
        <ValidationError 
          prefix="Nome" 
          field="name"
          errors={state.errors}
        />

        <label htmlFor="subject">
          Assunto
        </label>
        <input
          id="subject"
          type="text"
          name="subject"
          required
        />
        <ValidationError 
          prefix="Assunto" 
          field="subject"
          errors={state.errors}
        />

        <label htmlFor="message">
          Sua Mensagem
        </label>
        <textarea
          id="message"
          name="message"
          required
        />
        <ValidationError 
          prefix="Mensagem" 
          field="message"
          errors={state.errors}
        />

        <button type="submit" disabled={state.submitting}>
          Enviar
        </button>
      </form>
    </div>
  );
};

export default Contato;
