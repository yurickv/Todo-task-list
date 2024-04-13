import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

export type TaskStatus = 'Planned' | 'InProgress' | 'Done';

@Entity({ name: 'tasks' })
export class Task {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  title: string;

  @Column({ type: 'text', nullable: true })
  description: string;

  @Column({
    type: 'enum',
    enum: ['Planned', 'InProgress', 'Done'],
    default: 'Planned',
  })
  status: TaskStatus;
}
