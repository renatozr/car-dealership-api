import { expect } from 'chai';
import sinon from 'sinon';
import { Model } from 'mongoose';
import MotorcycleModel from '../../../models/Motorcycle';
import { motorcycle, motorcyclesWithId, motorcycleWithId } from '../mocks/motorcycle';
import { ErrorType } from '../../../helpers/errorCatalog';

describe('Motorcycle Model', () => {
  const motorcycleModel = new MotorcycleModel();
  const invalidMongoId = '123';

  before(() => {
    sinon.stub(Model, 'create').resolves(motorcycleWithId);
    sinon.stub(Model, 'find').resolves(motorcyclesWithId);
    sinon.stub(Model, 'findById').resolves(motorcycleWithId);
    sinon.stub(Model, 'findByIdAndUpdate').resolves(motorcycleWithId);
    sinon.stub(Model, 'findByIdAndRemove').resolves(motorcycleWithId);
  });

  after(() => {
    sinon.restore();
  });

  describe('Method create', () => {
    it('Success: return created motorcycle', async () => {
      const result = await motorcycleModel.create(motorcycle);

      expect(result).to.be.equal(motorcycleWithId);
    });
  });

  describe('Method read', () => {
    it('Success: return motorcycles', async () => {
      const result = await motorcycleModel.read();

      expect(result).to.be.equal(motorcyclesWithId);
    });
  });

  describe('Method readOne', () => {
    it('Success: return found motorcycle', async () => {
      const result = await motorcycleModel.readOne(motorcycleWithId._id);

      expect(result).to.be.equal(motorcycleWithId);
    });

    it('Error: InvalidMongoId', async () => {
      try {
        await motorcycleModel.readOne(invalidMongoId);
      } catch (error: any) {
        expect(error.message).to.be.equal(ErrorType.InvalidMongoId);
      }
    });
  });

  describe('Method update', () => {
    it('Success: return updated motorcycle', async () => {
      const result = await motorcycleModel.update(motorcycleWithId._id, motorcycle);

      expect(result).to.be.equal(motorcycleWithId);
    });

    it('Error: InvalidMongoId', async () => {
      try {
        await motorcycleModel.update(invalidMongoId, motorcycle);
      } catch (error: any) {
        expect(error.message).to.be.equal(ErrorType.InvalidMongoId);
      }
    });
  });

  describe('Method delete', () => {
    it('Success: return deleted motorcycle', async () => {
      const result = await motorcycleModel.delete(motorcycleWithId._id);

      expect(result).to.be.equal(motorcycleWithId);
    });

    it('Error: InvalidMongoId', async () => {
      try {
        await motorcycleModel.delete(invalidMongoId);
      } catch (error: any) {
        expect(error.message).to.be.equal(ErrorType.InvalidMongoId);
      }
    });
  });
});
