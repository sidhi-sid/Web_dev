const mocha=require('mocha')
const chai=require('chai').expect
const request=require('request')

const app=require('../server');
const { expect } = require('chai');
let server;

describe('server',()=>{
    //as test will only run after the server has started 
    before((done)=>{
        server=app.listen(2222,done)
    })

    it('rates should be correct',(done)=>{
        request.get('http://localhost:2222/rate',(err,resp,body)=>{
        let rates=JSON.parse(body)
        expect(rates.fixed).to.equal(50)
        expect(rates.perkm).to.equal(10)
        done()
        })
    })
    //after all the tests are done ,close the server
    after(()=>{
        server.close()
    })
})