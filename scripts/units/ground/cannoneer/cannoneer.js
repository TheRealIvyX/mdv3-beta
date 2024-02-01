const CannonT1 = extend(UnitType, "cannoneer-mech", {});

CannonT1.constructor = () => extend(MechUnit, {});
CannonT1.immunities.add(StatusEffects.corroded);

Blocks.groundFactory.plans.add(new UnitFactory.UnitPlan(CannonT1, 60 * 25, ItemStack.with(Items.silicon, 30, Items.graphite, 15)));
