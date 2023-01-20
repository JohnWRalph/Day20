import isHorseman from "./isHorseman";

test("takes a string a checks if it is 'horseman'", function () {
    const horseman:string = "horseman";
    expect(isHorseman(horseman)).toBe(true)
})