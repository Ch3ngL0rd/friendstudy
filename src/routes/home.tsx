import React from "react";
import { Link } from "react-router-dom";
import { style } from "../style";
// import 
import sun from "../assets/sun.png"
import smile from "../assets/smile.svg"
import { H } from "@tauri-apps/api/path-e12e0e34";

export default function Home() {
  const [mouseX, setMouseX] = React.useState(0);
  const [mouseY, setMouseY] = React.useState(0);

  // Gets the mouse position
  React.useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMouseX(e.clientX);
      setMouseY(e.clientY);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  React.useEffect(() => {
    console.log(mouseX, mouseY);
  }, [mouseX, mouseY]);

  // gets mouse percentage
  const mouseXPercentage = (mouseX / window.innerWidth) * 50;
  const mouseYPercentage = (mouseY / window.innerWidth) * 50;


  return (
    <div style={{ backgroundColor: style.main }} className="px-16 py-16 grid grid-rows-6">
      <h1 className="text-5xl text-center">Home</h1>
      <div className="row-span-2 grid grid-cols-6">
        <div className="col-span-3 relative flex flex-col justify-center items-center">
          <img src={sun} className="h-32 aspect-square absolute" />
          <img src={smile} className="h-10 aspect-square relative"
            style={{ marginLeft: mouseXPercentage - 25, marginTop: mouseYPercentage - 25}} />
        </div>
        <div className="col-span-3">
          <h3>1okwms</h3>
        </div>
      </div>
      <div className="row-span-1">
        <h1 className="text-5xl">Home</h1>
      </div>
      <div className="row-span-2">
        <h1 className="text-5xl">Home</h1>
      </div>
      <div className="row-span-1">
        <h1 className="text-5xl">Home</h1>
      </div>
    </div>
  );
}
