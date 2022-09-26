//define the data types of the models for the schema

//import graphql from apollo server
import { gql } from 'apollo-server-express'

const typeDefs = gql`
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
        username: !String,
        email: !String,
        password: !String,
        savedBooks: [Book]
    }

    type Query {
        getSingleUser()

    }

    type Mutation {


    }
`
