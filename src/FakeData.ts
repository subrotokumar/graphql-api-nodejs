const UserList = [
    {
        id: 1,
        name: "John",
        username: "john",
        age: 20,
        nationality: "CANADA",
        friends: [
            {
                id: 2,
                name: "Pedro",
                username: "PedroTech",
                age: 20,
                nationality: "BRAZIL"
            }
        ]
    },
    {
        id: 2,
        name: "Pedro",
        username: "PedroTech",
        age: 20,
        nationality: "BRAZIL"
    }, {
        id: 3,
        name: "Sarah",
        username: "Cameron",
        age: 25,
        nationality: "INDIA"
    }, {
        id: 4,
        name: "Refe",
        username: "Ref",
        age: 40,
        nationality: "GERMANY"
    }, {
        id: 5,
        name: "Stalin",
        username: "Joseph",
        age: 56,
        nationality: "USA"
    }

]

const MovieList = [
    {
        id: 1,
        name: 'Ready Player One',
        releaseYear: 1019,
        isInTheaters: true
    },
    {
        id: 2,
        name: 'Avengers5',
        releaseYear: 2025,
        isInTheaters: false
    }
]

export { UserList, MovieList }