import { exit } from "process";
import Person from "../domain/person";
import PersonRepository from "../domain/person.repository";
import Model from "./models/person.model";



export default class PersonInfrastructure implements PersonRepository {
  
  async insert(person : Person): Promise<Person> {
    await Model.create(person);
    return person;
  }
  
/*
  async find(where: { [s: string]: string | number },
    ): Promise<Person | null> {
    return await Model.find(where);
  }
   */
  async find(personId : string): Promise<Person | null> {
    return await Model.findOne({personId});
     
  }
 
  
  async update(personId: String, status: String): Promise<string | null> {
    return await Model.findOneAndUpdate(personId,status);
    
  }
  
}
