import React from 'react';
import Navbar from '../components/Navbar'; // Ajustez le chemin selon votre structure de fichiers
import './News.css'; // Assurez-vous que ce fichier CSS existe et est stylé

function News() {
  const newsItems = [
    {
      id: 1,
      date: '9 September 2020',
      title: 'Press release',
      description: 'Press release',
      image: '/n1.png', // Remplacez par le chemin réel de votre image
    },
    {
      id: 2,
      date: '9 September 2020',
      title: 'CMF Press Release',
      description: 'CMF PRESS RELEASE',
      image: '/n2.png', // Remplacez par le chemin réel de votre image
    },
    {
      id: 3,
      date: '9 September 2020',
      title: 'Press release',
      description: 'Press release',
      image: '/n3.png', // Remplacez par le chemin réel de votre image
    },
  ];

  return (
    <div>
      <Navbar /> {/* Ajoutez la barre de navigation ici */}
      <div className="news-page">
        <div className="news-header">
          <img src="/news.jpg" alt="News Header" /> {/* Remplacez par le chemin réel de votre image */}
        </div>
        <div className="news-content">
          {newsItems.map((item) => (
            <div key={item.id} className="news-item">
              <img src={item.image} alt={item.title} className="news-image" />
              <div className="news-details">
                <p className="news-date">{item.date}</p>
                <h3 className="news-title">{item.title}</h3>
                <p className="news-description">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default News;
