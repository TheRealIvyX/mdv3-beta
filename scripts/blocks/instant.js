let instant = extend(ItemTurret, "instant", {});
let bullet = extend(MissileBulletType, {
  speed: 20,
  damage: 370,
  homingPower: 0,
  ammoMultiplier: 1,
  collidesGround: false,
  lifetime: 10,
  width: 11,
  height: 11,
  hitSize: 10,
  trailChance: 1,
  trailColor: Color.valueOf("#7575C8"),
  backColor: Color.valueOf("#7575C8"),
  frontColor: Color.valueOf("#919FE7"),
  update(b) {
    if (Math.round(b.time) == 4) {
      let target = Units.bestEnemy(b.team, b.x, b.y, 200, (e) => {return !e.dead && !e.isGrounded()}, UnitSorts.weakest)
      if (target != null) {
        b.lifetime += 5
        let angle = Math.atan2(target.y - b.y, target.x - b.x)
        b.vel.x = Math.cos(angle)*20
        b.vel.y = Math.sin(angle)*20
      }
    }
    this.super$update(b);
  },
  hitEntity(b, entity, health) {
    if (entity instanceof Unit) {
      b.damage *= Math.max(0.1,Math.min(1.5,1.5-((entity.maxHealth-1100)/2400)))
    }
    this.super$hitEntity(b, entity, health);
    if (entity instanceof Unit) {
      b.damage /= Math.max(0.1,Math.min(1.5,1.5-((entity.maxHealth-1100)/2400)))
    }
  }
})
instant.ammo(
  Items.tungsten, bullet
);