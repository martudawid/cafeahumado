import React, { useState } from 'react';

export default function App() {
  const [fecha, setFecha] = useState('');
  const [hora, setHora] = useState('');
  const [personas, setPersonas] = useState(1);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Reserva confirmada para ${personas} persona(s) el ${fecha} a las ${hora}`);
  };

  return (
    <div className="bg-gradient-to-b from-[#4b2e2b] via-[#3a2a28] to-[#2b1f1d] text-[#fdfcfb] min-h-screen font-sans">
      {/* Navbar */}
      <nav className="w-full max-w-5xl mx-auto flex justify-between items-center py-4 px-6 bg-[#3a2a28]/90 rounded-2xl shadow-lg mt-6">
        <h1 className="text-2xl font-serif text-[#e6d3c3]">Café Ahumado</h1>
        <div className="space-x-6">
          <a href="#reserva" className="hover:text-[#d9a066]">Reservas</a>
          <a href="#experiencia" className="hover:text-[#d9a066]">Experiencia</a>
          <a href="#contacto" className="hover:text-[#d9a066]">Contacto</a>
        </div>
      </nav>

      {/* Hero */}
      <section className="text-center mt-12">
        <h1 className="text-5xl font-serif text-[#e6d3c3] tracking-wide drop-shadow-xl">
          Bienvenido al refugio de invierno
        </h1>
      </section>

      {/* Experiencia destacada */}
      <section className="max-w-3xl mx-auto text-center mt-12 space-y-6">
        <p className="text-lg text-[#e6d3c3]/90 leading-relaxed">
          Un refugio en San Martín de los Andes donde el café se encuentra con la calidez del fogón.
        </p>
        <div className="grid md:grid-cols-3 gap-6 mt-4">
          <div className="flex flex-col items-center space-y-2 p-4 bg-[#3a2a28]/70 rounded-xl shadow-md">
            <p>Café y pastelería artesanal</p>
          </div>
          <div className="flex flex-col items-center space-y-2 p-4 bg-[#3a2a28]/70 rounded-xl shadow-md">
            <p>Ambiente cálido tras la nieve</p>
          </div>
          <div className="flex flex-col items-center space-y-2 p-4 bg-[#3a2a28]/70 rounded-xl shadow-md">
            <p>Espacios individuales o comunitarios</p>
          </div>
        </div>
      </section>

      {/* Formulario de reservas */}
      <section
        id="reserva"
        className="bg-[#5a3c36]/80 border border-[#4a322c] shadow-2xl rounded-3xl w-full max-w-md mx-auto mt-12 p-6 backdrop-blur-md"
      >
        <h2 className="text-2xl font-semibold mb-6 text-[#f0e6dd] font-serif text-center">
          Reservá tu lugar junto al fogón
        </h2>
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block mb-2 text-sm text-[#e6d3c3]">Fecha</label>
            <input
              type="date"
              value={fecha}
              onChange={(e) => setFecha(e.target.value)}
              className="w-full bg-[#4a322c] rounded-xl px-3 py-2 outline-none text-[#fdfcfb] shadow-inner"
              required
            />
          </div>
          <div>
            <label className="block mb-2 text-sm text-[#e6d3c3]">Hora</label>
            <input
              type="time"
              value={hora}
              onChange={(e) => setHora(e.target.value)}
              className="w-full bg-[#4a322c] rounded-xl px-3 py-2 outline-none text-[#fdfcfb] shadow-inner"
              required
            />
          </div>
          <div>
            <label className="block mb-2 text-sm text-[#e6d3c3]">Cantidad de personas</label>
            <input
              type="number"
              min="1"
              max="6"
              value={personas}
              onChange={(e) => setPersonas(e.target.value)}
              className="w-full bg-[#4a322c] rounded-xl px-3 py-2 outline-none text-[#fdfcfb] shadow-inner"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-[#d9a066] hover:bg-[#c48b4a] text-[#2b1f1d] font-semibold py-3 rounded-2xl shadow-lg transition font-serif"
          >
            Confirmar Reserva
          </button>
        </form>
      </section>

      {/* Info adicional */}
      <section id="experiencia" className="max-w-2xl mx-auto text-center mt-12 space-y-3">
        <h3 className="text-xl font-semibold text-[#e6d3c3]">¿Qué incluye la experiencia?</h3>
        <ul className="text-sm text-[#f0e6dd] space-y-1 mt-2">
          <li>✨ Ambiente íntimo con fogón central</li>
          <li>🥐 Café, chocolate caliente y pastelería artesanal</li>
          <li>🛋️ Mantas, música suave y vajilla artesanal</li>
          <li>🍷 Bebida regional (vino caliente o licor típico)</li>
        </ul>
      </section>

      {/* Contacto */}
      <section id="contacto" className="max-w-2xl mx-auto text-center mt-12 space-y-2">
        <h3 className="text-xl font-semibold text-[#e6d3c3]">Contacto</h3>
        <p className="text-[#f0e6dd]">San Martín de los Andes, Patagonia</p>
        <p className="text-[#f0e6dd]">+54 9 1234 5678</p>
        <p className="text-[#f0e6dd]">info@cafeahumado.com</p>
      </section>

      <footer className="mt-12 text-xs text-[#d1b7a0] text-center italic mb-6">
        © 2025 Café Ahumado · San Martín de los Andes · Experiencia exclusiva de invierno
      </footer>
    </div>
  );
}

