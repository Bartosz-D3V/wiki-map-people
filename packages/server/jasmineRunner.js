import Jasmine from 'jasmine';

const jasmine = new Jasmine();

jasmine.loadConfig({
  spec_dir: '.',
  spec_files: ['**/*spec.js'],
  stopSpecOnExpectationFailure: false,
  random: true,
});

let context = (...args) => describe(...args);

global.context = context;

jasmine.execute();
