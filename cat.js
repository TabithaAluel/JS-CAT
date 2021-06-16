var lisaLab = {
    name: "bar",
    func: function() {
        var self = this;
        console.log("outer func:  this.name = " + this.name);
        console.log("outer func:  self.name = " + self.name);
        (function() {
            console.log("inner func:  this.name = " + this.name);
            console.log("inner func:  self.name = " + self.name);
        }());
    }
};

lisaLab.func();

//outer func: this.name=bar
//outer func: self.name=bar
//inner func: this.name=undefined
//inner func: self.name=bar


//the code will be the one above because this identifier refers to the object name which is bar
// and thats 
//why bar in the outer is the output the inner function becomes undefined because 
//it has not been declared. This are nested functions



//this identifier has been used as an object