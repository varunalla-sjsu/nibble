export interface User {
    email:string,
    nickname:string,
    picture:string,
    name:string,
    roles:string[]
}
export enum Gender {
    M = 'Male',
    F = 'Female',
    UA = 'Unavailable'
  }
export interface Employee { first_name: string, last_name: string, birth_date: string, email: string, gender: Gender, hire_date: string, role: string }; 