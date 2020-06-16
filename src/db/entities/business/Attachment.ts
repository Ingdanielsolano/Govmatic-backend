import { Column, Entity, PrimaryGeneratedColumn, OneToMany, ManyToOne, JoinColumn } from "typeorm";
import { Package } from "./Package";
import { Grant } from "./Grant";
import { AttachmentFolder } from "./Attachment_folder";

@Entity("attachment", { schema: "business" })
export class Attachment {

    @PrimaryGeneratedColumn({ type: "bigint", name: "id" })
    id: Number;

    @Column("character varying", { name: "number", length: 100, nullable: true })
    number: String;

    @Column("character varying", { name: "name", length: 100, nullable: true })
    name: String;

    @Column("character varying", { name: "description", length: 250, nullable: false })
    description: String;

    @ManyToOne(() => AttachmentFolder, (attachmentFolder: AttachmentFolder) => attachmentFolder.attachments, { onDelete: 'CASCADE', onUpdate: 'CASCADE' })
    @JoinColumn({ name: 'attachment_folder' })
    attachmentFolder: AttachmentFolder;

    @ManyToOne(() => Grant, (grant: Grant) => grant.attachments, { onDelete: 'CASCADE', onUpdate: 'CASCADE' })
    @JoinColumn({ name: 'grant' })
    grant: Grant;

}
