import SimpleCountry from "./SimpleCountry";

const CountriesList = ({countries}) => {

  if (countries.length === 1) {
    return <div>Detailed view</div>
  } else if (countries.length > 10) {
    return <div>Too many matches, specify another filter</div>
  } else if (countries.length > 1) {
    return <div>
      { countries.map(country => 
        <SimpleCountry key={country.ccn3} country={country} />) }
  </div>
  }
}
  

export default CountriesList;