const validation = {
  email: {
    presence: {
      message: true
    },
    email: {
      message: '^Please enter a valid email address'
    }
  },

  textInput: {
    presence: {
      message: true
    },
    
  },
  
  password: {
    presence: {
      message: true
    },
    length: {
      minimum: 8,
      message: '^Your password must be at least 8 characters'
    }
  },

  Cpassword: {
    presence: {
      message: true
    },
    length: {
      minimum: 8,
      message: '^Your Confirm password must be at least 8 characters'
    }
  },


  


  name: {
    presence: {
      message: true
    },
   
    format: {
      pattern: "[a-z]+",
      flags: "i",
      message: "can only contain letters"
    }
   
   
  },

}

export default validation