/* eslint-disable */
const path = require('path');
const chai = require('chai');
const chaiHttp = require('chai-http');
const expect = chai.expect;

// Assertion
chai.should();
chai.use(chaiHttp);

describe('Vehicles CRUD endpoints.', () => {

  let vehicleId = null;

  describe('POST', () => {
    it('should create a new vehicle', (done) => {
      const vehicle = {
        chassisSerie: "VOLVOXCVT",
        chassisNumber: 12345678910,
        type: "Car",
        passengersNumber: 42,
        color: "Yellow",
      };

      chai
        .request('http://localhost:3000/api/v1')
        .post('/vehicles')
        .send(vehicle)
        .end((err, response) => {
          vehicleId = response.body.data.Vehicle._id;
          response.should.have.status(201);
          response.body.should.be.a('object');
          response.body.should.have
            .property('data')
            .have.property('Vehicle')
          done();
        });
    });
  });

  describe('GET', () => {
    it('should return all vehicles', (done) => {
      chai
        .request('http://localhost:3000/api/v1')
        .get('/vehicles')
        .end((err, response) => {
          response.should.have.status(200);
          done();
        });
    });
  });

  describe('PUT', () => {
    it('should update a vehicle', (done) => {

      const updatedVehicleColor = {color:'Gray'};

      chai
        .request('http://localhost:3000/api/v1')
        .put(`/vehicles/${vehicleId}`)
        .send(updatedVehicleColor)
        .end((err, response) => {
          response.should.have.status(200);
          response.body.should.be.a('object');
          response.body.should.have
            .property('data')
            .have.property('Vehicle')
            .have.property('color')
            .eq('Gray');
          done();
        });
    });
  });

  describe('DELETE', () => {
    it('should delete a vehicle', (done) => {
      chai
        .request('http://localhost:3000/api/v1')
        .delete(`/vehicles/${vehicleId}`)
        .end((err, response) => {
          response.should.have.status(204);
          done();
        });
    });
  });
});
