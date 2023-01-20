import multiply from "./multiply"

test("It can multiply two numbers together, and return the product", function() {
    const x:number = 69;
    const y:number = 420;
    expect(multiply(x,y)).toBe(28980);
})