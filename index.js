function saturdayFun(actionWord="roller-skate"){
    return `This Saturday, I want to ${actionWord}!`
  }
  
  function mondayWork(activity="go to the office"){
    return `This Monday, I will ${activity}.`
  }
  
  function wrapAdjective(highlight){
      return function newfunc(adjective){
        return `You are ${highlight}${adjective}${highlight}!`
      }
  }
