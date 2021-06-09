import Beginning from './Beginning'
import './preloader.css'



function App() {
  function handleReset() {
    window.location.reload()
  }
  return (
    <>
      <div id="preloader" className="preloader-hidden">
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="dot"></div>
      </div>
      <div className="Beginning" >

        <a href="http://dawidkozakiewicz.com/" target="_blank"><div className="author">O AUTORZE</div></a>
        <button className="reset" onClick={handleReset}>RESET</button>
        <Beginning />
      </div>
    </>

  );
}

export default App;
