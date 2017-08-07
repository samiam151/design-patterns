// Virtual Proxy
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var RealImage = (function () {
    function RealImage(fileName) {
        this.fileName = fileName;
        this.loadFromDisk();
    }
    RealImage.prototype.loadFromDisk = function () {
        console.log("Loading " + this.fileName + "...");
    };
    RealImage.prototype.displayImage = function () {
        console.log("Displaying " + this.fileName + "...");
    };
    return RealImage;
}());
var ProxyImage = (function () {
    function ProxyImage(fileName) {
        this.image = null;
        this.filename = fileName;
    }
    ProxyImage.prototype.displayImage = function () {
        if (this.image === null) {
            this.image = new RealImage(this.filename);
        }
        this.image.displayImage();
    };
    ProxyImage = __decorate([
        test
    ], ProxyImage);
    return ProxyImage;
}());
function main() {
    var image1 = new ProxyImage("HiRes_10MB_Photo1");
    var image2 = new ProxyImage("HiRes_10MB_Photo2");
    image1.displayImage();
    image1.displayImage();
    image2.displayImage();
    image2.displayImage();
    image1.displayImage();
}
;
main();
function test(target) {
    console.log(target);
}
