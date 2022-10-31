const FullCountry = ( {country} ) => {
    return (
        <div>
            <h3>{country.name.official}</h3>
            <div>
                <p>Capital: {country.capital}</p>
                <p>Area: {country.area}</p>
                <p>Population: {country.population}</p>
            </div>
            <h4>Languages:</h4>
            <ul>
                {Object.entries(country.languages).map(([key, value]) => 
                    <li key={key}>{value}</li>)}
            </ul>
            <br />
            <img src={country.flags.png} alt={`flag of ${country.name.official}`} />

        </div>
    )
}

export default FullCountry;