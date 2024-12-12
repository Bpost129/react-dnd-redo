const InventoryList = ({ title, inventory }) => {
  return (
    <div className="inventory-list">
      <h2>{title}</h2>
      <ul>
        {inventory.map(item => (
          <li key={item._id}>
            <p>{item.name}</p>
            <p>Price: ${item.cost}</p>
            <p>Weight: {item.weight} lb</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default InventoryList