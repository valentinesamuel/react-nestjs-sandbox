import { PartialType } from '@nestjs/mapped-types';
import { CreateLabscientistDto } from './create-labscientist.dto';

export class UpdateLabscientistDto extends PartialType(CreateLabscientistDto) {}
