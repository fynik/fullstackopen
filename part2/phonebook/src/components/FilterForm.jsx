const FilterForm = (props) => 
<div>
  filter shown with: <input value={props.filter} onChange={props.filterHandler}/>
</div>;

export default FilterForm;