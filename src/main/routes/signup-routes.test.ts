import request from 'supertest'
import app from '../config/app'

describe('SignUp Routes', () => {
  it('should return an account on success', async () => {
    await request(app)
      .post('/api/signup')
      .send({
        name: 'Leonardo',
        email: 'leo_armejo@hotmail.com',
        password: '123',
        passwordConfirmation: '123'
      })
      .expect(200)
  })
})
