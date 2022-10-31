const Filter = ({ filter, filterhandler }) => 
  <div>
      find countries: <input value={filter} onChange={filterhandler} />
  </div>;

export default Filter;