import Slider from 'react-slick'
import PlanetItem from '../PlanetItem'
import './index.css'

const PlanetsSlider = props => {
  const {planetsList} = props
  return (
    <div className="app-container" data-testid="planets">
      <h1 className="heading">PLANETS</h1>
      <Slider>
        {planetsList.map(eachValue => (
          <PlanetItem key={eachValue.id} eachValue={eachValue} />
        ))}
      </Slider>
    </div>
  )
}

export default PlanetsSlider
