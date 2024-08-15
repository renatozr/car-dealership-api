import { expect } from 'chai';
import sinon from 'sinon';
import { ZodError } from 'zod';
import MotorcycleModel from '../../../models/Motorcycle';
import MotorcycleService from '../../../services/Motorcycle';
import { invalidMotorcycle, motorcycle, motorcyclesWithId, motorcycleWithId } from '../mocks/motorcycle';
import { ErrorType } from '../../../helpers/errorCatalog';

describe('Motorcycle Service', () => {
  const motorcycleModel = new MotorcycleModel();
  const motorcycleService = new MotorcycleService(motorcycleModel);

  before(() => {
    sinon.stub(motorcycleModel, 'create').resolves(motorcycleWithId);
    sinon.stub(motorcycleModel, 'read').resolves(motorcyclesWithId);
    sinon.stub(motorcycleModel, 'readOne')
      .onFirstCall().resolves(motorcycleWithId)
      .onSecondCall().resolves(null);
    sinon.stub(motorcycleModel, 'update')
      .onFirstCall().resolves(motorcycleWithId)
      .onSecondCall().resolves(null);
    sinon.stub(motorcycleModel, 'delete')
      .onFirstCall().resolves(motorcycleWithId)
      .onSecondCall().resolves(null);
  });

  after(() => {
    sinon.restore();
  });

  describe('Method create', () => {
    it('Success: return created motorcycle', async () => {
      const result = await motorcycleService.create(motorcycle);

      expect(result).to.be.equal(motorcycleWithId);
    });

    it('ZodParseError: invalid motorcycle', async () => {
      try {
        await motorcycleService.create(invalidMotorcycle);
      } catch (error: any) {
        expect(error).to.be.a.instanceOf(ZodError);
      }
    });
  });

  describe('Method read', () => {
    it('Success: return motorcycles', async () => {
      const result = await motorcycleService.read();

      expect(result).to.be.equal(motorcyclesWithId);
    });
  });

  describe('Method readOne', () => {
    it('Success: return found motorcycle', async () => {
      const result = await motorcycleService.readOne(motorcycleWithId._id);

      expect(result).to.be.equal(motorcycleWithId);
    });

    it('Error: EntityNotFound', async () => {
      try {
        await motorcycleService.readOne(motorcycleWithId._id);
      } catch (error: any) {
        expect(error.message).to.be.equal(ErrorType.EntityNotFound);
      }
    });
  });

  describe('Method update', () => {
    it('Success: return updated motorcycle', async () => {
      const result = await motorcycleService.update(motorcycleWithId._id, motorcycle);

      expect(result).to.be.equal(motorcycleWithId);
    });

    it('Error: EntityNotFound', async () => {
      try {
        await motorcycleService.update(motorcycleWithId._id, motorcycle);
      } catch (error: any) {
        expect(error.message).to.be.equal(ErrorType.EntityNotFound);
      }
    });
  });

  describe('Method delete', () => {
    it('Success: return deleted motorcycle', async () => {
      const result = await motorcycleService.delete(motorcycleWithId._id);

      expect(result).to.be.equal(motorcycleWithId);
    });

    it('Error: EntityNotFound', async () => {
      try {
        await motorcycleService.delete(motorcycleWithId._id);
      } catch (error: any) {
        expect(error.message).to.be.equal(ErrorType.EntityNotFound);
      }
    });
  });
});
