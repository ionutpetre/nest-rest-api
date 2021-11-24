import { Injectable } from '@nestjs/common';
import { ResourceService } from '../common/resource.service';
import { User } from './user.resource';

@Injectable()
export class UsersService extends ResourceService {
  constructor() {
    super('user');
  }

  public getAll(): User[] {
    return super.getAll();
  }

  public getOne(id: string): User {
    return super.getOne(id);
  }

  public addOne(user: User): User {
    return super.addOne(user);
  }

  public updateOne(id: string, user: User): User {
    return super.updateOne(id, user);
  }

  public deleteOne(id: string): void {
    super.deleteOne(id);
  }
}
