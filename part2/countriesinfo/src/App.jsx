import axios from "axios";
import { useState, useEffect } from "react";
import Filter from "./components/Filter";
import CountriesList from "./components/CountriesList";

const App = () => {

  const [filter, setFilter] = useState('');
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    axios
    // .get("http://localhost:3001/all")
      .get("https://restcountries.com/v3.1/all")
      .then(resp => {
        console.log("resolved");
        setCountries(resp.data)
      });
  }, []);


  const filterHandler = (event) => setFilter(event.target.value);
  const showCountry = (country) => setFilter(country);

  const filteredCountries = filter === ''
    ? countries
    : countries.filter(country => country.name.common.toLowerCase().includes(filter.toLowerCase()));

  return (
    <>
      <Filter filter={filter} filterhandler={filterHandler} />
      <CountriesList countries={filteredCountries} showCountry={showCountry}/>
    </>
  );
}

export default App;
