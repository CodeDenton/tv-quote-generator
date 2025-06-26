const quotesArray = [
    {
        text: `"Just keep running, whatever you do don't look back, there is nothing there for you. Everything you need is in front of you."`,
        img: "images/bojackHorseman.jpg",
        title: "Bojack Horseman"
    },
    {
        text: `"The future is scary but you can't just run back to the past because it's familiar. Yes it's tempting but it's a mistake."`,
        img: "images/robinSherbatsky.png",
        title: "How I met your Mother"
    },
    {
        text: `"Whatever you do in this life, it is not legendary unless your friends are there to see it."`,
        img: "images/barneyStinson.jpg",
        title: "How I met your Mother"
    },
    {
        text: `"A tree falls the way it leans. Be careful which way you lean."`,
        img: "images/thelorax.jpg",
        title: "The Lorax"
    },
    {
        text: `"Dont't fear failure. Be afraid of not having the chance. You have the chance!"`,
        img: "images/cars.jpeg",
        title: "Cars"
    },
    {
        text: `"I believe the answer to that question, like the answer to most questions, is fuck you."`,
        img: "images/lip.jpg",
        title: "Shameless"
    },
    {
        text: `"Life is like a box of chocolates. You never know what you’re gonna get."`,
        img: "images/forestgump.jpg",
        title: "Forrest Gump (Forrest Gump, 1994):"
    },
    {
        text: `"You never really understand a person until you consider things from his point of view…until you climb into his skin and walk around in it."`,
        img: "images/mockingbird.jpg",
        title: "Atticus Finch (To Kill a Mockingbird, 1962)"
    },
    {
        text: `"Carpe diem. Seize the day, boys. Make your lives extraordinary."`,
        img: "images/deadpoets.jpeg",
        title: "John Keating (Dead Poets Society, 1989)"
    },
    {
        text: `"Love means never having to say you’re sorry."`,
        img: "images/jennyforestgump.jpg",
        title: "Jenny Curran (Forrest Gump, 1994)"
    },
    {
        text: `"Keep your friends close, but your enemies closer"`,
        img: "images/thegodfather.jpg",
        title: "Michael Corleone (The Godfather Part II, 1974)"
    },
    {
        text: `"Yippee-ki-yay, motherfucker."`,
        img: "images/diehard.jpg",
        title: "John McClane (Die Hard, 1988)"
    },
    {
        text: `"The first rule of Fight Club is: you do not talk about Fight Club."`,
        img: "images/fightclub.jpg",
        title: "Tyler Durden (Fight Club, 1999)"
    },
    {
        text: `"Hello. My name is Inigo Montoya. You killed my father. Prepare to die."`,
        img: "images/thebride.jpg",
        title: "Inigo Montoya (The Princess Bride, 1987)"
    },
    {
        text: `"With great power comes great responsibility."`,
        img: "images/spiderman.jpg",
        title: "Spider-Man / Peter Parker (Spider-Man, 2002)"
    },
    {
        text: `"Happiness can be found even in the darkest of times if one only remembers to turn on the light."`,
        img: "images/dumbledore.png",
        title: "Albus Dumbledore (Harry Potter and the Prisoner of Azkaban, 2004)"
    },
    {
        text: `"To infinity and beyond!."`,
        img: "images/buzz.jpg",
        title: "Buzz Lightyear (Toy Story, 1995)"
    },
    {
        text: `"Just keep swimming!"`,
        img: "images/dory.jpg",
        title: "Dory (Finding Dory, 2016)"
    }
]
const quote = document.getElementById("quote")
const img = document.getElementById("quote-img")
const quoteTitle = document.getElementById("quote-title")

const quoteSet = new Set();

function generateQuote() {

    while(true) {
        if(quoteSet.size >= quotesArray.length) quoteSet.clear()
        const randomNum = Math.floor(Math.random() * quotesArray.length)
        if(quoteSet.has(randomNum)) continue
        else {
            const randomQuote = quotesArray[randomNum]
            quote.innerHTML = randomQuote.text
            img.src = randomQuote.img
            img.classList.remove("hidden")
            quoteTitle.innerHTML = `— ${randomQuote.title}`
            quoteSet.add(randomNum)
            break
        }
    }

}