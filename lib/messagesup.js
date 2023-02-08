/*export const MESSAGE_GROWTH = Math.pow(Math.PI / Math.E, 1.618) * Math.E * .75;

export function messageRange(level) {
  if (level < 0) {
    throw new TypeError('level cannot be negative value');
  }
  
  level = Math.floor(level);
  let min = level === 0 ? 0 : Math.round(Math.pow(level, MESSAGE_GROWTH)) + 1;
  let max = Math.round(Math.pow(++level, MESSAGE_GROWTH));
  
  return {
    min,
    max,
    messages: max - min
  };
}

export function findLevelByMessages(person, messages) {
  if (messages <= 0) {
    return -1;
  }
  
  let level = 0;
  do {
    level++;
  } while (messageRange(level).min <= messages / person.length);
  
  return --level;
}

export function canLevelUpByMessages(person, level, messages) {
  if (level < 0) {
    return false;
  }
  
  if (messages <= 0) {
    return false;
  }
  
  return level < findLevelByMessages(person, messages);
}

export function addMessage(person) {
  person.messages = (person.messages || 0) + 1;
  return person;
}
*/