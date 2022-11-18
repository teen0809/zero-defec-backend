/// <reference types="multer" />
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { Task } from './task.schema';
import { TaskService } from './task.service';
export declare class TaskController {
    private readonly taskService;
    constructor(taskService: TaskService);
    create(req: any, body: CreateTaskDto, file: Express.Multer.File): Promise<Task>;
    getTasks(pagenumber: number, limit: number): Promise<any>;
    update(_id: string, body: UpdateTaskDto): Promise<Task>;
    delete(_id: string): Promise<boolean>;
}
