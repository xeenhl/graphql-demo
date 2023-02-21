
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
            console.log("calling Books service")
            return book.author == args.id
        })
    },
    Mutation: {
        addBook: (parent, args) => {
            let id = Math.random().toString()
            if(args.input.author!!) {
                authros.push({id: id, name: args.input.author})
            }
            if(args.input.title!!) {
                books.push({title: args.input.title, author: id})
            }
        }

    },
    Book: {
        author: (args) => authros.find(s => {
            console.log("calling author service")
            return s.id == args.author
        })
    }

};