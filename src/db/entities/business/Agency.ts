import { Column, Entity, PrimaryGeneratedColumn, ManyToOne, OneToMany, JoinColumn } from "typeorm";
import { Opportunity } from "./Opportunity";
import { Package } from "./Package";

@Entity("agency", { schema: "business" })
export class Agency {

    @PrimaryGeneratedColumn({ type: "bigint", name: "id" })
    id: String;

    @Column("character varying", { name: "name", length: 100, nullable: true })
    name: String;

    @Column("character varying", { name: "code", length: 45, unique: true })
    code: String;

    @Column("character varying", { name: "addressDesc", length: 200, nullable: true })
    addressDesc: String;

    @Column("character varying", { name: "contactName", length: 100, nullable: true })
    contactName: String;

    @Column("character varying", { name: "contactEmail", length: 100, nullable: true })
    contactEmail: String;

    @Column("character varying", { name: "contactEmailDesc", length: 200, nullable: true })
    contactEmailDesc: String;

    @OneToMany(() => Opportunity, (opportunity: Opportunity) => opportunity.agency, { onDelete: 'CASCADE', onUpdate: 'CASCADE' })
    opportunities: Opportunity[];

    @OneToMany(() => Package, (packages: Package) => packages.agency, { onDelete: 'CASCADE', onUpdate: 'CASCADE' })
    packages: Package[];
}
