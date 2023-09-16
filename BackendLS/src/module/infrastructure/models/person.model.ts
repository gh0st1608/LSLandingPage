import mongoose,  { Schema, Model, Document } from "mongoose";

class PersonModel {
  private readonly personSchema: Schema;

  constructor() {
    this.personSchema = new Schema({
      personId: {
        type: String,
        required: false,
        trim: true
      },
      nombres: {
        type: String,
        trim: true
      },
      apellido_paterno: {
        type: String,
        trim: true
      },
      apellido_materno: {
        type: String,
        trim: true
      },
      marca_qr: {
        type: String,
        required: false,
      },
      status: {
        type: String,
        required: false,
      },
      fecha_registro:
      {
        type: String,
        required: false,
      },
      fecha_modificacion:
      {
        type: String,
        required: false,
      },
    },
    { 
      collection: 'person' 
    });
  }

  get model(): Model<any> {
    return mongoose.model("Person", this.personSchema);
  }
}

export default new PersonModel().model;
