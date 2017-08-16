const live1 = require('../src/live1');
const expect = require('chai').expect;

describe('live1', () => {

    it('get the actual title', (done) => {
        live1.actualTitle((title) => {
            console.log(title);
            expect(title).to.deep.equal('');
            done();
        });
    });

});