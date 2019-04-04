const app = require('../src/app')



describe('test APP',()=>{
  it('Should return user name',()=>{
    return supertest(app)
    .get('/register')
    .query({})
    .expect(400,'Username required')
    
  })
})
