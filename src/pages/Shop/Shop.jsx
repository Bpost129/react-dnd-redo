import { inventoryData } from "../../data/data"

const Shop = () => {
  console.log('Inventory Data:', inventoryData)
  return (
    <>
      <h1>Shop</h1>
      <ul>
        {inventoryData.map(item => (
          <li key={item._id}>
            <p>{item.name}</p>
            <p>Price: ${item.cost}</p>
          </li>
        ))}
      </ul>
    </>
  )
}

export default Shop