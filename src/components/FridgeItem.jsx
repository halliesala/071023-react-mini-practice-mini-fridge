function FridgeItem({ item, toggleExpired }) {

  return (
    <div className="fridge-item">
      <h2>{item.name}</h2>
      <p>{item.description}</p>
      <p onClick={() => {
          console.log("Toggling expiration");
          toggleExpired(item)}
        }>{item.is_expired ? "Expired" : "Still Good"}</p>
    </div>
  )
}

export default FridgeItem
