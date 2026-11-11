const passwordRegex = (password)=>{

   let passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&])[A-Za-z\d@.#$!%*?&]{8,15}$/

   if(passwordRegex.test(password)){
    return true
   }

}


module.exports = passwordRegex