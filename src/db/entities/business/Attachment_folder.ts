import { Column, Entity, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import { Attachment } from "./Attachment";

@Entity("attachment_folder", { schema: "business" })
export class AttachmentFolder {

    @PrimaryGeneratedColumn({ type: "bigint", name: "id" })
    id: Number;

    @Column("character varying", { name: "type", length: 100, nullable: true })
    type: String;

    @Column("character varying", { name: "name", length: 100, nullable: true })
    name: String;

    @Column("character varying", { name: "number", length: 100, nullable: true })
    number: String;

    @Column("date", { name: "last_updated_date", })
    lastUpdatedDate: String;

    @OneToMany(() => Attachment, (attachment: Attachment) => attachment.attachmentFolder, { onDelete: 'CASCADE', onUpdate: 'CASCADE' })
    attachments: Attachment[];
}
