import React, { useState } from "react";

 const FormContact = () => {
  const [form, setForm] = useState({
    nome: "",
    email: "",
    mensagem: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Mensagem enviada!\nNome: ${form.nome}\nEmail: ${form.email}\nMensagem: ${form.mensagem}`);
    // Aqui você pode integrar com um backend ou serviço de email
  };

  return (
    <div style={{
      backgroundColor: "#ded8cb",
      padding: "2rem",
      maxWidth: "400px",
      margin: "0 auto",
      borderRadius: "8px",
      fontFamily: "Georgia, serif"
    }}>
      <h2 style={{
        fontSize: "1.5rem",
        fontWeight: "bold",
        marginBottom: "1rem",
        borderBottom: "1px solid black"
      }}>
        Me mande um email
      </h2>
      <form onSubmit={handleSubmit}>
        <label>Nome</label>
        <input
          type="text"
          name="nome"
          value={form.nome}
          onChange={handleChange}
          style={inputStyle}
        />

        <label>Email</label>
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          style={inputStyle}
        />

        <label>Mensagem</label>
        <textarea
          name="mensagem"
          value={form.mensagem}
          onChange={handleChange}
          rows={5}
          style={inputStyle}
        />

        <button
          type="submit"
          style={{
            backgroundColor: "#1a1a1a",
            color: "white",
            border: "none",
            padding: "10px 20px",
            borderRadius: "8px",
            marginTop: "1rem",
            cursor: "pointer"
          }}
        >
          Enviar
        </button>
      </form>
    </div>
  );
};

const inputStyle = {
  display: "block",
  width: "100%",
  marginBottom: "1rem",
  padding: "10px",
  borderRadius: "8px",
  border: "1px solid #ccc",
  fontSize: "1rem"
};

export default FormContact;
