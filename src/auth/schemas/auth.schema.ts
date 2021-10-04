import * as mongoose from 'mongoose';

export const AuthSchema = new mongoose.Schema({
    password: String,
    emailid: String
    
});

