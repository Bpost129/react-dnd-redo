import { useState } from "react"
import InventoryList from "../../components/InventoryList/InventoryList"
import { inventoryData } from "../../data/data"
import "./Shop.css"

const Shop = () => {
  const [shopInventory, setShopInventory] = useState(inventoryData)
  const [userInventory, setUserInventory] = useState([{ _id: 62555, name: 'Magic Wand', cost: 1, weight: 2 }])

  const handleAddItem = () => {
    const newItem = { _id: 62555, name: 'Magic Wand', cost: 1, weight: 2 }
    setUserInventory([newItem, ...shopInventory])
  }
  // console.log('Inventory Data:', inventoryData)

  return (
    <>
      <h1>Shop</h1>
      {/* <button onClick={handleAddItem}>Click Here</button> */}
      <section className="shop-section">
        <InventoryList title="Shop Inventory" inventory={shopInventory} />
        <InventoryList title="User Inventory" inventory={userInventory} />
      </section>
    </>
  )
}

export default Shop