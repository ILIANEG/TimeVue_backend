import container from '../config/inversify.config'
import IUserModel from '../api/models/User/IUserModel.interface';
import Symbols from '../config/inversifySymbols'
import { Knex } from 'knex';

const userModel = container.get<IUserModel>(Symbols.UserModel);

afterAll(() => {
    container.get<Knex>(Symbols.Knex).destroy();
})

test('Retrieve all users from the database', async () => {
    await expect(userModel.read()).resolves.toEqual([
        {id: 'aQ6wDHp3gE', email: 'vallie_wintheiser6@yahoo.com', firstName: 'Vallie', lastName: 'Wintheiser', subscribed: false},
        {id: '3WKQkDDd4H', email: 'callie_schmidt51@hotmail.com', firstName: 'Callie', lastName: 'Schmidt', subscribed: false},
        {id: 'dLHJCHP8mU', email: 'amy_hettinger38@yahoo.com', firstName: 'Amy', lastName: 'Hettinger', subscribed: false},
        {id: 'phBNYjCzXT', email: 'fatima.jones@gmail.com', firstName: 'Fatima', lastName: 'Jones', subscribed: false},
        {id: 'VDQXaVSq3x', email: 'tina36@hotmail.com', firstName: 'Tina', lastName: 'Hembridge', subscribed: false},
        {id: 'iEL2Hn3mfM', email: 'meta7@gmail.com', firstName: 'Michael', lastName: 'Slowder', subscribed: false},
        {id: 'DtH3frZdVj', email: 'elody35@yahoo.com', firstName: 'Elliot', lastName: 'Krane', subscribed: false},
        {id: 'an65UH6xzx', email: 'garret.hintz@yahoo.com', firstName: 'Garret', lastName: 'Hintz', subscribed: false},
        {id: 'AXJaac4nax', email: 'tom43@yahoo.com', firstName: 'Thomas', lastName: 'Grass', subscribed: false},
        {id: 'HSRayzx8fh', email: 'joan_grant@gmail.com', firstName: 'Joan', lastName: 'Grant', subscribed: true}
    ]);
});

test('Find user by id', async () => {
    await expect(userModel.readById('iEL2Hn3mfM')).resolves.toEqual({
        id: 'iEL2Hn3mfM',
        email: 'meta7@gmail.com',
        firstName: 'Michael',
        lastName: 'Slowder',
        subscribed: false
    });
});

test('Find user by id, but user with such id does not exist in database', async () => {
    await expect(userModel.readById('pppppp')).resolves.toEqual(null);
});

test('Find user by first and last name', async () => {
    await expect(userModel.readByFirstLastName('Tina', 'Hembridge')).resolves.toEqual([{
        id: 'VDQXaVSq3x',
        email: 'tina36@hotmail.com',
        firstName: 'Tina',
        lastName: 'Hembridge',
        subscribed: false
    }]);
});

test('Find use by fist and last name, but user is not in database', async () => {
    await expect(userModel.readByFirstLastName('Tina', 'Grant')).resolves.toEqual([]);
});

test('Find user by first name', async () => {
    await expect(userModel.readByFirstName('Tina')).resolves.toEqual([
        {
            id: 'VDQXaVSq3x',
            email: 'tina36@hotmail.com',
            firstName: 'Tina',
            lastName: 'Hembridge',
            subscribed: false
        }
    ]);
});

test('Find user by first name, but user is not in database', async () => {
    await expect(userModel.readByFirstName('Jacob')).resolves.toEqual([]);
});

test('Find user by last name', async () => {
    await expect(userModel.readByLastName('Krane')).resolves.toEqual([
        {
            id: 'DtH3frZdVj',
            email: 'elody35@yahoo.com',
            firstName: 'Elliot',
            lastName: 'Krane',
            subscribed: false
        }
    ]);
});

test('Find user by last name, but user is not in database', async () => {
    await expect(userModel.readByLastName('Persy')).resolves.toEqual([]);
});

test('Find user by email', async () => {
    await expect(userModel.readByEmail('joan_grant@gmail.com')).resolves.toEqual({
        id: 'HSRayzx8fh',
        email: 'joan_grant@gmail.com',
        firstName: 'Joan',
        lastName: 'Grant',
        subscribed: true
    });
});


test('Find user by email, but user with such email is not in database', async () => {
    await expect(userModel.readByEmail('test@test.test')).resolves.toEqual(null);
});

