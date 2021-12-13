import { EnemyDecorator } from './enemy'

export class HelmetDecorator extends EnemyDecorator {

  takeDamage(): number {
    return this.enemy.takeDamage() / 2
  }
}
