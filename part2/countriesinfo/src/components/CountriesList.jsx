import FullCountry from "./FullCountry";

const CountriesList = ({countries, showCountry}) => {

  if (countries.length === 1) {
    return <FullCountry country={countries[0]} />
  } else if (countries.length > 10) {
    return <div>Too many matches, specify another filter</div>
  } else if (countries.length > 1) {
    return <div>
      { countries.map(country => 
        <p key={country.ccn3}>
          {country.name.official} <button onClick={() => showCountry(country.name.common)}>show</button>
        </p>
        ) }
  </div>
  }
}
  

export default CountriesList;