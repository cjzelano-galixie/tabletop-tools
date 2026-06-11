/**
 * A wizard can cast a spell if they have the spell prepared.
 * They can also cast it from a scroll even if it is not prepared.
 * @param {boolean} isSpellPrepared - whether the spell is prepared
 * @param {boolean} hasScroll - whether the wizard has a scroll of the spell
 * @returns {boolean} whether the wizard can cast the spell
 */
function canCastSpell(isSpellPrepared, hasScroll) {
  // does the wizard have a spell or scroll?
  if (typeof isSpellPrepared !== "boolean" || typeof hasScroll !== "boolean") {
    return "Please input true or false!";
  }
  // } else if (isSpellPrepared !== true && hasScroll !== true) {
  //   return "You have no spell prepared and no scroll, you're doomed!";
  // } else if (hasScroll === true && isSpellPrepared === true) {
  //   return "You got the spell and a scroll, choose one and use it now!";
  // } else if (isSpellPrepared === true) {
  //   return "Good on you mate, you've got a spell preppared. Use it now!";
  // } else {
  //   return "Thankfully, you have a scroll. Use it now!";
  // }
  return isSpellPrepared === true || hasScroll === true;
}

console.log(canCastSpell(true, true)); // true
console.log(canCastSpell(false, false)); // false
console.log(canCastSpell(true, false)); // true
console.log(canCastSpell(false, true)); // true
console.log(canCastSpell("false", true)); // errpr

/**
 * A creature is hidden from an observer if it is actively hiding
 * or if the observer is not aware of it.
 * @param {boolean} hiding - whether the creature is actively hiding
 * @param {boolean} aware - whether the observer is aware of the creature
 * @returns {boolean} whether the creature is hidden from the observer
 */
function isHidden(hiding, aware) {
  // is the creature hidden from view?
  if (typeof hiding !== "boolean" || typeof aware !== "boolean") {
    return "Please input true or false!";
  }
  return hiding === true || aware !== true;
}

console.log(isHidden(true, true)); // true
console.log(isHidden(false, false)); // true
console.log(isHidden(true, false)); // true
console.log(isHidden(false, true)); // false
console.log(isHidden(true, 1)); // error

/**
 * A strike hits if the attack value is greater than or equal
 * to the target's armor class (AC).
 * @param {number} attack - the attack value
 * @param {number} ac - the armor class to beat
 * @returns {boolean} whether the strike hits
 */
function doesStrikeHit(attack, ac) {
  // does the strike land?
  if (typeof attack !== "number" || typeof ac !== "number") {
    return "Please enter in a number for attack and the armor class (ac)";
  }
  return attack >= ac;
}

console.log(doesStrikeHit(16, 5)); // true
console.log(doesStrikeHit(12, 12)); // true
console.log(doesStrikeHit(5, 12)); // false
console.log(doesStrikeHit(true, 20)); // error

/**
 * A strike is a critical hit if the attack value is at least
 * 10 greater than the target's armor class (AC).
 * @param {number} attack - the attack value
 * @param {number} ac - the armor class to beat
 * @returns {boolean} whether the strike is a critical hit
 */
function doesStrikeCrit(attack, ac) {
  // is the strike critical?
  if (typeof attack !== "number" || typeof ac !== "number") {
    return "Please enter in a number for attack and the armor class (ac)";
  }
  return attack > 10 + ac;
}

console.log(doesStrikeCrit(16, 5)); // true
console.log(doesStrikeCrit(5, 15)); // false
console.log(doesStrikeCrit("5", 20)); // error

/**
 * A creature can restore hit points (HP) by healing,
 * but its total HP cannot exceed its maximum HP.
 * @param {number} maxHp - maximum hit points
 * @param {number} currentHp - current hit points
 * @param {number} healAmount - amount to heal
 * @returns {number} total hit points after healing
 */
function heal(maxHp, currentHp, healAmount) {
  // total hit points after healing, they cannot be more than the max, but can heal all the way to max and not use remainder.
  if (
    typeof maxHp !== "number" ||
    typeof currentHp !== "number" ||
    typeof healAmount !== "number"
  ) {
    return "Please enter in a number for max hit points, the current hit points and the healed amount";
  }
  let healedHp = currentHp + healAmount;
  if (healedHp > maxHp) {
    return maxHp;
  } else {
    return healedHp;
  }
}

