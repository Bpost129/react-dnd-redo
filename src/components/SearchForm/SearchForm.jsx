import { useState } from "react"
import './SearchForm.css'

const SearchForm = () => {
  const [formData, setFormData] = useState({query: ''})

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value})
  }

  return (
    <form className="search-form">
      <input 
        name="query" 
        type="text" 
        autoComplete="off" 
        value={formData.query}
        onChange={handleChange}  
      />
      <button type="submit">Search</button>
    </form>
  )
}

export default SearchForm