export class User {
    constructor(
        public email: string,
        public password: string,
        public phone: number,
        public topic: string,
        public timePrefrence: string,
        public subscribe: boolean

    ) {}
}