console.log(heal(100, 50, 25)); // 75
console.log(heal(100, 50, 125)); // 100
console.log(heal("100", 50, 5)); // error

/**
 * When a character uses a skill they have proficiency in,
 * they get to add a bonus to their attempt.
 *
 * | Rank       | Bonus     |
 * | ---        | ---       |
 * | untrained  | 0         |
 * | trained    | level + 2 |
 * | expert     | level + 4 |
 * | master     | level + 6 |
 * | legendary  | level + 8 |
 *
 * @param {number} level - level of the character
 * @param {string} rank - character's proficiency rank
 * @returns {number} the character's proficiency bonus
 */
function getProficiencyBonus(level, rank) {
  // give the bonus based on rank & level using addition.
  if (typeof level !== "number" || typeof rank !== "string") {
    return "Please enter your level as a number and your rank as a word.";
  }
  let bonus = 0;
  if (rank === "untrained") {
    bonus = 0; //not adding return to these because I do not want to exit the function!!
  } else if (rank === "trained") {
    bonus = 2;
  } else if (rank === "expert") {
    bonus = 4;
  } else if (rank === "master") {
    bonus = 6;
  } else if (rank === "legendary") {
    bonus = 8;
  } else {
    return "Invalid rank. Please choose untrained, trained, expert, master, or legendary.";
  }

  if (rank === "untrained") {
    return 0;
  }

  let proficiency = level + bonus;
  return proficiency;
}

console.log(getProficiencyBonus(10, "legendary")); // 18
console.log(getProficiencyBonus(13, "untrained")); // 0
console.log(getProficiencyBonus(true, "master")); // error
console.log(getProficiencyBonus(4, "train")); //error

/**
 * A creature can get a bonus to its armor class (AC) by taking cover.
 * If the creature is behind an obstacle, it gets a +2 bonus to its AC,
 * unless the creature is actively taking cover, in which case it gets
 * a +4 bonus to its AC.
 * A creature that is not behind an obstacle gets no bonus to its AC.
 * @param {boolean} behindObstacle - whether the creature is behind an obstacle
 * @param {boolean} takingCover - whether the creature is actively taking cover
 * @returns {number} the cover bonus to AC
 */
function getCoverBonus(behindObstacle, takingCover) {
  // cover = bonus to ac
  // behing obstacle = ac + 2
  // active cover = ac + 4
  // no cover = no bonus

  if (typeof behindObstacle !== "boolean" || typeof takingCover !== "boolean") {
    return "Please enter true or false for both inputs.";
  }

  let coverBonus = 0;
  const BEHIND_COVER_BONUS = 2;
  const ACTIVE_COVER_BONUS = 4;

  if (behindObstacle && takingCover) {
    coverBonus = ACTIVE_COVER_BONUS;
  } else if (behindObstacle) {
    coverBonus = BEHIND_COVER_BONUS;
  } else if (takingCover) {
    coverBonus = ACTIVE_COVER_BONUS;
  }
  return coverBonus;
}

console.log(getCoverBonus(true, true)); // 4
console.log(getCoverBonus(true, false)); // 2
console.log(getCoverBonus(false, true)); // 4
console.log(getCoverBonus(false, false)); // 0
console.log(getCoverBonus(false, "true")); // error

/**
 * A creature's current hit points (HP) is reduced by taking damage.
 * If the damage taken is greater than or equal to double its maximum
 * HP, the creature dies instantly.
 * A creature's HP cannot go below 0 unless it is dead.
 * @param {number} maxHp - maximum hit points
 * @param {number} currentHp - current hit points
 * @param {number} damage - damage taken
 * @returns {number} -1 if the creature dies instantly
 * @returns {number} 0 if the creature's HP drops to 0 or below
 * @returns {number} the creature's remaining HP after taking damage
 */
