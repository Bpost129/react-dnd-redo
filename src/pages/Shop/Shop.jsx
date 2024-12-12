import { useState } from "react"
import InventoryList from "../../components/InventoryList/InventoryList"
import { inventoryData } from "../../data/data"
import "./Shop.css"

const Shop = () => {
  const [shopInventory, setShopInventory] = useState(inventoryData)
  const [userInventory, setUserInventory] = useState([])


  const handleAddItem = (item) => {
    setUserInventory([...userInventory, item])
    setShopInventory(shopInventory.filter(el => el._id !== item._id))
  }

  const handleRemoveItem = (item) => {
    setShopInventory([...shopInventory, item])
    setUserInventory(userInventory.filter(el => el._id !== item._id))
  }

  return (
    <>
      <h1>Shop</h1>
      {/* <button onClick={handleAddItem}>Click Here</button> */}
      <section className="shop-section">
        <InventoryList title="Shop Inventory" inventory={shopInventory} handleAddItem={handleAddItem} />
        <InventoryList title="User Inventory" inventory={userInventory} handleRemoveItem={handleRemoveItem} />
      </section>
    </>
  )
}

export default Shop