import { useState } from "react"
import SearchForm from "../../components/SearchForm/SearchForm"

const SpellSearch = () => {
  const [allSpells, setAllSpells] = useState([])

  return (
    <main className="spell-list">
      <h1>Many Spellz</h1>
      <SearchForm />
    </main>
  )
}

export default SpellSearch