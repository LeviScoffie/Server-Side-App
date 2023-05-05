/* eslint-disable @typescript-eslint/adjacent-overload-signatures */
import {
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Req,
} from '@nestjs/common';

import { Request } from 'express';

@Controller()
export class AppController {
  @Get()
  getUser() {
    return { name: 'Levis', email: 'kithi@fgmd.com' };
  }

  @Post()
  store(@Req() req: Request) {
    console.log(req);
    return req;
  }

  @Patch('/:userId')
  update(@Req() req: Request) {
    return req.body;
  }

  @Get('/:userId')
  getUsers(@Param() _params: { userid: number }) {
    return _params;
  }

  @Delete('/:userId')
  deleteUser(@Param() _params: { userid: number }) {
    return _params;
  }
}

//These are are the CRUD-related operations.
