import { useEffect, useState } from "react"
import SearchForm from "../../components/SearchForm/SearchForm"
import SpellCard from "../../components/SpellCard/SpellCard"
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
      {<h2>{searchResults.length} results found</h2>}
      {searchResults.map(spell => 
        <SpellCard key={spell._id} spell={spell} />
      )}
    </main>
  )
}

export default SpellSearch