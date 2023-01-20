import isFavorite from "./isFavorite";

type user = {
    name: string;
    favoritedShows: string[]
}



test("tests the isFavorite function which checks if the amount of favorited shows is greater than 2 and 10 or less then returns true if show is already in array of favorites", function() {
    const Yahoo:user = {
        name: "Yahoo",
        favoritedShows: ["Dragonball","Rick and Morty","Seinfeld", "Black Mirror","The Midnight Gospel","Parts Unkown",
        "Trailer Park Boys","Chapelle's Show","Peaky Blinders","Futurama"]
    } 
    const show:string = "Seinfeld";
    expect(isFavorite(Yahoo,show)).toBe(true)
})