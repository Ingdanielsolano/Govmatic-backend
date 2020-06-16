import { Entity, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from "typeorm";
import { Opportunity } from "./Opportunity";
import { FundingInstrument } from "./FundingInstrument";
import { Cfdas } from "./Cfdas";

@Entity("opportunity-cfdas", { schema: "business" })
export class OpportunityCfdas {

    @PrimaryGeneratedColumn({ type: "bigint", name: "id" })
    id: string;

    @ManyToOne(() => Opportunity, (opportunity: Opportunity) => opportunity.fundingInstruments, { onDelete: 'CASCADE', onUpdate: 'CASCADE' })
    @JoinColumn({ name: 'opportunity' })
    opportunity: Opportunity;

    @ManyToOne(() => Cfdas, (cfdas: Cfdas) => cfdas.opportunities, { onDelete: 'CASCADE', onUpdate: 'CASCADE' })
    @JoinColumn({ name: 'cfdas' })
    cfdas: Cfdas;

}
