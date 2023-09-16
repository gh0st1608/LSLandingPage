import { Request, Response } from "express";
import PersonApplication from "../../application/person.application";
import Person from "../../domain/person";
//import { Tokens } from "../../domain/auth.repository";

export default class {
  application: PersonApplication;

  constructor(readonly app: PersonApplication) {
    this.application = app;
    this.getPerson = this.getPerson.bind(this);
    this.createPerson = this.createPerson.bind(this);
  }

  async getPerson(req: Request, res: Response) {
    const {personId} = req.body;
    console.log("req.body", req.body)
    const persons = await this.application.getPerson(personId);

    if (persons) {
      res.json({persons: persons});
    } else {
      res.status(404).send("Not found person");
    }
  }

  async createPerson(req: Request, res: Response) {
    const {personId,nombres,apellido_paterno,apellido_materno,marca_qr,status,fecha_registro,fecha_modificacion} = req.body;
    const person = new Person(
      personId,
      nombres,
      apellido_paterno,
      apellido_materno,
      marca_qr,
      status,
      fecha_registro,
      fecha_modificacion
    );
    const personInserted = await this.application.create(person);
    if (personInserted) {
      res.json({person: personInserted});
    } else {
      res.status(404).send("Person not Created");
    }
  }


  /*
  async register(req: Request, res: Response) {
    const { name, email, password } = req.body;

    const results: Tokens = await this.application.register(
      name,
      email,
      password
    );
    res.json(results);
  }

  async login(req: Request, res: Response) {
    const { email, password } = req.body;
    const tokens: Tokens | null = await this.application.login(email, password);

    if (tokens) {
      res.json(tokens);
    } else {
      res.status(401).send("Not found user");
    }
  }

  validateAccessToken(req: Request, res: Response) {
    const { accessToken } = req.body;
    this.application
      .validateAccessToken(accessToken)
      .then(() => res.json({ valid: true }))
      .catch((err: { status: number; message: string }) => {
        console.log(err);
        res.status(err.status).send(err.message);
      });
  }
*/



}