test('Create new user', async () => {
    await expect(userModel.create({
        id: 'XgP4GhfVEt',
        email: 'berry.ratke@yahoo.com', 
        firstName: 'Berry', 
        lastName: 'Ratke',
        subscribed: false
    })).resolves.toEqual({
        id: 'XgP4GhfVEt',
        email: 'berry.ratke@yahoo.com', 
        firstName: 'Berry', 
        lastName: 'Ratke',
        subscribed: false
    })
    await expect(userModel.read()).resolves.toEqual([
        {id: 'aQ6wDHp3gE', email: 'vallie_wintheiser6@yahoo.com', firstName: 'Vallie', lastName: 'Wintheiser', subscribed: false},
        {id: '3WKQkDDd4H', email: 'callie_schmidt51@hotmail.com', firstName: 'Callie', lastName: 'Schmidt', subscribed: false},
        {id: 'dLHJCHP8mU', email: 'amy_hettinger38@yahoo.com', firstName: 'Amy', lastName: 'Hettinger', subscribed: false},
        {id: 'phBNYjCzXT', email: 'fatima.jones@gmail.com', firstName: 'Fatima', lastName: 'Jones', subscribed: false},
        {id: 'VDQXaVSq3x', email: 'tina36@hotmail.com', firstName: 'Tina', lastName: 'Hembridge', subscribed: false},
        {id: 'iEL2Hn3mfM', email: 'meta7@gmail.com', firstName: 'Michael', lastName: 'Slowder', subscribed: false},
        {id: 'DtH3frZdVj', email: 'elody35@yahoo.com', firstName: 'Elliot', lastName: 'Krane', subscribed: false},
        {id: 'an65UH6xzx', email: 'garret.hintz@yahoo.com', firstName: 'Garret', lastName: 'Hintz', subscribed: false},
        {id: 'AXJaac4nax', email: 'tom43@yahoo.com', firstName: 'Thomas', lastName: 'Grass', subscribed: false},
        {id: 'HSRayzx8fh', email: 'joan_grant@gmail.com', firstName: 'Joan', lastName: 'Grant', subscribed: true},
        {id: 'XgP4GhfVEt', email: 'berry.ratke@yahoo.com', firstName: 'Berry', lastName: 'Ratke', subscribed: false}
    ]);
});

test('Create new user, but user with given id already exist in database (violation of unique id constrain)', async () => {
    await expect(userModel.create({id: 'aQ6wDHp3gE', email: 'vallie_wintheiser6@yahoo.com', firstName: 'Vallie', lastName: 'Wintheiser', subscribed: false}))
    .rejects.toThrow();
    await expect(userModel.read()).resolves.toEqual([
            {id: 'aQ6wDHp3gE', email: 'vallie_wintheiser6@yahoo.com', firstName: 'Vallie', lastName: 'Wintheiser', subscribed: false},
            {id: '3WKQkDDd4H', email: 'callie_schmidt51@hotmail.com', firstName: 'Callie', lastName: 'Schmidt', subscribed: false},
            {id: 'dLHJCHP8mU', email: 'amy_hettinger38@yahoo.com', firstName: 'Amy', lastName: 'Hettinger', subscribed: false},
            {id: 'phBNYjCzXT', email: 'fatima.jones@gmail.com', firstName: 'Fatima', lastName: 'Jones', subscribed: false},
            {id: 'VDQXaVSq3x', email: 'tina36@hotmail.com', firstName: 'Tina', lastName: 'Hembridge', subscribed: false},
            {id: 'iEL2Hn3mfM', email: 'meta7@gmail.com', firstName: 'Michael', lastName: 'Slowder', subscribed: false},
            {id: 'DtH3frZdVj', email: 'elody35@yahoo.com', firstName: 'Elliot', lastName: 'Krane', subscribed: false},
            {id: 'an65UH6xzx', email: 'garret.hintz@yahoo.com', firstName: 'Garret', lastName: 'Hintz', subscribed: false},
            {id: 'AXJaac4nax', email: 'tom43@yahoo.com', firstName: 'Thomas', lastName: 'Grass', subscribed: false},
            {id: 'HSRayzx8fh', email: 'joan_grant@gmail.com', firstName: 'Joan', lastName: 'Grant', subscribed: true},
            {id: 'XgP4GhfVEt', email: 'berry.ratke@yahoo.com', firstName: 'Berry', lastName: 'Ratke', subscribed: false}
    ])
});

test('Delete existing user in database', async () => {
    await userModel.delete('aQ6wDHp3gE')
    await expect(userModel.read()).resolves.toEqual([
        {id: '3WKQkDDd4H', email: 'callie_schmidt51@hotmail.com', firstName: 'Callie', lastName: 'Schmidt', subscribed: false},
        {id: 'dLHJCHP8mU', email: 'amy_hettinger38@yahoo.com', firstName: 'Amy', lastName: 'Hettinger', subscribed: false},
        {id: 'phBNYjCzXT', email: 'fatima.jones@gmail.com', firstName: 'Fatima', lastName: 'Jones', subscribed: false},
        {id: 'VDQXaVSq3x', email: 'tina36@hotmail.com', firstName: 'Tina', lastName: 'Hembridge', subscribed: false},
        {id: 'iEL2Hn3mfM', email: 'meta7@gmail.com', firstName: 'Michael', lastName: 'Slowder', subscribed: false},
        {id: 'DtH3frZdVj', email: 'elody35@yahoo.com', firstName: 'Elliot', lastName: 'Krane', subscribed: false},
        {id: 'an65UH6xzx', email: 'garret.hintz@yahoo.com', firstName: 'Garret', lastName: 'Hintz', subscribed: false},
        {id: 'AXJaac4nax', email: 'tom43@yahoo.com', firstName: 'Thomas', lastName: 'Grass', subscribed: false},
        {id: 'HSRayzx8fh', email: 'joan_grant@gmail.com', firstName: 'Joan', lastName: 'Grant', subscribed: true},
        {id: 'XgP4GhfVEt', email: 'berry.ratke@yahoo.com', firstName: 'Berry', lastName: 'Ratke', subscribed: false}
    ]);    
})