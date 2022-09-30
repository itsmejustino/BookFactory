//define the data types of the models for the schema

//import graphql from apollo server
import { gql } from 'apollo-server-express'

export const typeDefs = gql`
    type Book {
        _id: ID
        authors: [String]
        description: !String,
        bookId: !String,
        image: String,
        link: String,
        title: !String
    }

    type User {
        _id: ID
        username: !String,
        email: !String,
        password: !String,
        savedBooks: [Book]
    }

    type Query {
        getSingleUser(user: !ID, username: !String): User 
    }

    type Mutation {
        createUser(user: !ID, username: !String, password: !String): User
        login(username: !String, email: !String, password: !String): User
        saveBook(_id:String, savedBooks:[Book] ): User 
        deleteBook(_id:String, savedBooks:[Book]): User
        
    }
`
