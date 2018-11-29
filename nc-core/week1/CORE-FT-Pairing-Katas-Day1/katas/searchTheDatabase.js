/*
  Warning: this is one of the harder katas for this day. It is recommended you complete the others before attempting this. 

  The searchTheDatabase function should use the batmanData file from the data folder. 

  Write a function, called searchTheDatabase, which takes three arguments. The first is the database itself. The second is a predicate function. Any films that pass the truth test of the predicate function will be placed into the final array. 

  The final argument is an array of keys that the objects within the new array should contain. 

  Eg. 
  
  var truthTest = function (film) {
    return film.robin;
  }

  searchTheDatabase(database, truthTest, ['title', 'year']); 

  --> 
  [
    {
      title: 'Batman Forever',
      year: 1995 
    },
    {
      title: 'Batman & Robin',
      year: 1997
    },
    {
      title: 'The Dark Knight Rises',
      year: 2012
    }
  ]

*/

function searchTheDatabase () {

}

module.exports = searchTheDatabase;