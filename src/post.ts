export class Post {
    title: string;
    content: string;
    loveIts: number;
    date: Date;

    constructor(t:string, c:string, li:number) {
        this.title = t;
        this.content = c;
        this.loveIts = li;
        this.date = new Date(Date.now());
    }
}
