const { expect } = require('chai')
const supertest = require('supertest')
const app = require('../src/app')

describe('App', () => {
  it('Should return user name required',()=>{
    return supertest(app)
    .get('/register')
    .query({})
    .then(res=>{
      expect(400,'Username required')
    }) 
  })
  it('Should return user password required',()=>{
    return supertest(app)
    .get('/register')
    .query({})
    .then(res=>{
      expect(400,'Password required')
    }) 
  })
  it('Should return favorite Club required',()=>{
    return supertest(app)
    .get('/register')
    .query({})
    .then(res=>{
      expect(400,'favorite Club required')
    }) 
  })

  it('Username must be between 6 and 20 characters',()=>{
    return supertest(app)
    .get('/register')
    .query({username:'aa'})
    .then(res=>{
      expect(400,'Username must be between 6 and 20 characters')
    }) 

    
  })
  
  it('Password must be between 8 and 36 characters',()=>{
    return supertest(app)
    .get('/register')
    .query({password:'12d'})
    .then(res=>{
      expect(400,'Password must be between 8 and 36 characters')
    }) 

    
  })
  it('Password must be contain at least one digit',()=>{
    return supertest(app)
    .get('/register')
    .query({password:'dddd'})
    .then(res=>{
      expect(400,'Password must be contain at least one digit')
    }) 

    
  })
  it('should return a valid club',()=>{
    return supertest(app)
    .get('/register')
    .query({password:'dddd'})
    .then(res=>{
      expect(400,'Not a valid club')
    }) 

    
  })
  

    

  
})