import { useState } from 'react'
import WindowTracker from './components/WindowTracker'

export default function App() {
  const [tracker, setTracker] = useState(false)

  function handleToggle(){
    setTracker((prevState) => {
      return !prevState;
    })
  }
  
  return (
    <section>
      <div className="container">
        <button onClick={handleToggle}>Toggle Window Tracker</button>
        {tracker && <WindowTracker />}
      </div>
    </section>
  )
}

