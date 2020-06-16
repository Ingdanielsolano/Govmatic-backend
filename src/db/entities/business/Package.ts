import { Column, Entity, PrimaryGeneratedColumn, ManyToOne, OneToMany, JoinColumn } from "typeorm";
import { Opportunity } from "./Opportunity";
import { Agency } from "./Agency";
import { GrantPackage } from "./GrantPackage";
import { Cfdas } from "./Cfdas";

@Entity("package", { schema: "business" })
export class Package {

    @PrimaryGeneratedColumn({ type: "bigint", name: "id" })
    id: string;

    @Column("character varying", { name: "number", length: 45 })
    number: String;

    @Column("character varying", { name: "title", length: 250 })
    title: String;

    @Column("date", { name: "opening_date" })
    openingDate: String;

    @Column("date", { name: "closing_date" })
    closingDate: String;

    @Column("character varying", { name: "package_id", length: 45 })
    packageId: String;

    @ManyToOne(() => Agency, (agency: Agency) => agency.packages, { onDelete: 'CASCADE', onUpdate: 'CASCADE' })
    @JoinColumn({ name: 'agency' })
    agency: Agency;

    @ManyToOne(() => Cfdas, (cfdas: Cfdas) => cfdas.packages, { onDelete: 'CASCADE', onUpdate: 'CASCADE' })
    @JoinColumn({ name: 'cfdas' })
    cfdas: Cfdas;

    @OneToMany(() => GrantPackage, (grantPackage: GrantPackage) => grantPackage.package, { onDelete: 'CASCADE', onUpdate: 'CASCADE' })
    grantPackage: GrantPackage[];

    @Column("character varying", { name: "competition_id", length: 250 })
    competitionId: String;

    @Column("character varying", { name: "competition_title", length: 250 })
    competitionTitle: String;

}
