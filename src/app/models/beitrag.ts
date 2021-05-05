export class Beitrag{
    constructor(
        public title: string,
        public location: string,
        public image: string,
        public author: string,
        public date: string,
        public locationCat?: string,
    ){}
}