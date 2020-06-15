import { Column, Entity, PrimaryGeneratedColumn, ManyToOne, OneToMany, JoinColumn } from "typeorm";

import { OpportunityApplicationType } from "./OpportunityApplicationTypes";

@Entity("applicant_type", { schema: "business" })
export class ApplicantType {

    @PrimaryGeneratedColumn({ type: "bigint", name: "id" })
    id: string;

    @Column("character varying", { name: "description", length: 250 })
    description: String;

    @Column("int", { name: "code" })
    code: String;

    @OneToMany(() => OpportunityApplicationType, (opportunityApplicationType: OpportunityApplicationType) => opportunityApplicationType.applicantTypes, { onDelete: 'CASCADE', onUpdate: 'CASCADE' })
    opportunities: OpportunityApplicationType[];

}
