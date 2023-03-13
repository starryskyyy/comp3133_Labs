export class Employee{
    private eid: number 
    protected firstname: string
    lastname: string
    readonly result: string

    constructor(eid: number, firstname: string, lastname:string, result:string){
        this.eid = eid
        this.firstname = firstname
        this.lastname = lastname
        this.result = result
    }

    print(){
        console.log(`Employee ID: ${this.eid}`)
        console.log(`Employee First Name: ${this.firstname}`)
        console.log(`Employee Last Name: ${this.lastname}`)
        console.log(`Employee Result: ${this.result}`)
    }
}