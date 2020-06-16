import { Column, Entity, PrimaryGeneratedColumn, OneToMany } from "typeorm";

import { OpportunityApplicantType } from "./OpportunityApplicantTypes";

@Entity("applicant_type", { schema: "business" })
export class ApplicantType {

    @PrimaryGeneratedColumn({ type: "bigint", name: "id" })
    id: string;

    @Column("character varying", { name: "description", length: 250 })
    description: String;

    @Column("int", { name: "code" })
    code: String;

    @OneToMany(() => OpportunityApplicantType, (opportunityApplicantType: OpportunityApplicantType) => opportunityApplicantType.applicantTypes, { onDelete: 'CASCADE', onUpdate: 'CASCADE' })
    opportunities: OpportunityApplicantType[];

}
