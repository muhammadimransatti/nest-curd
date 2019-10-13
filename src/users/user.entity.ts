import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    code:number;

    @Column({ length: 25 }) 
    dealer_name:string;
}
