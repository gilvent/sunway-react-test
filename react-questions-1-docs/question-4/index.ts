/**
 * Answer:
 * In terms of Typescript, Interface defines the shape of object, including type of properties in an object.
 * While Enum is a set of constant values, mainly used to type string constants related to business logic.
 */

/**
 * An example related to question no 1.
 * We create Profession enum to store possible values of professions
 */
enum Profession {
  SystemAnalytics = 'systemAnalytics',
  Engineer = 'engineer',
  ProductOwner = 'productOwner',
  Freelancer = 'freelancer',
  Student = 'student'
}

/**
 * User interface to store the shape of user item
 */
interface User {
  firstName: string
  lastName: string
  customerID: string
  note: string
  profession: Profession // use enum to type profession property
}
