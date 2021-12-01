let chai = require('chai')
let chaiHttp = require('chai-http')
let server = require('../../server')
let expect = chai.expect

chai.use(chaiHttp)

describe('Home Page', () => {
    it('returns 400', done => {
        chai.request(server)
          .get('/home')
          .end((err, res) => {
            expect(res.status).to.equal(400);
            done()
          })
      })
})