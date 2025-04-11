import { motion } from 'framer-motion';

function CountryModal({ country, onClose }) {
  if (!country) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <motion.div
        className="modal"
        onClick={(e) => e.stopPropagation()}
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.5, opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        <h2>{country.name.common}</h2>
        <img src={country.flags.svg} alt={country.name.common} width={100} />
        <p><strong>Capital:</strong> {country.capital?.[0]}</p>
        <p><strong>Region:</strong> {country.region}</p>
        <p><strong>Population:</strong> {country.population.toLocaleString()}</p>
        <p><strong>Languages:</strong> {country.languages && Object.values(country.languages).join(', ')}</p>
        <button onClick={onClose}>Uždaryti</button>
      </motion.div>
    </div>
  );
}

export default CountryModal;
