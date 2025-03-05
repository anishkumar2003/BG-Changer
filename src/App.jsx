import Btn from "./Compnoents/Btn";
import { useState } from "react";

function App() {
  let [color, setColor] = useState("olive");

  return (
    <div
      className="flex justify-center items-end w-[100vw] h-[100vh] transition delay-150 "
      style={{ background: color }}
    >
      <div className="flex gap-2 mb-4 justify-center bg-white p-2 rounded-lg border-2 border-black">
        <Btn color="Green" onClick={() => setColor("Green")} border="2px solid black" />
        <Btn color="Red" onClick={() => setColor("Red")} border="2px solid black" />
        <Btn color="Blue" onClick={() => setColor("Blue")} border="2px solid black" />
        <Btn color="Pink" onClick={() => setColor("Pink")} border="2px solid black" />
        <Btn color="Orange" onClick={() => setColor("Orange")} border="2px solid black" />
        <Btn color="Black" onClick={() => setColor("Black")} textcolor="white" border="2px solid black" />
        <Btn color="Yellow" onClick={() => setColor("Yellow")} border="2px solid black" />
        <Btn color="White" onClick={() => setColor("White")} border="2px solid black"/>
        <Btn color="Aqua" onClick={() => setColor("Aqua")} border="2px solid black" />
        <Btn color="Purple" onClick={() => setColor("Purple")} border="2px solid black" />
        <Btn color="Brown" onClick={() => setColor("Brown")} border="2px solid black" />
        <Btn color="Cyan" onClick={() => setColor("Cyan")} border="2px solid black" />
        <Btn color="Magenta" onClick={() => setColor("Magenta")} border="2px solid black" />
        <Btn color="Lime" onClick={() => setColor("Lime")} border="2px solid black" />
      </div>
    </div>
  );
}

export default App;
