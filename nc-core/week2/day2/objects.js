const emp = {
    firstName: 'Avi',
    lastName: 'Flombaum',
    company: {
      name: 'Flatbook Labs',
      jobTitle: 'Developer Apprentice'
    },
    friends: [{
      firstName: 'Joe',
      lastName: 'Burgess',
      company: {
        name: 'Flatbook Labs',
        jobTitle: 'Developer Apprentice'
      }
    },
    {
      firstName: 'Gabe',
      lastName: 'Jackson',
      company: {
        name: 'Flatbook Labs',
        jobTitle: 'Lead Developer'
      }
    }],
    projects: [{
      title: 'Flatbook',
      description: 'The premier Flatiron School-based social network in the world.'
    },
    {
      title: 'Scuber',
      description: 'A burgeoning startup helping busy parents transport their children to and from all of their activities on scooters.'
    }]
  };
  
  for(let prop in emp){
      let count =0;
      if(typeof(emp)=== 'object') {
          console.log();
          
      } else {
          console.log(count);
      }
  }


  