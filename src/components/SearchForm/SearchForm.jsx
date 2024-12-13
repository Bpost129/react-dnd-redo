import { useState } from "react"
import './SearchForm.css'

const SearchForm = (props) => {
  const [formData, setFormData] = useState({query: ''})

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value})
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    props.handleSpellSearch(formData)
  }

  return (
    <form className="search-form" onSubmit={handleSubmit}>
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