export default interface Enemy {
  takeDamage: () => number
}

export abstract class EnemyDecorator implements Enemy {

  protected readonly enemy: Enemy

  constructor(enemy: Enemy) {
    this.enemy = enemy
  }

  takeDamage(): number {
    return this.enemy.takeDamage();
  }
}

export class BaseEnemy implements Enemy {

  takeDamage = () => 10
}

export class DifficultEnemy implements Enemy {

  takeDamage = () => 20
}
