// import { TrafficLight } from "./01-useState/TrafficLight"
// import { TrafficLightWithEffect } from "./02-useEffect/TrafficLightWithEffect"
import { TrafficLightWithHook } from "./02-useEffect/TrafficLightWithHook"

const HooksApp = () => {
  return (
    <div className="bg-gradient">
        {/* <TrafficLight /> */}
        <TrafficLightWithHook />
    </div>
  )
}

export default HooksApp
