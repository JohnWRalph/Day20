import divide from "./divide"

test("It can divide two numbers, and return the result", function() {
    const x:number = 12345;
    const y:number = 5;
    expect(divide(x,y)).toBe(2469);
})

