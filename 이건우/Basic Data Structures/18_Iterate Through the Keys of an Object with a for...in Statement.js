const users = {
    Alan: {
      online: false
    },
    Jeff: {
      online: true
    },
    Sarah: {
      online: false
    }
  }
  
  function countOnline(usersObj) {
    let count = 0 ;
    for(let user in usersObj) {
      // console.log(user) Alan, Jeff, Sarah
    //   if(user.online === true){
      if(usersObj[user].online === true){
        count ++;  
      }
    }
    return count ;
  }
  
  console.log(countOnline(users));