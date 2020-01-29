module.exports = [
  {
    type: 'confirm',
    name: 'private',
    message: 'Is this repo private?'
  },
  {
    type: 'input',
    name: 'author',
    message: 'Author?'
  },
  {
    type: 'input',
    name: 'description',
    message: 'Description?'
  },
  {
    type: 'input',
    name: 'license',
    message: 'License?',
    default: 'MIT'
  },
]