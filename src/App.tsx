import { useState } from 'react'
import Button from './components/Button'


function App() {
  return (
    <div>
      {/* Example of passing props */}
      <Button color='success' onClick={() => setAlertVisible(true)}>Submit</Button>
    </div>
  )
}

export default App
