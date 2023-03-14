import { BeforeInsert, Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { hashSync } from "bcryptjs"

@Entity('users')
class User {
    @PrimaryGeneratedColumn("uuid")
    id: string

    @Column({ type: "varchar", nullable: false })
    name: string

    @Column({ type: "varchar", nullable: false, unique: true })
    cpf: string

    @Column({ type: "varchar", nullable: false, unique: true })
    email: string

    @Column({ type: "varchar", nullable: false, length: 120 })
    password: string

    @BeforeInsert()
    createPassword() {
        const password = this.password
        if (password) {
            return hashSync(password, 10)
        }
    }

}
export default User
