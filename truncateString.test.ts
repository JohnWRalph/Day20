import truncateString from "./truncateSring";

test("tests if the string is less than the maximum truncated length", function () {

    const word:string = "A group of 8,880 degen pandas that are Not Gonna Make It. Their constant habit of longing tops and panic selling bottoms makes them a perfect candidate for the fast food industry.";
const maxLength:number = 30;
expect(truncateString(word,maxLength).length).toBeLessThanOrEqual(maxLength);
})