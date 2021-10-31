let chai = require('chai')
let chaiHttp = require('chai-http')
let server = require('../../app')
let expect = chai.expect

chai.use(chaiHttp)

describe('Server', () => {
    it('returns 200 ok', done => {
        chai.request(server)
          .get('/')
          .end((err, res) => {
            expect(res.status).to.equal(200);
            expect(res.text).to.equal('Welcome to CMPE272 project-Team Nibble');
            done()
          })
      })
})