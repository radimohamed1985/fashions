function show (username = `dEfuLT`,code = `DeFUlt`,fcolor = `dEfULT`){
   

    return `hello ${username},
    your code is ${code},
    your coloris ${fcolor}`}
  

    document.body.innerHTML= (show(`rady`,`2210`,))

    function addAll(...myparams){
        let mynum= 0;
        for(let myparam of myparams) mynum = myparam+mynum;
        return mynum;
    }
    console.log(addAll(10,20,40))