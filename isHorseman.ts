function isHorseman(x:string):boolean {
    if (x === "horseman") {
        return true
    } else {
        throw Error('String is not "horseman"')
    }
}export default isHorseman