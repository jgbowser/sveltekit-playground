import { publish } from 'gh-pages';

publish(
  'build', // path to public directory, set by the adapter
  {
    branch: 'gh-pages',
    repo: 'https://github.com/jgbowser/sveltekit-playground.git',
    user: {
      name: 'John Bowser',
      email: 'john.bow7720@gmail.com'
    },
    message: 'deploy to gh-pages, auto-generated commit'
  },
  (err) => {
    if (err) {
      console.error(`ERROR: ${err}`)
    } else {
      console.log('Deploy Complete!🚀')
    }
  } 
)