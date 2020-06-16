import { Entity, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from "typeorm";
import { Opportunity } from "./Opportunity";
import { FundingInstrument } from "./FundingInstrument";
import { Package } from "./Package";
import { Grant } from "./Grant";

@Entity("grant-package", { schema: "business" })
export class GrantPackage {

    @PrimaryGeneratedColumn({ type: "bigint", name: "id" })
    id: string;

    @ManyToOne(() => Grant, (grant: Grant) => grant.grantPackage, { onDelete: 'CASCADE', onUpdate: 'CASCADE' })
    @JoinColumn({ name: 'grant' })
    grant: Grant;

    @ManyToOne(() => Package, (_package: Package) => _package.grantPackage, { onDelete: 'CASCADE', onUpdate: 'CASCADE' })
    @JoinColumn({ name: 'package' })
    package: Package;

}
