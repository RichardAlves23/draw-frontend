import Tools from "../interface/Tools";

export default class Pencil implements Tools {

    private canvas: HTMLCanvasElement;
    private cavasContext: CanvasRenderingContext2D;
    private isDraw: boolean;

    constructor(canvas: HTMLCanvasElement) {
        this.canvas = canvas;
        this.cavasContext = this.canvas.getContext('2d')!;
        this.isDraw = false;
    }
    public mouseDown(): void {
        this.canvas.onmousedown = (event: MouseEvent) => {
            this.isDraw = true;
            const mouseX = event.pageX - this.canvas.offsetLeft;
            const mouseY = event.pageY - this.canvas.offsetTop;
            this.cavasContext.beginPath();
            this.cavasContext!.moveTo(mouseX, mouseY);
        }
   
    }
    public mouseMove(): void {
        this.canvas.onmousemove = (event: MouseEvent) => {
            if (this.isDraw) {
                const mouseX = event.pageX - this.canvas.offsetLeft;
                const mouseY = event.pageY - this.canvas.offsetTop;
                this.cavasContext.lineTo(mouseX,mouseY);
                this.cavasContext.stroke();
                
            }
        }
    }
    public mouseUp(): void {
        this.canvas.onmouseup = () => {
            this.isDraw = false;
        }
    }
    public mouseLeave(): void {
        this.canvas.onmouseleave = () => {
            this.isDraw = false;
        }

    }

}