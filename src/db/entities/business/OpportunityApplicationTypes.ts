import { Column, Entity, PrimaryGeneratedColumn, ManyToOne, OneToMany, JoinColumn } from "typeorm";
import { Opportunity } from "./Opportunity";
import { ApplicantType } from "./ApplicantTypes";

@Entity("opportunity-application_type", { schema: "business" })
export class OpportunityApplicationType {

    @PrimaryGeneratedColumn({ type: "bigint", name: "id" })
    id: string;
    
    @ManyToOne(() => Opportunity, (opportunity: Opportunity) => opportunity.applicantTypes, { onDelete: 'CASCADE', onUpdate: 'CASCADE' })
    @JoinColumn({ name: 'opportunity' })
    opportunity: Opportunity;

    @ManyToOne(() => ApplicantType, (applicantTypes: ApplicantType) => applicantTypes.opportunities, { onDelete: 'CASCADE', onUpdate: 'CASCADE' })
    @JoinColumn({ name: 'applicantTypes' })
    applicantTypes: ApplicantType;

}
