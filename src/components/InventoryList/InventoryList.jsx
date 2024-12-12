const InventoryList = ({ inventory }) => {
  return (
    <>
      <ul>
        {inventory.map(item => (
          <li key={item._id}>
            <p>{item.name}</p>
            <p>Price: ${item.cost}</p>
            <p>Weight: {item.weight} lb</p>
          </li>
        ))}
      </ul>
    </>
  )
}

export default InventoryList