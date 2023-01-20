import add from "./add";

test("It can add two numbers together, and return the sum", function() {
    const x:number =1;
    const y:number = 2;
    expect(add(x,y)).toBe(3);
})