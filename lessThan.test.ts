import lessThan from "./lessThan";

test("Check if a number is less than another number, return true if true, else return false", function () {
    const x:number = 50;
    const y:number = 70;
    expect(lessThan(x,y)).toBe(true)
})