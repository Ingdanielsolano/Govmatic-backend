import { Column, Entity, PrimaryGeneratedColumn, ManyToOne, JoinColumn, OneToMany } from "typeorm";
import { Agency } from "./Agency";
import { Attachment } from "./Attachment";
import { Package } from "./Package";
import { GrantPackage } from "./GrantPackage";
import { Opportunity } from "./Opportunity";


@Entity("grant", { schema: "business" })
export class Grant {

    @PrimaryGeneratedColumn({ type: "bigint", name: "id" })
    id: Number;

    @Column("character varying", { name: "number", length: 50 })
    number: String;

    @Column("character varying", { length: 500, name: "title" })
    title: String;

    @Column("character varying", { length: 500, name: "status" })
    status: String;

    @ManyToOne(() => Agency, (agency: Agency) => agency.grants, { onDelete: 'CASCADE', onUpdate: 'CASCADE' })
    @JoinColumn({ name: 'agency' })
    agency: Agency;

    @ManyToOne(() => Agency, (agency: Agency) => agency.grants, { onDelete: 'CASCADE', onUpdate: 'CASCADE' })
    @JoinColumn({ name: 'top_agency' })
    topAgency: Agency;

    @OneToMany(() => Attachment, (attachment: Attachment) => attachment.grant, { onDelete: 'CASCADE', onUpdate: 'CASCADE' })
    attachments: Attachment[];

    @OneToMany(() => GrantPackage, (grantPackage: GrantPackage) => grantPackage.grant, { onDelete: 'CASCADE', onUpdate: 'CASCADE' })
    grantPackage: GrantPackage[];

    @Column("date", { name: "last_update" })
    lastUpdate: String;

    @OneToMany(() => Opportunity, (opportunity: Opportunity) => opportunity.grant, { onDelete: 'CASCADE', onUpdate: 'CASCADE' })
    opportunities: Opportunity[];
}
