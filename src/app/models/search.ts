export class Search {
	constructor(
        public site: string,
        public paymentmethod: string,
        public latitud: number,
        public longitud: number,
        public radius: number,
        public limit: number,
        public offset: number
	){}
}