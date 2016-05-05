import {sumLog} from "./sumlog";

function identity<T>(x: T): T {
    return x;
}

let x: number = identity(1);
let y: number = identity(2);

sumLog(x, y);
