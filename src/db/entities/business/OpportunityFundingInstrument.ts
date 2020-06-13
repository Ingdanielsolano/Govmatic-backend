import { Entity, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from "typeorm";
import { Opportunity } from "./Opportunity";
import { FundingInstrument } from "./FundingInstrument";

@Entity("opportunity-funding_instrument", { schema: "business" })
export class OpportunityFundingInstrument {

    @PrimaryGeneratedColumn({ type: "bigint", name: "id" })
    id: string;

    @ManyToOne(() => Opportunity, (opportunity: Opportunity) => opportunity.applicationTypes, { onDelete: 'CASCADE', onUpdate: 'CASCADE' })
    @JoinColumn({ name: 'opportunity' })
    opportunity: Opportunity;

    @ManyToOne(() => FundingInstrument, (fundingInstrument: FundingInstrument) => fundingInstrument.opportunities, { onDelete: 'CASCADE', onUpdate: 'CASCADE' })
    @JoinColumn({ name: 'funding_instrument' })
    fundingInstrument: FundingInstrument;

}
