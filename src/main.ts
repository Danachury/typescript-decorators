import { BaseEnemy } from './enemy'
import { HelmetDecorator } from './helmet'
import { ArmourDecorator } from './armour'

const enemy = new BaseEnemy()
const enemyWithHelmet = new HelmetDecorator(enemy)
const enemyWithHelmetAndArmour = new ArmourDecorator(enemyWithHelmet)

const computedDamageEnemyWithHelmet = enemyWithHelmet.takeDamage()
const computedDamageEnemyWithHelmetAndArmour = enemyWithHelmetAndArmour.takeDamage()

console.log(computedDamageEnemyWithHelmet)
console.log(computedDamageEnemyWithHelmetAndArmour)
