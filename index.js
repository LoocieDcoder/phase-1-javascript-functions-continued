function saturdayFun(actionWord="roller-skate"){
    return `This Saturday, I want to ${actionWord}!`
  }
  
  function mondayWork(activity="go to the office"){
    return `This Monday, I will ${activity}.`
  }
  
  function wrapAdjective(highlight){
    const newone = "a";
      return function function2(adjective){
        const newtwo = " dedicated programmer%";
        return function() {
          console.log(`You are ${highlight}${newone}${newtwo}!`);
        };
      };
  }

  wrapAdjective("%")()();