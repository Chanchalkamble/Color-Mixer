import { useState , useEffect} from "react";
import "./index.css"

function App() {

  const [r, setR] = useState(0);
  const [g, setG] = useState(0);
  const [b, setB] = useState(0);
  

  // 🧩 1. Load saved color on first render
  useEffect(() => {
    const savedColor = JSON.parse(localStorage.getItem("savedColor"));
    if (savedColor) {
      setR(savedColor.r);
      setG(savedColor.g);
      setB(savedColor.b);
    }
  }, []);

  // // 💾 2. Save color whenever any value changes
  // useEffect(() => {
  //   localStorage.setItem("savedColor", JSON.stringify({ r, g, b }));
  // }, [r, g, b]);

const saveColor = () => {
  // Save current RGB to localStorage
  localStorage.setItem("savedColor", JSON.stringify({ r, g, b }));
  alert("Color saved!");
};


  return (
    <div style={{ textAlign: "center" }} className="container">
      <h1>Color Mixer</h1>
      <div
        style={{
          backgroundColor: `rgb(${r}, ${g}, ${b})`,
          width: "200px",
          height: "200px",
          margin: "20px auto",
          borderRadius: "10px",
          border: "2px solid black",
          boxShadow:"2px 2px 4px 0.9px #ccc"
        }}
      ></div>
      <p>RGB: ({r}, {g}, {b})</p>
      <label htmlFor="">Red</label>
      <input  type="range" min={0} max={255} value={r} onChange={(event)=>setR( Number(event.target.value))} /><br></br>
      <br/>
      <label htmlFor="">Green</label>
      <input  type="range" min={0}  max={255} value={g} onChange={(event)=>setG(Number(event.target.value))}  />
      <br/>
      <br/>
      <label htmlFor="" >Blue</label>
      <input  type="range" value={b} min={0} max={255} onChange={(event)=>setB(Number(event.target.value))}   />
      <br/>
      <br/>
      <button onClick={saveColor}>Save Color</button>


    </div>
  );
}

export default App;
