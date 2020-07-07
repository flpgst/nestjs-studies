import {Entity, Column, PrimaryGeneratedColumn} from 'typeorm'

@Entity()
export class Maratona {
  @PrimaryGeneratedColumn()
  id: number;
  
  @Column()
  name: string;

  @Column()
  guest: string;

  @Column()
  time: Date;

  
}