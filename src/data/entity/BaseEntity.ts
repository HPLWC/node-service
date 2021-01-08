import { PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm'

export default abstract class BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  public id: string

  @CreateDateColumn()
  public addTime: Date

  @UpdateDateColumn()
  public updateTime: Date

}
