import { createEvent, createStore } from 'effector';
import { UserDto } from '@my-app/types';

export const loginEffector = createEvent<UserDto>();

export const $userEffector = createStore<UserDto | null>(null);

$userEffector.on(loginEffector, (user) => user);
