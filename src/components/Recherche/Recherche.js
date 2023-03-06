import './Recherche.css';
import { useParams, Link } from 'react-router-dom';

function Recherche({ data }) {
    const { code } = useParams();
    const selectedCountry = data.find(country => country.cca3 === code);
    if (!selectedCountry) {
        return <div>Pays non trouvé</div>
    }

    return (
      <div className="Api">
        <div className='Api_gauche'>
        <Link to="/"><button className='btn_back'>Retour</button> </Link>
        <img src={selectedCountry.flags.svg} alt={`Drapeau de ${selectedCountry.name.common}`} className='drapeau' />
        </div>
        <div className='Api_droite'>
        <h1>{selectedCountry.name.common}</h1>
        <p><strong>Native Name : </strong>{selectedCountry.name.official}</p>
        <p><strong>Population : </strong>{selectedCountry.population}</p>
        <p><strong>Région : </strong>{selectedCountry.region}</p>
        <p><strong>Sub Région : </strong>{selectedCountry.subregion}</p>
        <p><strong>Capital : </strong>{selectedCountry.capital}</p>
        <p><strong>Top Level Domain : </strong>{selectedCountry.tld}</p>
        <p><strong>Currencies : </strong>{selectedCountry.currencies ? Object.values(selectedCountry.currencies).map(currency => (
  <span key={currency.name}>{currency.name}</span>
)) : <span>Pas de monnaie</span> }</p>
        <p><strong>Language(s) : </strong>{selectedCountry.languages ? Object.values(selectedCountry.languages).join(", ") : null }</p>
        <p className='p_border'><strong>Border countries : </strong>{selectedCountry.borders ? selectedCountry.borders.map(border => (
  <span key={border}><Link to={`/recherche/${border}`}><button className='btn_back'>{border}</button></Link></span>
)) : <span>Pas de pays limitrophes</span> }</p>
        <br />
        </div>
      </div>
    );
}

export default Recherche;
