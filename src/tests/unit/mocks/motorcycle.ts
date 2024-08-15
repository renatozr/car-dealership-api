import { IMotorcycle } from "../../../interfaces/IMotorcycle";

type IMotorcycleWithId = IMotorcycle & { _id: string };

export const motorcycle: IMotorcycle = {
  "model": "FAZER FZ25 ABS",
  "year": 2024,
  "color": "blue",
  "status": false,
  "buyValue": 22000,
  "category": "Street",
  "engineCapacity": 250
};

export const motorcycleWithId: IMotorcycleWithId = {
  "_id": "62e8498e680228db899f280b",
  "model": "FAZER FZ25 ABS",
  "year": 2024,
  "color": "blue",
  "status": false,
  "buyValue": 22000,
  "category": "Street",
  "engineCapacity": 250
};

export const motorcyclesWithId: IMotorcycleWithId[] = [
  {
    "_id": "62e8498e680228db899f280b",
    "model": "FAZER FZ25 ABS",
    "year": 2024,
    "color": "blue",
    "status": false,
    "buyValue": 22000,
    "category": "Street",
    "engineCapacity": 250
  },
  {
    "_id": "62e84910680228db899f2808",
    "model": "Fan 125",
    "year": 2015,
    "color": "red",
    "buyValue": 7500,
    "category": "Street",
    "engineCapacity": 120
  }
];

export const invalidMotorcycle: IMotorcycle = {
  "model": "Fe",
  "year": 1000,
  "color": "re",
  "buyValue": 3500.1,
  "category": "Custom",
  "engineCapacity": -10
};
