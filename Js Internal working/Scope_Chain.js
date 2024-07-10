const a = "Jonas";

first()

function first() {
    const b = "Hello";
    second();

    function second() {
        const c = "Hi";
        third()
    }
}

function third() {
    const d = "Hey";
    console.log(a, b, c, d);
}