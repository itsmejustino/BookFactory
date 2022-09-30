const { Book, User } = require('../models');
const { signToken } = require('../utils/auth');
const { AuthenticationError }= require('apollo-server-express');

const resolvers = {
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

module.exports = resolvers;