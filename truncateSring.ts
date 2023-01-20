function truncateString(string: string, maxLength: number): string {
    if (string.length > maxLength) {

        return string.slice(0, maxLength)
    } else {

        return string
    }
}

export default truncateString