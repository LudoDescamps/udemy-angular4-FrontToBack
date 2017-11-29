import { Component } from '@angular/core';

@Component({
    selector: 'sandbox',
    template: `<h1>Hello {{name}}</h1>`
})

export class SandboxComponent {
    // Déclaration des différents types en TypeScript
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
    n: null = null;

}