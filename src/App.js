import Beginning from './Beginning'



function App() {
  function handleReset() {
    window.location.reload()
  }
  return (

    <div className="Beginning" >
      <a href="http://dawidkozakiewicz.com/" target="_blank"><div className="author">O AUTORZE</div></a>
      <button className="reset" onClick={handleReset}>RESET</button>
      <Beginning />
    </div>
  );
}

export default App;
