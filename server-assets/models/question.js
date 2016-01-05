import thinky from 'thinky'({db: 'truth-or-truth'});
import User from './user';

const type = thinky.type;

const Question = thinky.createModel('Question', {
  id: type.string(),
  question: type.string(),
  status: type.string().enum(['submitted', 'asked', 'archived']),
});

Question.hasAndBelongsToMany('')
