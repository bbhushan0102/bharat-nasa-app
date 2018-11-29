searchObj (catRecord, 'Manchester')

const searchObj = (item, searchItem) =>{
  //base case
  if(typeof item !== 'object' && item.includes(searchItem)) return true;

    for (let key in item) {
      if(typeof obj[key] === 'object')
        searchObj(obj[key], searchItem);
    }
}