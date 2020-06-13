import { Column, Entity, PrimaryGeneratedColumn, ManyToOne, OneToMany, JoinColumn } from "typeorm";
import { Opportunity } from "./Opportunity";
import { ApplicationType } from "./ApplicationType";

@Entity("opportunity-application_type", { schema: "business" })
export class OpportunityApplicationType {

    @PrimaryGeneratedColumn({ type: "bigint", name: "id" })
    id: string;
    
    @ManyToOne(() => Opportunity, (opportunity: Opportunity) => opportunity.applicationTypes, { onDelete: 'CASCADE', onUpdate: 'CASCADE' })
    @JoinColumn({ name: 'opportunity' })
    opportunity: Opportunity;

    @ManyToOne(() => ApplicationType, (applicationType: ApplicationType) => applicationType.opportunities, { onDelete: 'CASCADE', onUpdate: 'CASCADE' })
    @JoinColumn({ name: 'applicationType' })
    applicationType: ApplicationType;

}
