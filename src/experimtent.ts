import 'dotenv/config';

export function sayHello() {
    console.log('hi')
}
export function sayGoodbye() {
    console.log('goodbye')
    console.log(process.env.PROJECT)
}