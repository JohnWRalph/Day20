
type user = {
    name: string;
    favoritedShows: string[]
}



function isFavorite (user:user,show:string) {
    if (user.favoritedShows.length > 10) {
        throw Error("too many favorite shows, im not checking, fml.")
    }if (user.favoritedShows.length <= 2 ) {
        throw Error ("not worth my time to check")
    }
    if (user.favoritedShows.includes(show)) {
        return true
    } else {
        return false
    }
}

export default isFavorite