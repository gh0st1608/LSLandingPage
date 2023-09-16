import express from "express";
import Controller from "./controller";
import PersonApplication from "../../application/person.application";
import PersonInfrastructure from "../../infrastructure/person.infrastructure";
import { ErrorsService } from "../../../services/errors.service";
import ValidatorsService from "../../../services/validators.service";
import { personSchema } from "./person.schema";

const personInfrastructure = new PersonInfrastructure();
const application = new PersonApplication(personInfrastructure);
const controller = new Controller(application);

class Router {
  readonly router: express.Router;

  constructor() {
    this.router = express.Router();
    this.mountRoutes();
  }

  mountRoutes() {
    this.router.post(
      "/get-person",
      ValidatorsService.validate(personSchema.PERSON),
      ErrorsService.catchError(controller.getPerson)
    );
    this.router.post(
      "/create-person",
      ValidatorsService.validate(personSchema.PERSON),
      ErrorsService.catchError(controller.createPerson)
    );
  }
}

export default new Router().router;
