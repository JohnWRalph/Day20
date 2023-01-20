import subtract from "./subtract"

test("subtracts a number from another number then returns the resukt", function () {
    const x:number = 420;
    const y:number = 69;
    expect(subtract(x,y)).toBe(351)
})