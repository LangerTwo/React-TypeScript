// import { Suspense } from 'react'
import { Toaster } from 'sonner'

// import { TrafficLight } from "./01-useState/TrafficLight"
// import { TrafficLightWithEffect } from "./02-useEffect/TrafficLightWithEffect"
// import { TrafficLightWithHook } from "./02-useEffect/TrafficLightWithHook"
// import { PokemonPage } from "./03-examples/PokemonPage"
// import { FocusScreen } from "./04-useRef/FocusScreen"
// import { TasksApp } from "./05-useReducer/TaskApp"
// import { ScrambleWords } from "./05-useReducer/ScrambleWords"
// import { MemoHook } from "./06-memos/MemoHook"
// import { MemoCounter } from "./06-memos/MemoCounter"
// import { InstagromApp } from "./07-useOptimistc/InstagromApp"
// import { ClientInformation } from './08-use-suspense/ClientInformation'
// import { getUserAction } from './08-use-suspense/get-user-action'
import { ProfessionalApp } from './09-useContext/ProfessionalApp'

// import './index.css'

const HooksApp = () => {
  return (
    <div className="bg-gradient">
      <Toaster />
      <ProfessionalApp />
    </div>
  )
}

export default HooksApp
