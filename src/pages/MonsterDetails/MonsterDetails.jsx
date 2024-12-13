import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { getMonster } from "../../services/api-calls"

const MonsterDetails = () => {
  const [monsterDetails, setMonsterDetails] = useState({})
  const { monsterId } = useParams()

  useEffect(() => {

    const fetchDetails = async () => {
      const monsterData = await getMonster(monsterId)
      setMonsterDetails(monsterData)
    }
    fetchDetails()
    console.log(monsterDetails)
  }, [monsterId])

  if (!monsterDetails.name) return <h1>Loading details...</h1>

  return (
    <main className="monster-details">
      <h1>Monster Deets</h1>
      {monsterDetails.image 
        ? <img
            style={{ width: '320px' }}
            src={`https://www.dnd5eapi.co${monsterDetails.image}`}
            alt="A (scary) {monsterDetails.name}!"
          />
        : <img src="https://picsum.photos/320/240/" alt="A random lorem picsum photo" />
      }
      <h2>{monsterDetails.name}</h2>
      <h3>Size: {monsterDetails.size}</h3>
      <h3>Type: {monsterDetails.type}</h3>
      <h3>Actions:</h3>
      {!monsterDetails.actions?.length &&
        <h4>This poor monster has no actions. Womp womp.</h4>
      }
      {monsterDetails.actions?.map(action => (
        <div key={action.name} className="subsection">
          <h4>{action.name}</h4>
          <p>{action.desc}</p>
        </div>
      ))}
    </main>
  )
}

export default MonsterDetails