import Tools from "../interface/Tools";

export default class Circle implements Tools {

    private canvas: HTMLCanvasElement;

    private cavasContext!: CanvasRenderingContext2D;

    private isDraw: boolean;

    private radius: number ;

    private startX: number;

    private startY: number;

    constructor(canvas: HTMLCanvasElement) {
        this.canvas = canvas;
        this.cavasContext = this.canvas.getContext('2d')!;
        this.isDraw = false;
        this.radius = 0;
        this.startX = 0;
        this.startY = 0;
    }
    public mouseDown(): void {

        this.canvas.onmousedown = (event: MouseEvent) => {
            this.isDraw = true;
            this.startX = event.clientX - this.canvas.offsetLeft;
            this.startY = event.clientY - this.canvas.offsetTop;
            this.radius = 0;
        }
    }

    
    public mouseMove(): void {
        this.canvas.onmousemove = (event: MouseEvent) => {
            if (this.isDraw) {
                const mouseX = event.clientX - this.canvas.offsetLeft;
                const mouseY = event.clientY - this.canvas.offsetTop;
                this.radius = Math.sqrt((mouseX - this.startX) ** 2 + (mouseY - this.startY) ** 2);
                this.drawCircle();
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

    private drawCircle(): void {
        this.cavasContext.beginPath();
        this.cavasContext.arc(this.startX, this.startY, this.radius, 0, Math.PI * 2);
        this.cavasContext.fillStyle = 'white';
        this.cavasContext.fill();
        this.cavasContext.stroke();
        this.cavasContext.closePath()
    }

}