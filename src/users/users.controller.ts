import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  NotFoundException,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { User } from './user.resource';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get()
  getAll(): User[] {
    return this.usersService.getAll();
  }

  @Get(':id')
  getOne(@Param('id') id: string): User {
    const user = this.usersService.getOne(id);
    if (!user) {
      throw new NotFoundException();
    }
    return user;
  }

  @Post()
  @HttpCode(201)
  addOne(@Body() userDto: User): User {
    return this.usersService.addOne(userDto);
  }

  @Put(':id')
  updateOne(@Param('id') id: string, @Body() userDto: User): User {
    const user = this.usersService.getOne(id);
    if (!user) {
      throw new NotFoundException();
    }
    return this.usersService.updateOne(id, userDto);
  }

  @Delete(':id')
  @HttpCode(204)
  deleteOne(@Param('id') id: string) {
    const user = this.usersService.getOne(id);
    if (!user) {
      throw new NotFoundException();
    }
    this.usersService.deleteOne(id);
  }
}
