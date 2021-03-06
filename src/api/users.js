import { get } from './client';

function normalizeUsers(users) {
  return users.map(user => ({
    uid: user.id,
    name: user.name,
    email: user.email,
  }));
}

export function getUsers() {
  return get('/users').then(normalizeUsers);
}

function filterUser(user, query) {
  return user.name.toLowerCase().includes(query.toLowerCase());
}

export function getFilteredUsers(query, users) {
  return users.filter(user => filterUser(user, query));
}
