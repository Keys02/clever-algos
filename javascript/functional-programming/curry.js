function makeAdjectifier(adjective) {
    return function(noun) {
        return adjective + " " + noun
    }
}

makeAdjectifierES6 = (adjective) => {
    return (noun) => {
        return adjective + " " + noun
    }
}

makeAjectifierES6OneLiner = (adjective) => (noun) => adjective + " " + noun
// Currying
const coolify = makeAdjectifier("cool")
console.log(coolify("workshop"))
console.log(coolify("drink"))
console.log(makeAdjectifier("Cool")("Keys"))

//Composing functions
const makeItCool = makeAjectifierES6OneLiner("Cool")
const makeItAmazing = makeAjectifierES6OneLiner("Amazing")
const makeItInteresting = makeAjectifierES6OneLiner("Interesting")

let cool = (x) => makeItCool(makeItInteresting(makeItAmazing(x)))
let cool2 = (x) => makeItInteresting(makeItAmazing(makeItCool(x)))
console.log(cool("FP"))
console.log(cool2("Ruby"))