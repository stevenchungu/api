import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm'


@Entity()
export class PersonalityQuestion {
@PrimaryGeneratedColumn()
  id: number;

  @Column()
  question: String;

  @Column()
  agreeType: String;

  @Column()
  denialType: String;
}
