/// <reference types="multer" />
/// <reference types="node" />
import { ConfigService } from '@nestjs/config';
import { Model } from 'mongoose';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { Task, TaskDocument } from './task.schema';
export declare class TaskService {
    private s3;
    private readonly taskModel;
    private readonly configService;
    constructor(s3: any, taskModel: Model<TaskDocument>, configService: ConfigService);
    create(file: Express.Multer.File, body: CreateTaskDto, user_id: string): Promise<Task>;
    findById(id: string): Promise<any>;
    getAllItems(): Promise<(Task & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    })[]>;
    getLimitedItems(limit: number, pageNumber: number): Promise<any>;
    update(_id: string, updateTaskDto: UpdateTaskDto): Promise<Task>;
    delete(id: string): Promise<boolean>;
    uploadPublicFile(dataBuffer: Buffer, filename: string): Promise<{
        key: string;
        url: string;
    }>;
}
