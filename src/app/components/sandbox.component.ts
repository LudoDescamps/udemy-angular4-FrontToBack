import { Component } from '@angular/core';

// Importe l'interface Customer.ts
import { Customer } from './Customer';

@Component({
    selector: 'sandbox',
    template: `<h1>Hello {{name}}</h1>`
})

export class SandboxComponent {
    /* // Déclaration des différents types en TypeScript
    name: string = 'John Doe';
    age: number = 35;
    hasChildren: boolean = true;
    city: any = 'Boston';
    myNumbersArray: number[] = [1, 2, 3];
    myStringsArray: string[] = ['hello', 'world'];
    myAnyArray: any[] = [1, 2, 'hello', false];
    myTuple: [string, number] = ['hello', 3];
    unusable: void = undefined;
    u: undefined = undefined;
    n: null = null; */

    // Crée l'objet customer
    customer: Customer;
    // Crée un array d'objets 
    cutomers: Customer[];

    constructor() {
        this.customer = {
            id: 1,
            name: 'John Doe',
            email: 'john.doe@email.com'
        }

        this.cutomers = [
            {
                id: 1,
                name: 'John Doe',
                email: 'john.doe@email.com'
            },
            {
                id: 2,
                name: 'Brad Traversy',
                email: 'brad@email.com'
            },
            {
                id: 3,
                name: 'Steeve Smith',
                email: 'steeve@email.com'
            }

        ]
    }
}
