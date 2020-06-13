import { Column, Entity, PrimaryGeneratedColumn, ManyToOne, JoinColumn, OneToMany } from "typeorm";
import { Agency } from "./Agency";
import { Category } from "./Category";
import { Cfdas } from "./Cfdas";
import { OpportunityApplicationType } from "./OpportunityApplicationTypes";
import { OpportunityFundingInstrument } from "./OpportunityFundingInstrument";
import { OpportunityFundingCategoryActivity } from "./OpportunityFundingCategoryActivity";


@Entity("opportunity", { schema: "business" })
export class Opportunity {

    @PrimaryGeneratedColumn({ type: "bigint", name: "id" })
    id: string;

    @Column("character varying", { length: 100, name: "title" })
    title: string;

    @Column("character varying", { length: 45, name: "number" })
    number: string;

    @Column("date", { name: "openDate" })
    openDate: Date;

    @Column("date", { name: "closeDate" })
    closeDate: Date;

    @Column("character varying", { length: 45, name: "status" })
    status: string;

    @Column("text", { name: 'synopsisDesc' })
    synopsisDesc: string;

    @Column("date", { name: "responseDate" })
    responseDate: string;

    @Column("character varying", { length: 100, name: "fundingDescLinkUrl" })
    fundingDescLinkUrl: string;

    @Column("character varying", { length: 45, name: "fundingDescLinkDesc" })
    fundingDescLinkDesc: string;

    @Column("date", { name: "postingDate" })
    postingDate: string;

    @Column("date", { name: "archiveDate" })
    archiveDate: string;

    @Column("smallint", { name: 'costSharing' })
    costSharing: string;

    @Column("int", { name: 'numberOfAwards' })
    numberOfAwards: string;

    @Column("int", { name: 'estimatedFunding' })
    estimatedFunding: string;

    @Column("int", { name: 'awardCeiling' })
    awardCeiling: string;

    @Column("int", { name: 'awardFloor' })
    awardFloor: string;

    @Column("text", { name: 'applicationElegibilityDesc' })
    applicationElegibilityDesc: string;

    @Column("character varying", { length: 45, name: "docType" })
    docType: string;

    @ManyToOne(() => Agency, (agency: Agency) => agency.opportunities, { onDelete: 'CASCADE', onUpdate: 'CASCADE' })
    @JoinColumn({ name: 'agency' })
    agency: Agency;

    @ManyToOne(() => Category, (category: Category) => category.opportunities, { onDelete: 'CASCADE', onUpdate: 'CASCADE' })
    @JoinColumn({ name: 'category' })
    category: Category;

    @OneToMany(() => Cfdas, (cfdas: Cfdas) => cfdas.opportunity, { onDelete: 'CASCADE', onUpdate: 'CASCADE' })
    cfdas: Cfdas[];

    @OneToMany(() => OpportunityApplicationType, (applicationTypes: OpportunityApplicationType) => applicationTypes.opportunity, { onDelete: 'CASCADE', onUpdate: 'CASCADE' })
    applicationTypes: OpportunityApplicationType[];

    @OneToMany(() => OpportunityFundingCategoryActivity, (opportunityFundingCategoryActivity: OpportunityFundingCategoryActivity) => opportunityFundingCategoryActivity.opportunity, { onDelete: 'CASCADE', onUpdate: 'CASCADE' })
    fundingCategoryActivities: OpportunityFundingCategoryActivity[];

    @OneToMany(() => OpportunityFundingInstrument, (fundingInstrument: OpportunityFundingInstrument) => fundingInstrument.opportunity, { onDelete: 'CASCADE', onUpdate: 'CASCADE' })
    fundingInstruments: OpportunityFundingInstrument[];
}
