class circulo{
    private radio:number= 100
    private _color:string
    private _x:number
    private _y:number
    
    constructor(x?:number,y?:number){
        this._x=(x==undefined) ? Math.random()*200 : x;
        this._y=(y==undefined) ? Math.random()*200 : y;
        this._color="yellow"
    }
    //Getter y Setter
    public getRadio():number{
        return this.radio
    }
    public setRadio(radio:number){
        this.radio=radio
    }
    //Otra forma de Usar Getter y Setter
    public get color():string{
        return this._color.toUpperCase();
    }
    public set color(color:string){
        if (color!="")
            this._color = color;
        else
            this._color ="black"
    }
    public dibujar(contexto:CanvasRenderingContext2D){
        contexto.fillStyle=this._color
        contexto.beginPath()
        contexto.arc(this._x,this._y,this.radio,0,Math.PI*2)
        contexto.fill()
        contexto.stroke()
        contexto.closePath()
    }
}
var c:circulo=new circulo()
c.color=""
c.setRadio(50)
console.log("El color del circulo es ",c.color)
console.log("El radio del circulo es ",c.getRadio())
var canvas:any=document.getElementById("canvas");
var ctx=canvas.getContext("2d")
c.dibujar(ctx)
new circulo().dibujar(ctx)