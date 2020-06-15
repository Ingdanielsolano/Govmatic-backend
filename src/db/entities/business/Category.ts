import { Column, Entity, PrimaryGeneratedColumn, ManyToOne, OneToMany, JoinColumn } from "typeorm";
import { Opportunity } from "./Opportunity";

@Entity("category", { schema: "business" })
export class Category {

    @PrimaryGeneratedColumn({ type: "bigint", name: "id" })
    id: string;

    @Column("character varying", { name: "name", length: 45 })
    name: String;

    @Column("character varying", { name: "description", length: 100 })
    description: String;

    @OneToMany(() => Opportunity, (opportunity: Opportunity) => opportunity.category, { onDelete: 'CASCADE', onUpdate: 'CASCADE' })
    opportunities: Opportunity[];

}
