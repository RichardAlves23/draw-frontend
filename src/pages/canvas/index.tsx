import { useEffect, useRef, } from "react"
import ManagerTools from "../../services/draw/ManagerTools";
import Pencil from "../../services/draw/tools/implementations/Pencil";
import Circle from "../../services/draw/tools/implementations/Circle";

function Draw() {
    const canvas = useRef<HTMLCanvasElement>(null);
    const managerTools =  new ManagerTools();
    
    useEffect(() => {
        const draw = canvas.current;

        if(draw) {
            managerTools.setTool(new Pencil(draw!));
        }
    

    },)
    return (
        <>
            <div>
                <button onClick={() => {
                    const draw = canvas.current;
                    managerTools.setTool(new Pencil(draw!))
                }}>Pencil</button>

                <button onClick={() => {
                    const draw = canvas.current;
                    managerTools.setTool(new Circle(draw!))
                }}>Elipse</button>
            </div>
            <div>
                <canvas ref={canvas} id='drawScreen' width={'500px'} height={'500px'} style={{border: '1px solid'}}/>
            </div>
        </>
        
    )
}

export default Draw