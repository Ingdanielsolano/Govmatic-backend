import { Column, Entity, PrimaryGeneratedColumn, ManyToOne, OneToMany, JoinColumn } from "typeorm";
import { Opportunity } from "./Opportunity";
import { Package } from "./Package";
import { OpportunityCfdas } from "./OpportunityCfdas";

@Entity("cfdas", { schema: "business" })
export class Cfdas {

    @PrimaryGeneratedColumn({ type: "bigint", name: "id" })
    id: string;

    @Column("character varying", { name: "number", length: 45 })
    number: String;

    @Column("character varying", { name: "programTitle", length: 250 })
    programTitle: String;

    @ManyToOne(() => Opportunity, (opportunity: Opportunity) => opportunity.cfdas, { onDelete: 'CASCADE', onUpdate: 'CASCADE' })
    @JoinColumn({ name: 'opportunity' })
    opportunity: Opportunity;

    @OneToMany(() => Package, (packages: Package) => packages.cfdas, { onDelete: 'CASCADE', onUpdate: 'CASCADE' })
    packages: Package[];

    @OneToMany(() => OpportunityCfdas, (cfdas: OpportunityCfdas) => cfdas.cfdas, { onDelete: 'CASCADE', onUpdate: 'CASCADE' })
    opportunities: OpportunityCfdas[];
}
