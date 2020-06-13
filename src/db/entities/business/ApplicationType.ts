import { Column, Entity, PrimaryGeneratedColumn, ManyToOne, OneToMany, JoinColumn } from "typeorm";

import { OpportunityApplicationType } from "./OpportunityApplicationTypes";

@Entity("application_type", { schema: "business" })
export class ApplicationType {

    @PrimaryGeneratedColumn({ type: "bigint", name: "id" })
    id: string;

    @Column("character varying", { name: "description", length: 250 })
    description: string;

    @Column("int", { name: "code" })
    code: string;

    @OneToMany(() => OpportunityApplicationType, (opportunityApplicationType: OpportunityApplicationType) => opportunityApplicationType.applicationType, { onDelete: 'CASCADE', onUpdate: 'CASCADE' })
    opportunities: OpportunityApplicationType[];

}
