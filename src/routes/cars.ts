import { Router } from 'express';
import CarController from '../controllers/Car';

const carController = new CarController();

const router = Router();

/**
 * @swagger
 * components:
 *   schemas:
 *     Car:
 *       type: object
 *       required:
 *         - _id
 *         - model
 *         - year
 *         - color
 *         - buyValue
 *         - doorsQty
 *         - seatsQty
 *       properties:
 *         _id:
 *           type: string
 *           description: Car identifier
 *         model:
 *           type: string
 *           description: Car model
 *         year:
 *           type: integer
 *           description: Car year of manufacture
 *         color:
 *           type: string
 *           description: Car main color
 *         status:
 *           type: boolean
 *           description: Status that defines whether or not a vehicle can be bought
 *         buyValue:
 *           type: integer
 *           description: Car purchase value
 *         doorsQty:
 *           type: integer
 *           description: Car number of doors
 *         seatsQty:
 *           type: integer
 *           description: Car number of seats
 *       example:
 *         _id: 62eacce38ed467e904f030e0
 *         model: Ferrari Maranello
 *         year: 2003
 *         color: red
 *         status: true
 *         buyValue: 3500000
 *         doorsQty: 2
 *         seatsQty: 2
 *     NewCar:
 *       type: object
 *       required:
 *         - model
 *         - year
 *         - color
 *         - buyValue
 *         - doorsQty
 *         - seatsQty
 *       properties:
 *         model:
 *           type: string
 *           description: Car model
 *         year:
 *           type: integer
 *           description: Car year of manufacture
 *         color:
 *           type: string
 *           description: Car main color
 *         status:
 *           type: boolean
 *           description: Status that defines whether or not a vehicle can be bought
 *         buyValue:
 *           type: integer
 *           description: Car purchase value
 *         doorsQty:
 *           type: integer
 *           description: Car number of doors
 *         seatsQty:
 *           type: integer
 *           description: Car number of seats
 *       example:
 *         model: Ferrari Maranello
 *         year: 2003
 *         color: red
 *         status: true
 *         buyValue: 3500000
 *         doorsQty: 2
 *         seatsQty: 2
 */

/**
 * @swagger
 * tags:
 *   name: Cars
 *   description: API that handles car data
 */

/**
 * @swagger
 * /cars:
 *   get:
 *     summary: Returns all cars
 *     tags: [Cars]
 *     responses:
 *       200:
 *         description: Cars list
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Car'
 *   post:
 *     summary: Creates new car
 *     tags: [Cars]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/NewCar'
 *     responses:
 *       201:
 *         description: Car successfully created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Car'
 *       400:
 *         description: Invalid new car
 */
router.route('/cars')
  .post((req, res) => carController.create(req, res))
  .get((req, res) => carController.read(req, res));

/**
 * @swagger
 * /cars/{id}:
 *   get:
 *     summary: Returns car by id
 *     tags: [Cars]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: Car identifier
 *     responses:
 *       200:
 *         description: Car found
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Car'
 *       404:
 *         description: Car not found
 *       400:
 *         description: Invalid car id
 *   put:
 *     summary: Updates car by id
 *     tags: [Cars]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: Car identifier
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/NewCar'
 *     responses:
 *       200:
 *         description: Car successfully updated
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Car'
 *       404:
 *         description: Car not found
 *       400:
 *         description: Invalid id or new car
 *   delete:
 *     summary: Removes car by id
 *     tags: [Cars]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: Car identifier
 *     responses:
 *       204:
 *         description: Car successfully removed
 *       404:
 *         description: Car not found
 *       400:
 *         description: Invalid car id
 */
router.route('/cars/:id')
  .get((req, res) => carController.readOne(req, res))
  .put((req, res) => carController.update(req, res))
  .delete((req, res) => carController.delete(req, res));

export default router;
