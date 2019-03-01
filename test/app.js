import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../app';

chai.use(chaiHttp);
chai.should();
describe("GET /", () => {
        it("should get Hello Bikes", (done) => {
             chai.request(app)
                 .get('/')
                 .end((err, res) => {
                     res.should.have.status(200);
                     res.body.should.be.equal('Hello Bikes');
                     done();
                  });
         });
    });