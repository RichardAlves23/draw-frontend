import Tools from "./tools/interface/Tools"

export default class ManagerTools {

    private tool!: Tools;

    public setTool(tool: Tools) {
        if (tool) {
            this.tool = tool;
            this.activateEvents();
        }
    } 


    private activateEvents() {
        this.tool.mouseDown();
        this.tool.mouseMove();
        this.tool.mouseUp();
        this.tool.mouseLeave();
        
    }
   
    
}