import Beginning from './Beginning'
import { useState } from 'react';
import Outcomings from './Outcomings'




function App() {
  const [connectionType, setConnectionType] = useState(null)

  return (
    <>
      <div className="Beginning" >
        <a href="http://dawidkozakiewicz.com/" target="_blank"><div className="author">O AUTORZE</div></a>
        <button onClick={() => setConnectionType(null)} className="reset">RESET</button>
        <h1>Cześć! :-) Wybierz z menu typ połączenia :-)</h1>
        <button onClick={() => setConnectionType('in')}>IN</button>
        <button onClick={() => setConnectionType('out')}>OUT</button>
        {connectionType === null ? (<></>) : connectionType === 'in' ? (<Beginning />) : (<Outcomings />)}

      </div>
    </>
  );
}

export default App;
