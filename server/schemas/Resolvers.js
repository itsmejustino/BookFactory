import { Book, User } from '../models'
import { signToken } from '../utils/auth'
import { AuthenticationError } from 'apollo-server-express';

export const resolvers = {
    Query:{
        user: async(parent,{ _id })=>{
            const params = _id ? { _id } : {};
            return User.find(params)
        }
    },
    Mutation:{
        createUser: async(parent,{ username, email, password })=>{
            const user = await User.create({ username, email, password });
            const token = signToken(user);
            return token, user
        },

        login: async(parent,args)=>{


        },
        
        saveBook: async(parent,args)=>{

        },

        deleteBook: async(parent,args)=>{
            
        },

    },


}