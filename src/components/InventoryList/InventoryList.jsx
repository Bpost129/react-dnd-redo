const InventoryList = ({ inventoryData }) => {
  return (
    <>
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

export default InventoryList