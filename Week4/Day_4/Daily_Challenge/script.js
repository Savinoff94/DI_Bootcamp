class Video{
    constructor(title, uploader, time){
        this.title = title;
        this.uploader = uploader;
        this.time = time;
    }
    watch(){
        console.log(`${this.uploader} watched all ${this.time} of ${this.title}`);
    }
}

let LotR = new Video("LotR", "some", "2001");
LotR.watch();

let hp = new Video("Harry Potter", "someone", "2005");
hp.watch();