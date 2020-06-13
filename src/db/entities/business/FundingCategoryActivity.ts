import { Column, Entity, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import { OpportunityFundingInstrument } from "./OpportunityFundingInstrument";
                   
@Entity("funding_category_activity", { schema: "business" })
export class FundingCategoryActivity {

    @PrimaryGeneratedColumn({ type: "bigint", name: "id" })
    id: string;

    @Column("character varying", { name: "description", length: 100 })
    description: string;

    @Column("character varying", { name: "code", length: 45 })
    code: string;

    @OneToMany(() => OpportunityFundingInstrument, (opportunityFundingInstruments: OpportunityFundingInstrument) => opportunityFundingInstruments.fundingInstrument, { onDelete: 'CASCADE', onUpdate: 'CASCADE' })
    opportunities: OpportunityFundingInstrument[];

}
