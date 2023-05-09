import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Req,
} from '@nestjs/common';

import { Request } from 'express';
import { UserService } from './user.service';
import { UpdateUserDto } from './dto/user-update.dto';
import { CreateUserDto } from './dto/user-create.dto';

@Controller('user')
export class UserController {
  //   private userService;

  //   constructor() {
  //     this.userService = new UserService();
  //   }
  constructor(private userService: UserService) {}
  @Get()
  getUser() {
    return this.userService.get();
    // return { name: 'Levis', email: 'kithi@fgmd.com' };
  }

  @Post()
  store(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }

  @Patch('/:userId')
  update(
    @Body() updateUserDto: UpdateUserDto,
    @Param('userId', ParseIntPipe) userId: number,
  ) {
    return this.userService.update(updateUserDto, userId);
  }

  @Get('/:userId')
  getUsers(@Param('userId', ParseIntPipe) userId: number) {
    return this.userService.show(userId);
  }

  @Delete('/:userId')
  deleteUser(@Param('userId', ParseIntPipe) userId: number) {
    return this.userService.delete(userId);
  }
}
