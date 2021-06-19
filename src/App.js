import Beginning from './Beginning'
import { useState } from 'react';
import OpeningConversation from './out/OpeningConversation'




function App() {
  const [connectionType, setConnectionType] = useState(null)
  const color = (connectionType === null ? "aliceblue" : (connectionType === 'in') ? "red" : "blue")
  function handleReset() {
    window.location.reload()
  }


  return (
    <>
      <div className="Beginning" >
        <a href="http://dawidkozakiewicz.com/" target="_blank"><div className="author">O AUTORZE</div></a>
        <div onClick={() => handleReset()} className="reset">RESET</div>
        <h1>Cześć :-) Wybierz typ połączenia:</h1>
        <button onClick={() => setConnectionType('in')}>IN</button>
        <button onClick={() => setConnectionType('out')}>OUT</button>
        {connectionType === null ? (<></>) : connectionType === 'in' ? (<Beginning />) : (<OpeningConversation />)}
      </div>
    </>
  );
}

export default App;
