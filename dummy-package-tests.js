// Write your tests here!
// Here is an example.
// Tinytest.add('example', function (test) {
//   test.equal(true, true);
// });

describe('test', function () {
  it('works', function () {
    chai.expect(true).to.be.true;
  });

  it('works with a delay', function(done) {
    chai.expect(true).to.be.true;
    done();
  });

  it('fails', function () {
    chai.expect(false).to.be.true;
  });

});
