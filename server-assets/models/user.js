import thinky from 'thinky'({db: 'truth-or-truth'});
import Game from './models/game';

const type = thinky.type;

const User = thinky.createModel('User', {
  id: type.string(),
  name: type.string(),
  facebookId: type.string(),
});

User.hasAndBelongsToMany(Game, 'games', 'id', 'id');

export User;
