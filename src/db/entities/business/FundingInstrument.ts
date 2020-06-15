import { Column, Entity, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import { OpportunityFundingInstrument } from "./OpportunityFundingInstrument";
                   
@Entity("funding_instrument", { schema: "business" })
export class FundingInstrument {

    @PrimaryGeneratedColumn({ type: "bigint", name: "id" })
    id: string;

    @Column("character varying", { name: "description", length: 100 })
    description: String;

    @Column("character varying", { name: "code", length: 50 })
    code: String;

    @OneToMany(() => OpportunityFundingInstrument, (opportunityFundingInstruments: OpportunityFundingInstrument) => opportunityFundingInstruments.fundingInstrument, { onDelete: 'CASCADE', onUpdate: 'CASCADE' })
    opportunities: OpportunityFundingInstrument[];

}
