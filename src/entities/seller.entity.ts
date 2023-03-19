import { BeforeInsert, Column, Entity, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { hashSync } from "bcryptjs"

@Entity('sellers')
class Seller {
    @PrimaryGeneratedColumn("uuid")
    id: string

    @Column({ type: "varchar", nullable: false })
    name: string

    @Column({ type: "varchar", nullable: false, unique: true })
    cnpj: string

    @Column({ type: "varchar", nullable: false, unique: true })
    email: string

    @Column({ type: "varchar", nullable: false, length: 120 })
    password: string

    @Column({ type: "decimal", nullable: true, default: 0, precision: 100, scale: 2 })
    wallet: number

    @BeforeInsert()
    createPassword() {
        const password = this.password
        if (password) {
            return hashSync(password, 10)
        }
    }

}
export default Seller
