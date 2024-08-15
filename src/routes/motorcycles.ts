import { Router } from 'express';
import MotorcycleController from '../controllers/Motorcycle';

const motorcycleController = new MotorcycleController();

const router = Router();

/**
 * @swagger
 * components:
 *   schemas:
 *     Motorcycle:
 *       type: object
 *       required:
 *         - _id
 *         - model
 *         - year
 *         - color
 *         - buyValue
 *         - category
 *         - engineCapacity
 *       properties:
 *         _id:
 *           type: string
 *           description: Motorcycle identifier
 *         model:
 *           type: string
 *           description: Motorcycle model
 *         year:
 *           type: integer
 *           description: Motorcycle year of manufacture
 *         color:
 *           type: string
 *           description: Motorcycle main color
 *         status:
 *           type: boolean
 *           description: Status that defines whether or not a vehicle can be bought
 *         buyValue:
 *           type: integer
 *           description: Motorcycle purchase value
 *         category:
 *           type: string
 *           description: Motorcycle category
 *         engineCapacity:
 *           type: integer
 *           description: Motorcycle engine capacity
 *       example:
 *         _id: 635d80bc09d0e6be0373da62
 *         model: Yamaha MT-09
 *         year: 2018
 *         color: blue
 *         status: true
 *         buyValue: 45990
 *         category: Street
 *         engineCapacity: 890
 *     NewMotorcycle:
 *       type: object
 *       required:
 *         - model
 *         - year
 *         - color
 *         - buyValue
 *         - category
 *         - engineCapacity
 *       properties:
 *         model:
 *           type: string
 *           description: Motorcycle model
 *         year:
 *           type: integer
 *           description: Motorcycle year of manufacture
 *         color:
 *           type: string
 *           description: Motorcycle main color
 *         status:
 *           type: boolean
 *           description: Status that defines whether or not a vehicle can be bought
 *         buyValue:
 *           type: integer
 *           description: Motorcycle purchase value
 *         category:
 *           type: string
 *           description: Motorcycle category
 *         engineCapacity:
 *           type: integer
 *           description: Motorcycle engine capacity
 *       example:
 *         model: Yamaha MT-09
 *         year: 2018
 *         color: blue
 *         status: true
 *         buyValue: 45990
 *         category: Street
 *         engineCapacity: 890
 */

/**
 * @swagger
 * tags:
 *   name: Motorcycles
 *   description: API that handles motorcycle data
 */

/**
 * @swagger
 * /motorcycles:
 *   get:
 *     summary: Returns all motorcycles
 *     tags: [Motorcycles]
 *     responses:
 *       200:
 *         description: Motorcycles list
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Motorcycle'
 *   post:
 *     summary: Creates new motorcycle
 *     tags: [Motorcycles]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/NewMotorcycle'
 *     responses:
 *       201:
 *         description: Motorcycle successfully created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Motorcycle'
 *       400:
 *         description: Invalid new motorcycle
 */
router.route('/motorcycles')
  .post((req, res) => motorcycleController.create(req, res))
  .get((req, res) => motorcycleController.read(req, res));

/**
 * @swagger
 * /motorcycles/{id}:
 *   get:
 *     summary: Returns motorcycle by id
 *     tags: [Motorcycles]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: Motorcycle identifier
 *     responses:
 *       200:
 *         description: Motorcycle found
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Motorcycle'
 *       404:
 *         description: Motorcycle not found
 *       400:
 *         description: Invalid motorcycle id
 *   put:
 *     summary: Updates motorcycle by id
 *     tags: [Motorcycles]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: Motorcycle identifier
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/NewMotorcycle'
 *     responses:
 *       200:
 *         description: Motorcycle successfully updated
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Motorcycle'
 *       404:
 *         description: Motorcycle not found
 *       400:
 *         description: Invalid id or new motorcycle
 *   delete:
 *     summary: Removes motorcycle by id
 *     tags: [Motorcycles]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: Motorcycle identifier
 *     responses:
 *       204:
 *         description: Motorcycle successfully removed
 *       404:
 *         description: Motorcycle not found
 *       400:
 *         description: Invalid motorcycle id
 */
router.route('/motorcycles/:id')
  .get((req, res) => motorcycleController.readOne(req, res))
  .put((req, res) => motorcycleController.update(req, res))
  .delete((req, res) => motorcycleController.delete(req, res));

export default router;