function getRemainingHp(maxHp, currentHp, damage) {
  if (
    typeof maxHp !== "number" ||
    typeof currentHp !== "number" ||
    typeof damage !== "number"
  ) {
    return "Please enter the max hp, current hp and damage as a number.";
  }

  let activeHp = currentHp - damage;
  let instaDeath = -1;
  let noHp = 0;

  if (damage >= 2 * maxHp) {
    return instaDeath;
  } else if (activeHp <= 0) {
    return noHp;
  } else {
    return activeHp;
  }
}

console.log(getRemainingHp(100, 45, 50)); // 0
console.log(getRemainingHp(100, 45, 200)); // -1
console.log(getRemainingHp(100, 45, 17)); // 28
console.log(getRemainingHp(100, "45", 17)); // error

// subtract damage from currentHP ---> NEW currentHP
// damage >= 2 * maxHp ---> creature dies instanly
// currentHP = -1 ---> Creature dies instantly ---> Return this
// currentHp <= 0 ---> Return this
// currentHp > 0 ---> Creature still alive with currentHP ---> Return this

/**
 * All creatures can see in bright light.
 * Creatures with low-light vision can also see in dim light.
 * Creatures with darkvision can see in all light conditions.
 * @param {string} light - light condition: "bright", "dim", or "dark"
 * @param {string} vision - vision type: "average", "low-light", or "dark"
 * @returns {boolean} whether the creature can see
 */
function canSee(light, vision) {
  // creature vision && light
  // bright light = all creatures see ---> Returns true
  // low-light vision = creatures see in dim light ---> low-light & dark ---> Returns true
  // darkvision = creatures see in all light conditions ---> dark ---> Returns true
  // return true / false can creature see?

  if (typeof light !== "string" || typeof vision !== "string") {
    return "Please enter an approved word for both inputs.";
  }

  if (light !== "bright" && light !== "dim" && light !== "dark") {
    return "Invalid input. Please use bright, dim, or dark to describe the light.";
  }

  if (vision !== "average" && vision !== "low-light" && vision !== "dark") {
    return "Invalid input. Please use average, low-light, or dark to describe the vision.";
  }

  let visible = false;

  if (light === "bright") {
    visible = true;
  } else if (light === "dim" && vision !== "average") {
    visible = true;
  } else if (light === "dark" && vision === "dark") {
    visible = true;
  }
  return visible;
}
console.log(canSee("bright", "average")); //true
console.log(canSee("dim", "average")); //false
console.log(canSee("dark", "low-light")); //false
console.log(canSee("dim", "dark")); //true
console.log(canSee("dark", "dark")); //true
console.log(canSee("dark", true)); //error
console.log(canSee("blight", "dark")); //error
console.log(canSee("bright", "low")); //error

/**
 * A strike deals damage if it hits, unless the strike is a critical hit,
 * in which case it deals double damage.
 * If the strike does not hit, it deals 0 damage.
 * Hint: you can use the functions you wrote above :)
 * @param {number} attack - the attack value
 * @param {number} ac - the armor class to beat
 * @param {number} damage - damage on a normal hit
 * @returns {number} damage dealt by the strike
 */
function getStrikeDamage(attack, ac, damage) {
  // strike hits = true ---> damage delt
  // strike is critical =  true ---> 2 * damage
  // strike hits = false ---> damage = 0
  // use functions above
  if (
    typeof attack !== "number" ||
    typeof ac !== "number" ||
    typeof damage !== "number"
  ) {
    return "Please enter a number for all three inputs.";
  }

  const NO_HIT = 0;
  const CRIT_MULTIPLIER = 2;

  let hit = doesStrikeHit(attack, ac);
  let crit = doesStrikeCrit(attack, ac);

  if (hit === true && crit === true) {
    return damage * CRIT_MULTIPLIER;
  } else if (hit) {
    return damage;
  } else {
    return NO_HIT;
  }
}

console.log(getStrikeDamage(16, 5, 18)); // 36
console.log(getStrikeDamage(20, 29, 6)); // 0
console.log(getStrikeDamage(16, 16, 26)); // 26
console.log(getStrikeDamage(true, 5, 10)); // error
