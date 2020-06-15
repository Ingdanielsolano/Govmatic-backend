import { Column, Entity, PrimaryGeneratedColumn, ManyToOne, OneToMany, JoinColumn } from "typeorm";
import { Opportunity } from "./Opportunity";
import { FundingCategoryActivity } from "./FundingCategoryActivity";

@Entity("opportunity-funding_category_activity", { schema: "business" })
export class OpportunityFundingCategoryActivity {

    @PrimaryGeneratedColumn({ type: "bigint", name: "id" })
    id: string;
    
    @ManyToOne(() => Opportunity, (opportunity: Opportunity) => opportunity.fundingCategoryActivities, { onDelete: 'CASCADE', onUpdate: 'CASCADE' })
    @JoinColumn({ name: 'opportunity' })
    opportunity: Opportunity;

    @ManyToOne(() => FundingCategoryActivity, (fundingCategoryActivity: FundingCategoryActivity) => fundingCategoryActivity.opportunities, { onDelete: 'CASCADE', onUpdate: 'CASCADE' })
    @JoinColumn({ name: 'funding_category_activity' })
    fundingCategoryActivity: FundingCategoryActivity;

}
