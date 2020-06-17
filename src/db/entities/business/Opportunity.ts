import { Column, Entity, PrimaryGeneratedColumn, ManyToOne, JoinColumn, OneToMany } from "typeorm";
import { Agency } from "./Agency";
import { Category } from "./Category";
import { Cfdas } from "./Cfdas";
import { OpportunityApplicantType } from "./OpportunityApplicantTypes";
import { OpportunityFundingInstrument } from "./OpportunityFundingInstrument";
import { OpportunityFundingCategoryActivity } from "./OpportunityFundingCategoryActivity";
import { Grant } from "./Grant";
import { OpportunityCfdas } from "./OpportunityCfdas";

@Entity("opportunity", { schema: "business" })
export class Opportunity {

    @PrimaryGeneratedColumn({ type: "bigint", name: "id" })
    id: Number;

    @Column("character varying", { length: 500, name: "title" })
    title: String;

    @Column("character varying", { length: 45, name: "number" })
    number: String;

    @ManyToOne(() => Category, (category: Category) => category.opportunities, { onDelete: 'CASCADE', onUpdate: 'CASCADE' })
    @JoinColumn({ name: 'category' })
    category: Category;

    @Column("int", { name: 'number_of_awards', nullable: true })
    numberOfAwards: Number;

    @Column("character varying", { name: 'cost_sharing', nullable: true })
    costSharing: String;

    @Column("date", { name: "posting_date" })
    postingDate: String;

    @Column("date", { name: "last_update_date", default:'NOW()' })
    lastUpdateDate: String;

    @Column("date", { name: "response_date", nullable: true })
    responseDate: String;

    @Column("date", { name: "response_date_desc", nullable: true })
    responseDateDesc: String;

    @Column("date", { name: "archive_date", nullable: true })
    archiveDate: String;

    @Column("int", { name: 'award_ceiling', nullable: true })
    awardCeiling: String;

    @Column("int", { name: 'estimated_funding', nullable: true })
    estimatedFunding: String;

    @Column("int", { name: 'award_floor', nullable: true })
    awardFloor: String;

    @Column("text", { name: 'applicant_elegibility_desc', nullable: true })
    applicantElegibilityDesc: String;

    @Column("text", { name: 'synopsis_desc', nullable: true })
    synopsisDesc: String;

    @OneToMany(() => OpportunityCfdas, (cfdas: OpportunityCfdas) => cfdas.opportunity, { onDelete: 'CASCADE', onUpdate: 'CASCADE' })
    cfdas: OpportunityCfdas[];

    @OneToMany(() => OpportunityApplicantType, (applicationTypes: OpportunityApplicantType) => applicationTypes.opportunity, { onDelete: 'CASCADE', onUpdate: 'CASCADE' })
    applicantTypes: OpportunityApplicantType[];

    @OneToMany(() => OpportunityFundingCategoryActivity, (opportunityFundingCategoryActivity: OpportunityFundingCategoryActivity) => opportunityFundingCategoryActivity.opportunity, { onDelete: 'CASCADE', onUpdate: 'CASCADE' })
    fundingCategoryActivities: OpportunityFundingCategoryActivity[];

    @OneToMany(() => OpportunityFundingInstrument, (fundingInstrument: OpportunityFundingInstrument) => fundingInstrument.opportunity, { onDelete: 'CASCADE', onUpdate: 'CASCADE' })
    fundingInstruments: OpportunityFundingInstrument[];

    @ManyToOne(() => Grant, (grant: Grant) => grant.opportunities, { onDelete: 'CASCADE', onUpdate: 'CASCADE' })
    @JoinColumn({ name: 'grant' })
    grant: Grant;

    @ManyToOne(() => Agency, (agency: Agency) => agency.opportunities, { onDelete: 'CASCADE', onUpdate: 'CASCADE' })
    @JoinColumn({ name: 'agency' })
    agency: Agency;
}
