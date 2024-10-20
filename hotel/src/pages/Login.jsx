import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [form, setForm] = useState({ username: '', password: '' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/login', form);
      localStorage.setItem('token', response.data.token);
      navigate('/admin');
    } catch (error) {
      console.error('Error logging in:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-8">
      <input name="username" placeholder="Usuario" onChange={handleChange} />
      <input name="password" placeholder="Contraseña" type="password" onChange={handleChange} />
      <button type="submit">Iniciar Sesión</button>
    </form>
  );
}

export default Login;
