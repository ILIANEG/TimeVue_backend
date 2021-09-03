import { Knex } from "knex";
import { UserTable } from '../../src/api/models/User/IUser.interface'

exports.seed = function(knex: Knex) {
  // Deletes ALL existing entries
  return knex(UserTable.name).del()
    .then(function () {
      // Inserts seed entries
      return knex(UserTable.name).insert([
        {id: 'aQ6wDHp3gE', email: 'vallie_wintheiser6@yahoo.com', firstName: 'Vallie', lastName: 'Wintheiser'},
        {id: '3WKQkDDd4H', email: 'callie_schmidt51@hotmail.com', firstName: 'Callie', lastName: 'Schmidt'},
        {id: 'dLHJCHP8mU', email: 'amy_hettinger38@yahoo.com', firstName: 'Amy', lastName: 'Hettinger'},
        {id: 'phBNYjCzXT', email: 'fatima.jones@gmail.com', firstName: 'Fatima', lastName: 'Jones'},
        {id: 'VDQXaVSq3x', email: 'tina36@hotmail.com', firstName: 'Tina', lastName: 'Hembridge'},
        {id: 'iEL2Hn3mfM', email: 'meta7@gmail.com', firstName: 'Michael', lastName: 'Slowder'},
        {id: 'DtH3frZdVj', email: 'elody35@yahoo.com', firstName: 'Elliot', lastName: 'Krane'},
        {id: 'an65UH6xzx', email: 'garret.hintz@yahoo.com', firstName: 'Garret', lastName: 'Hintz'},
        {id: 'AXJaac4nax', email: 'tom43@yahoo.com', firstName: 'Thomas', lastName: 'Grass'},
        {id: 'HSRayzx8fh', email: 'joan_grant@gmail.com', firstName: 'Joan', lastName: 'Grant', subscribed: true}
      ]);
    });
};
