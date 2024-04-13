import { IsEnum, IsNotEmpty, IsString } from 'class-validator';

export class CreateTaskDto {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsNotEmpty()
  description: string;

  @IsEnum(['Planned', 'InProgress', 'Done'], {
    message: 'Valid status required',
  })
  status: 'Planned' | 'InProgress' | 'Done';
}
