import thinky from 'thinky'({db: 'truth-or-truth'});
import User from './user';

const type = thinky.type;

const Game = thinky.createModel('Game', {
  id: type.string(),
  hatId: type.string(),
  status: type.string().enum(['active', 'archived']),
});

Game.hasAndBelongsToMany(User, 'players', 'id', 'id');

export Game;
