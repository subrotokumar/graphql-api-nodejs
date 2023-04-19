import { MovieList, User, UserList } from "../FakeData.js"
// import * as lodash from "lodash"

const resolvers = {
    Query: {
        users: () => {
            return UserList;
        },
        user: (parent, args) => {
            const id = args.id;
            const user = UserList.find(
                (v)=> v.id === Number(id)
            )
            return user;
        },
        movies: () => {
            return MovieList;
        },
        movie: (_, args)=>{
            const movieName: String = args.name;
            const movie = MovieList.find(
                (v)=> v.name === movieName
            )
            return movie;
        }
    },
    Mutation: {
        createUser: (parent, args) => {
            const user: User = args.user
            console.log(user)
            const lastId= UserList[UserList.length-1].id
            user.id = lastId + 1
            UserList.push(user);
            return user;
        }    
    }
}

export { resolvers }