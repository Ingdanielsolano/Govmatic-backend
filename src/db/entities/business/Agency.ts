import { Column, Entity, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import { Package } from "./Package";
import { Grant } from "./Grant";

@Entity("agency", { schema: "business" })
export class Agency {

    @PrimaryGeneratedColumn({ type: "bigint", name: "id" })
    id: String;

    @Column("character varying", { name: "name", length: 100, nullable: true })
    name: String;

    @Column("character varying", { name: "code", length: 45, unique: true })
    code: String;

    @Column("character varying", { name: "image", length: 45, unique: true })
    image: String;

    @Column("character varying", { name: "address", length: 200, nullable: true })
    address: String;

    @Column("character varying", { name: "contact", length: 100, nullable: true })
    contact: String;

    @Column("character varying", { name: "email", length: 100, nullable: true })
    email: String;

    @OneToMany(() => Grant, (grant: Grant) => grant.agency, { onDelete: 'CASCADE', onUpdate: 'CASCADE' })
    grants: Grant[];

    @OneToMany(() => Package, (packages: Package) => packages.agency, { onDelete: 'CASCADE', onUpdate: 'CASCADE' })
    packages: Package[];
}
