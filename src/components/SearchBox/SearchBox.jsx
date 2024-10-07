

import style from './SearchBox.module.css';


const SearchBox = ({value, onSearch} ) => {
  

  return (
    <div className = {style.searchField}>
      <p className = {style.searchTitle}>Find contacts by name</p>
   <input 
   className = {style.searchInput}
   type="text" 
   value = {value}  
   onChange={event => onSearch(event.target.value)}/>

    </div>
  )
}

export default SearchBox;