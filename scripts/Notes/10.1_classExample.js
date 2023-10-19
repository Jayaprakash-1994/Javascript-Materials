//Complex.js a complex number class
class Complex{
    constructor( real, imaginary) {
        this.r = real;
        this.i = imaginary;
    }
    //shorthand method
    plus(that){
        return new Complex(this.r + this.r ,this.i + this.i);
    }
    times(that) {
        return new Complex(this.r * this.r - this.i * this.i , this.r * this.i + this.i * this.r);
    }
    //static fields
    static sum(c,d) { return c.plus(d);}
    static product(c,d) { return c.times(d);}
    //getter methods
    get real(){ return this.r; }
    get imaginary() { return this.i ; }
    get magnitude() { return Math.hypot(this.r,this.i); }
    // tostring method
    toString() { return `{${this.r},${this.i}}`;}
    //equals Method
    equals(that)
    {
        return that instanceof Complex && that.r === this.r && that.i === this.i ;
    }
}

Complex.ZERO = new Complex(0,0);
let c = new Complex(2,3);
let d = new Complex(c.i , c.r);
c.plus(d).toString();
c.magnitude;
Complex.product(c,d);
Complex.ZERO.toString();
