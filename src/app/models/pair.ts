import { Choice } from "./choice"
export class Pair {
    a: Choice;
    b: Choice;

    constructor(a: Choice, b: Choice) {
        this.a = a;
        this.b = b;
    }
}
