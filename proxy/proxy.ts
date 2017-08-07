// Virtual Proxy

interface IImage {
    displayImage(): void;
}

class RealImage implements IImage {
    private fileName: string;
    constructor(fileName: string){
        this.fileName = fileName;
        this.loadFromDisk();
    }

    private loadFromDisk(): void {
        console.log(`Loading ${this.fileName}...`);
    }

    public displayImage(): void {
        console.log(`Displaying ${this.fileName}...`);
    }
}

@test
class ProxyImage implements IImage {
    private image: RealImage = null;
    private filename: string;
    constructor(fileName: string) {
        this.filename = fileName;
    }

    public displayImage(): void {
        if (this.image === null){
            this.image = new RealImage(this.filename);
        }
        this.image.displayImage();
    }
}

function main() {
    var image1: IImage = new ProxyImage("HiRes_10MB_Photo1");
    var image2: IImage = new ProxyImage("HiRes_10MB_Photo2");

    image1.displayImage(); 
    image1.displayImage();
    image2.displayImage(); 
    image2.displayImage();
    image1.displayImage();
};

main();

function test(target){
    console.log(target);
}