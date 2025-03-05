function Btn({ color = "red", onClick, textcolor="black" ,border}) {
  return (
    <button
      className="p-2 w-20 h-10 rounded-xl"
      style={{ backgroundColor: color,color:textcolor,border:border }}
      onClick={onClick} // Ensure onClick is attached
    >
      {color}
    </button>
  );
}

export default Btn;
