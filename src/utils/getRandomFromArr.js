const getRamdonFromArr = array => {
    const indexRandom = Math.floor(Math.random() * array.length)
    return array[indexRandom]
}
export default getRamdonFromArr 