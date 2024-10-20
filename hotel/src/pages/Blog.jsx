import React from 'react';

function Blog() {
  const articles = [
    {
      id: 1,
      title: 'Los Mejores Lugares para Visitar en Caracas',
      excerpt: 'Descubre los lugares más fascinantes de la capital de Venezuela...',
      date: '12 de Octubre, 2024',
    },
    {
      id: 2,
      title: 'Consejos para Viajar a Venezuela',
      excerpt: 'Una guía práctica para que tu visita sea segura y placentera...',
      date: '8 de Octubre, 2024',
    },
    {
      id: 3,
      title: 'Los Platos Típicos que Debes Probar',
      excerpt: 'Venezuela tiene una gastronomía deliciosa que no puedes dejar de probar...',
      date: '2 de Octubre, 2024',
    },
  ];

  return (
    <div className="p-8">
      <h2 className="text-3xl font-bold mb-6">Blog del Hotel</h2>
      <div className="space-y-6">
        {articles.map((article) => (
          <div key={article.id} className="bg-white shadow-md rounded-lg p-4">
            <h3 className="text-xl font-semibold mb-2">{article.title}</h3>
            <p className="text-gray-700 mb-2">{article.excerpt}</p>
            <p className="text-gray-500 text-sm">{article.date}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Blog;
