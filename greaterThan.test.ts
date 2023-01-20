import greaterThan from "./greaterThan";

test("check if a number is greater than another number, if true return true, else return false", function() {
    const x:number = 70;
    const y:number = 50;
    expect(greaterThan(x,y)).toBe(true)
})