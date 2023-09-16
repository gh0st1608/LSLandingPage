import Person from "./person";

export default interface PersonRepository {
  insert(person: Person): Promise<Person>;
  find(personId:string): Promise<Person | null>;
  update(personId: string, status: string): Promise<string  | null>;
  //find(document: string, fatherLastname: string, motherLastname: string, names: string, ubigeousAddress: string, address: string, payload: string): Promise<Person | null>;
  
  //getPersons(document: string, fatherLastname: string, motherLastname: string): Promise<Person>;
  
}
