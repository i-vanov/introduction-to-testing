import { describe, it, expect } from 'vitest';
import { Character } from './character.js';
import { Person } from './person.js';

const firstName = "Ada";
const lastName = "Lovelace";
const role = "Computer Scientist";

describe('Character', () => {
  it(
    'should create a character with a first name, last name, and role',
    () => {
      const character = new Character(firstName, lastName, role, 1, () => 15);

      expect(character).toEqual(
        expect.objectContaining({
        firstName,
        lastName,
        role,
      })
    )

      expect(character).toEqual({
        firstName,
        lastName,
        role,
        strength: expect.any(Number),
        wisdom: expect.any(Number),
        dexterity: expect.any(Number),
        intelligence: expect.any(Number),
        charisma: expect.any(Number),
        constitution: expect.any(Number),
        level: 1,
        lastModified: expect.any(Date),
        createdAt: expect.any(Date),
        id: expect.stringContaining("person-")
      })
      // Minimal assertions so that the test passes
      // expect(character.firstName).toBe('Ada');
      // expect(character.lastName).toBe('Lovelace');
      // expect(character.role).toBe('Computer Scientist');
    },
  );

  it('should allow you to increase the level', () => {
    const character = new Character(firstName, lastName, role);
    const initialLevel = character.level;

    character.levelUp();
    expect(character.level).toBeGreaterThan(initialLevel);
  });

  it('should update the last modified date when leveling up', () => {
    const character = new Character(firstName, lastName, role);
    const tempLastModifiedDate = character.lastModified;
    character.levelUp();
    expect(character.lastModified).not.toBe(tempLastModifiedDate);
  });
});
