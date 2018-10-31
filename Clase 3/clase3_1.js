var circulo = /** @class */ (function () {
    function circulo(x, y) {
        this.radio = 100;
        this._x = (x == undefined) ? Math.random() * 200 : x;
        this._y = (y == undefined) ? Math.random() * 200 : y;
        this._color = "yellow";
    }
    //Getter y Setter
    circulo.prototype.getRadio = function () {
        return this.radio;
    };
    circulo.prototype.setRadio = function (radio) {
        this.radio = radio;
    };
    Object.defineProperty(circulo.prototype, "color", {
        //Otra forma de Usar Getter y Setter
        get: function () {
            return this._color.toUpperCase();
        },
        set: function (color) {
            if (color != "")
                this._color = color;
            else
                this._color = "black";
        },
        enumerable: true,
        configurable: true
    });
    circulo.prototype.dibujar = function (contexto) {
        contexto.fillStyle = this._color;
        contexto.beginPath();
        contexto.arc(this._x, this._y, this.radio, 0, Math.PI * 2);
        contexto.fill();
        contexto.stroke();
        contexto.closePath();
    };
    return circulo;
}());
var c = new circulo();
c.color = "";
c.setRadio(50);
console.log("El color del circulo es ", c.color);
console.log("El radio del circulo es ", c.getRadio());
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
c.dibujar(ctx);
new circulo().dibujar(ctx);
