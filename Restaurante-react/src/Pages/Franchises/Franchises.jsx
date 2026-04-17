import styles from './Franchises.module.css';
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';

import mexico from '../../assets/franchises/mexico.png';
import tokyo from '../../assets/franchises/tokyo.png';
import beijing from '../../assets/franchises/beijing.png';
import newyork from '../../assets/franchises/newyork.png';
import madrid from '../../assets/franchises/madrid.png';

const cities = [
  {
    name: 'Ciudad de México',
    country: 'México',
    address: 'Av. de la Reforma 222, Juárez, CDMX',
    info: 'Experience the authentic heat and vibrant culture of Mexico in the heart of the city.',
    img: mexico
  },
  {
    name: 'Tokyo',
    country: 'Japan',
    address: '2 Chome-2-1 Shibuya, Shibuya City, Tokyo',
    info: 'A Zen-inspired sanctuary offering the finest Japanese culinary precision.',
    img: tokyo
  },
  {
    name: 'Beijing',
    country: 'China',
    address: 'Chaoyang, Beijing, China',
    info: 'A grand architectural marvel serving centuries of Chinese tradition.',
    img: beijing
  },
  {
    name: 'New York',
    country: 'USA',
    address: 'W 57th St, New York, NY 10019',
    info: 'Our flagship urban location bringing global flavors to the Manhattan skyline.',
    img: newyork
  },
  {
    name: 'Madrid',
    country: 'Spain',
    address: 'C/ de Gran Vía, 28013 Madrid, Spain',
    info: 'A warm, historic space where global spice meets European elegance.',
    img: madrid
  }
];

const Franchises = () => 
{
  return (
    <div className={styles.container}>
      <Header typeNavegation="NavLink" />
      
      <main className={styles.main}>
        <section className={styles.hero}>
          <h1>Our Global Presence</h1>
          <p>Bringing the world's most authentic flavors to your neighborhood.</p>
        </section>

        <section className={styles.grid}>
          {cities.map((city, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.imageContainer}>
                <img src={city.img} alt={city.name} className={styles.image} />
                <div className={styles.overlay}>
                  <span>{city.country}</span>
                </div>
              </div>
              <div className={styles.content}>
                <h2>{city.name}</h2>
                <p className={styles.address}>📍 {city.address}</p>
                <p className={styles.info}>{city.info}</p>
                <button className={styles.button}>Contact Branch</button>
              </div>
            </div>
          ))}
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Franchises;
