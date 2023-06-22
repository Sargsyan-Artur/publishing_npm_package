import 'dotenv/config';

declare global {
    var browser: string;
}

export function sayHello() {
    console.log('hi')
}

export function sayGoodbye() {
    console.log('goodbye')
    console.log(process.env.PROJECT)
    console.log("aa=====", browser)
}



