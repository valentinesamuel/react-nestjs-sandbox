import { Injectable } from '@nestjs/common';
import { CreateLabscientistDto } from './dto/create-labscientist.dto';
import { UpdateLabscientistDto } from './dto/update-labscientist.dto';

@Injectable()
export class LabscientistService {
  create(createLabscientistDto: CreateLabscientistDto) {
    return 'This action adds a new labscientist';
  }

  findAll() {
    return `This action returns all labscientist`;
  }

  findOne(id: number) {
    return `This action returns a #${id} labscientist`;
  }

  update(id: number, updateLabscientistDto: UpdateLabscientistDto) {
    return `This action updates a #${id} labscientist`;
  }

  remove(id: number) {
    return `This action removes a #${id} labscientist`;
  }
}
