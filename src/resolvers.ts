
const books = [
    {
        title: 'The Awakening',
        author: '100',
    },
    {
        title: 'City of Glass',
        author: '101',
    },
    {
        title: 'City of Wine',
        author: '101',
    },
];

const authros = [
    {
        id: '100',
        name: 'Kate Chopin',
    },
    {
        id: '101',
        name: 'Paul Auster',
    },
];

export const resolvers = {
    Query: {
        books: () => books,
        authorBooks: (parent, args) => books.filter(book => {
            return book.author == args.id
        })
    },
    Mutation: {
        addBook: (parent, args) => {
            let id = generateId()
            if(args.book.author!!) {
                authros.push({id: id, name: args.book.author})
            }
            if(args.book.title!!) {
                books.push({title: args.book.title, author: id})
            }

            return books.filter( book => book.author == id)[0]
        }

    },
    Book: {
        author: (args) => authros.find(s => {
            console.log("calling author service")
            return s.id == args.author
        })
    }

};

function generateId() {
    let min = Math.ceil(102)
    let max = Math.floor(10001)
    return Math.floor(Math.random() * (max - min) + min).toString()
}