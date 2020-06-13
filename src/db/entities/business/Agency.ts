import { Column, Entity, PrimaryGeneratedColumn, ManyToOne, OneToMany, JoinColumn } from "typeorm";
import { Opportunity } from "./Opportunity";
import { Package } from "./Package";

@Entity("agency", { schema: "business" })
export class Agency {

    @PrimaryGeneratedColumn({ type: "bigint", name: "id" })
    id: string;

    @Column("character varying", { name: "name", length: 100 })
    name: string;

    @Column("character varying", { name: "code", length: 45 })
    code: string;

    @Column("character varying", { name: "addressDesc", length: 200 })
    addressDesc: Date;

    @Column("character varying", { name: "contactName", length: 100 })
    contactName: Date;

    @Column("character varying", { name: "contactEmail", length: 100 })
    contactEmail: string;

    @Column("character varying", { name: "contactEmailDesc", length: 200 })
    contactEmailDesc: string;

    @OneToMany(() => Opportunity, (opportunity: Opportunity) => opportunity.agency, { onDelete: 'CASCADE', onUpdate: 'CASCADE' })
    opportunities: Opportunity[];

    @OneToMany(() => Package, (packages: Package) => packages.agency, { onDelete: 'CASCADE', onUpdate: 'CASCADE' })
    packages: Package[];
}
