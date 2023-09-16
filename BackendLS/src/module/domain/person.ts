export default class Person {
   readonly personId: number;
   readonly nombres: string;
   readonly apellido_paterno: string;
   readonly apellido_materno: string;
   readonly marca_qr: string;
   readonly status: string;
   readonly fecha_registro: string;
   readonly fecha_modificacion: string;

  constructor(
    personId: number,
    nombres: string,
    apellido_paterno: string,
    apellido_materno: string,
    marca_qr: string,
    status: string,
    fecha_registro: string,
    fecha_modificacion: string,
  ) {
    this.personId = personId;
    this.nombres = nombres;
    this.apellido_paterno = apellido_paterno;
    this.apellido_materno = apellido_materno;
    this.marca_qr = marca_qr;
    this.status = status;
    this.fecha_registro = fecha_registro;
    this.fecha_modificacion = fecha_modificacion;


  }
}
