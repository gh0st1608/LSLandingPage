import joi from "joi";

export const personSchema = {
  PERSON: {
    body: joi.object({
      personId: joi.number().allow(null, ''),
      nombres: joi.string().allow(null, ''),
      apellido_paterno: joi.string().allow(null, ''),
      apellido_materno: joi.string().allow(null, ''),
      marca_qr: joi.string().allow(null, ''),
      status: joi.string().allow(null, ''),
      fecha_registro: joi.string().allow(null, ''),
      fecha_modificacion: joi.string().allow(null, ''),
    }),
  },
  /*
  LOGIN: {
    body: joi.object({
      email: joi.string().required(),
      password: joi.string().required(),
    }),
  },
  */
};
