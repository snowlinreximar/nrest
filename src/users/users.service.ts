import { ConflictException, Injectable } from '@nestjs/common';
import { User } from './interfaces/user.interface';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class UsersService {
    constructor(@InjectModel('User') private readonly userModel:Model<User>) {}

    async findAll(): Promise<User[]> {
        return await this.userModel.find();
    }

    async findOne(id: string): Promise<User> {
        return await this.userModel.findOne({ _id: id}, 'password emailid');
    }

    async create(user: User): Promise<User> {
        const newUser = new this.userModel(user);
        return await newUser.save();
    }

    async findExisting(user: User): Promise<User> {
        const existUser =  await this.userModel.findOne({ emailid: user.emailid});
        if (existUser) throw new ConflictException('User Exists');
        return this.create(user);
    }
    

    async delete(id: string): Promise<User>{
        return await this.userModel.findByIdAndRemove(id);
    }

    async update(id: string, user: User): Promise<User>{
        return await this.userModel.findByIdAndUpdate(id, user, {new: true})
    }
}
