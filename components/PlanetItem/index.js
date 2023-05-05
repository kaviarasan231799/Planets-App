import './index.css'

const PlanetItem = props => {
  const {eachValue} = props

  return (
    <div className="plant-container">
      <img
        src={eachValue.imageUrl}
        alt={`planet ${eachValue.name}`}
        className="img"
      />
      <h1 className="name-head">{eachValue.name}</h1>
      <p className="para">{eachValue.description}</p>
    </div>
  )
}
export default PlanetItem
