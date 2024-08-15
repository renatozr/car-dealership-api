import { expect } from 'chai';
import sinon from 'sinon';
import { Request, Response } from 'express';
import MotorcycleService from '../../../services/Motorcycle';
import MotorcycleController from '../../../controllers/Motorcycle';
import { motorcycle, motorcyclesWithId, motorcycleWithId } from '../mocks/motorcycle';

describe('Motorcycle Controller', () => {
  const motorcycleService = new MotorcycleService();
  const motorcycleController = new MotorcycleController(motorcycleService);

  const req = {} as Request;
  const res = {} as Response;

  before(() => {
    sinon.stub(motorcycleService, 'create').resolves(motorcycleWithId);
    sinon.stub(motorcycleService, 'read').resolves(motorcyclesWithId);
    sinon.stub(motorcycleService, 'readOne').resolves(motorcycleWithId);
    sinon.stub(motorcycleService, 'update').resolves(motorcycleWithId);
    sinon.stub(motorcycleService, 'delete').resolves(motorcycleWithId);

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns(res);
    res.end = sinon.stub().returns(res);
  });

  after(() => {
    sinon.restore();
  });

  describe('Method create', () => {
    it('Success: responds status 201 and created motorcycle json', async () => {
      req.body = motorcycle;

      await motorcycleController.create(req, res);

      expect((res.status as sinon.SinonStub).calledWith(201)).to.be.true;
      expect((res.json as sinon.SinonStub).calledWith(motorcycleWithId)).to.be.true;
    });
  });

  describe('Method read', () => {
    it('Success: responds status 200 and motorcycles json', async () => {
      await motorcycleController.read(req, res);

      expect((res.status as sinon.SinonStub).calledWith(200)).to.be.true;
      expect((res.json as sinon.SinonStub).calledWith(motorcyclesWithId)).to.be.true;
    });
  });

  describe('Method readOne', () => {
    it('Success: responds status 200 and found motorcycle json', async () => {
      req.params = { id: motorcycleWithId._id };

      await motorcycleController.readOne(req, res);

      expect((res.status as sinon.SinonStub).calledWith(200)).to.be.true;
      expect((res.json as sinon.SinonStub).calledWith(motorcycleWithId)).to.be.true;
    });
  });

  describe('Method update', () => {
    it('Success: responds status 200 and updated motorcycle json', async () => {
      req.params = { id: motorcycleWithId._id };
      req.body = motorcycle;

      await motorcycleController.update(req, res);

      expect((res.status as sinon.SinonStub).calledWith(200)).to.be.true;
      expect((res.json as sinon.SinonStub).calledWith(motorcycleWithId)).to.be.true;
    });
  });

  describe('Method delete', () => {
    it('Success: responds status 204 and no content', async () => {
      req.params = { id: motorcycleWithId._id };

      await motorcycleController.delete(req, res);

      expect((res.status as sinon.SinonStub).calledWith(204)).to.be.true;
      expect((res.end as sinon.SinonStub).calledOnce).to.be.true;
    });
  });
});
