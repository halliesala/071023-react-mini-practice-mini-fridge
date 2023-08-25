import FridgeItem from "./FridgeItem"

function FridgeList({fridge, toggleExpired}) {

  return (
    <div className="fridge-list">
      {/* Map your items here */}
      {
        fridge.map(item => {
          return <FridgeItem key={item.id} item={item} toggleExpired={toggleExpired}/>
        })
      }
    </div>
  )
}

export default FridgeList
