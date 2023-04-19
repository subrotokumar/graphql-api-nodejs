const typeDefs = `
    type User {
        id: ID!
        name: String!
        username: String!
        age: Int!
        nationality: Nationality!
        friends: [User]
        favoriteMovies: [Movie]
    }

    type Movie {
        id: ID!
        name: String!
        releaseYear: Int!
        isInTheaters: Boolean!
    }

    type Query {
        users: [User!]!
        user(id: ID!): User!
        movies: [Movie!]!
        movie(name: String!): Movie!
    }
    
    input CreateUserInput {
        name: String!
        username: String!
        age: Int!
        nationality: Nationality = INDIA
    }
    type Mutation {
        createUser(user: CreateUserInput!): User
    }

    enum Nationality {
        CANADA
        BRAZIL
        INDIA
        GERMANY
        USA
    }
`;

export { typeDefs }