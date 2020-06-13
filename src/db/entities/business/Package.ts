import { Column, Entity, PrimaryGeneratedColumn, ManyToOne, OneToMany, JoinColumn } from "typeorm";
import { Opportunity } from "./Opportunity";
import { Agency } from "./Agency";

@Entity("package", { schema: "business" })
export class Package {

    @PrimaryGeneratedColumn({ type: "bigint", name: "id" })
    id: string;

    @Column("character varying", { name: "number", length: 45 })
    number: string;

    @Column("character varying", { name: "title", length: 250 })
    title: string;

    @Column("date", { name: "openingDate" })
    openingDate: Date;

    @Column("date", { name: "closingDate" })
    closingDate: Date;

    @Column("character varying", { name: "description", length: 100 })
    description: string;

    @OneToMany(() => Opportunity, (opportunity: Opportunity) => opportunity.category, { onDelete: 'CASCADE', onUpdate: 'CASCADE' })
    opportunities: Opportunity[];

    @ManyToOne(() => Agency, (agency: Agency) => agency.opportunities, { onDelete: 'CASCADE', onUpdate: 'CASCADE' })
    @JoinColumn({ name: 'agency' })
    agency: Agency;

}
