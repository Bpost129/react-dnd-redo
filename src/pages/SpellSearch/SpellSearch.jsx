import { useEffect, useState } from "react"
import SearchForm from "../../components/SearchForm/SearchForm"
import { getSpells } from "../../services/api-calls"

const SpellSearch = () => {
  const [allSpells, setAllSpells] = useState([])
  const [searchResults, setSearchResults] = useState([])

  useEffect(() => {
    const fetchSpellList = async () => {
      const spellData = await getSpells()
      setAllSpells(spellData)
      setSearchResults(spellData)
    }
    fetchSpellList()
  }, [])

  const handleSpellSearch = formData => {
    const filteredResults = allSpells.filter(spell => (
      spell.name.toLowerCase().includes(formData.query.toLowerCase())
    ))
    setSearchResults(filteredResults)
  }

  return (
    <main className="spell-list">
      <h1>Many Spellz</h1>
      <SearchForm handleSpellSearch={handleSpellSearch} />
      {searchResults.length ?
        <h2>{searchResults.length} results found</h2>
        :
        <h2>Please search for a spell</h2>
      }
      {searchResults.map(spell => 
        <div key={spell._id} className="link-container">
          {spell.name}
        </div>
      )}
    </main>
  )
}

export default SpellSearch