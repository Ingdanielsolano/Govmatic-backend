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
    id: Number;

    @Column("character varying", { length: 500, name: "title" })
    title: String;

    @Column("int", { name: "code" })
    code: Number;

    @Column("character varying", { length: 45, name: "number" })
    number: String;

    @Column("date", { name: "openDate" })
    openDate: String;

    @Column("date", { name: "closeDate", nullable: true })
    closeDate: String;

    @Column("character varying", { length: 45, name: "status" })
    status: String;

    @Column("text", { name: 'synopsisDesc', nullable: true })
    synopsisDesc: String;

    @Column("date", { name: "responseDate", nullable: true })
    responseDate: String;

    @Column("character varying", { length: 100, name: "fundingDescLinkUrl", nullable: true })
    fundingDescLinkUrl: String;

    @Column("character varying", { length: 45, name: "fundingDescLinkDesc", nullable: true })
    fundingDescLinkDesc: String;

    @Column("date", { name: "postingDate" })
    postingDate: String;

    @Column("date", { name: "archiveDate", nullable: true })
    archiveDate: String;

    @Column("character varying", { name: 'costSharing', nullable: true })
    costSharing: String;

    @Column("int", { name: 'numberOfAwards', nullable: true })
    numberOfAwards: String;

    @Column("int", { name: 'estimatedFunding', nullable: true })
    estimatedFunding: String;

    @Column("int", { name: 'awardCeiling', nullable: true })
    awardCeiling: String;

    @Column("int", { name: 'awardFloor', nullable: true })
    awardFloor: String;

    @Column("text", { name: 'applicationElegibilityDesc', nullable: true })
    applicationElegibilityDesc: String;

    @Column("character varying", { length: 45, name: "docType" })
    docType: String;

    @Column("date", { name: "last_update" })
    lastUpdate: String;

    @ManyToOne(() => Agency, (agency: Agency) => agency.opportunities, { onDelete: 'CASCADE', onUpdate: 'CASCADE' })
    @JoinColumn({ name: 'agency' })
    agency: Agency;

    @ManyToOne(() => Category, (category: Category) => category.opportunities, { onDelete: 'CASCADE', onUpdate: 'CASCADE' })
    @JoinColumn({ name: 'category' })
    category: Category;

    @OneToMany(() => Cfdas, (cfdas: Cfdas) => cfdas.opportunity, { onDelete: 'CASCADE', onUpdate: 'CASCADE' })
    cfdas: Cfdas[];

    @OneToMany(() => OpportunityApplicationType, (applicationTypes: OpportunityApplicationType) => applicationTypes.opportunity, { onDelete: 'CASCADE', onUpdate: 'CASCADE' })
    applicantTypes: OpportunityApplicationType[];

    @OneToMany(() => OpportunityFundingCategoryActivity, (opportunityFundingCategoryActivity: OpportunityFundingCategoryActivity) => opportunityFundingCategoryActivity.opportunity, { onDelete: 'CASCADE', onUpdate: 'CASCADE' })
    fundingCategoryActivities: OpportunityFundingCategoryActivity[];

    @OneToMany(() => OpportunityFundingInstrument, (fundingInstrument: OpportunityFundingInstrument) => fundingInstrument.opportunity, { onDelete: 'CASCADE', onUpdate: 'CASCADE' })
    fundingInstruments: OpportunityFundingInstrument[];
}
