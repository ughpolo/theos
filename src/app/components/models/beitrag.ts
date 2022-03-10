export class Beitrag {
    constructor(
        public pathname: string,
        public title: string,
        public location: string,
        public image: string,
        public author: string,
        public date: string,
        public markers: any[][],
        public fulltitle: string,
        public locationCat?: string,
    ) { }
}