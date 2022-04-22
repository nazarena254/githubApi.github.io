export class Repository {
    constructor(
        public id: number,
        public name: string,
        public forks: number,
        public language: string,
        public html_url: string,
        public created_at: Date,
    ){}
}
