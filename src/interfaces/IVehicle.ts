import { z } from 'zod';

export const VehicleZodSchema = z.object({
  model: z.string().min(3),
  year: z.number().gte(1900).lte(new Date().getFullYear()),
  color: z.string().min(3),
  status: z.boolean().or(z.undefined()),
  buyValue: z.number().int(),
});

export type IVehicle = z.infer<typeof VehicleZodSchema>;
