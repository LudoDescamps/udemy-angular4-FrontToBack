import { Component } from '@angular/core';

@Component({
    selector: 'sandbox',
    templateUrl: './sandbox.component.html',
    styleUrls: ['./sandbox.component.css'],
    styles: [`
        .special{
            color:green
        }
        .saveable{
            text-transform: uppercase
        }
    `]
})

export class SandboxComponent {
    people = ['Rick', 'Daryl', 'Carl', 'Glen'];
    people2 = [
        {
            firstName: 'Rick',
            lastName: 'Grimes'
        },
        {
            firstName: 'Daryl',
            lastName: 'Dixon'
        },
        {
            firstName: 'Carl',
            lastName: 'Grimes'
        },
        {
            firstName: 'Glen',
            lastName: 'Rhee'
        },
    ];

    name: string = 'john Doe';
    showName: boolean = true;

    greeting: number = 2;

    imageUrl: string = 'http://lorempicsum.com/simpsons/400/200/1';

    isUnchanged: boolean = true;

    isSpecial = true;
    canSave = true;
    currentClasses = {};

    currentStyles = {};

    birthday = new Date(1981, 1 ,15);
    total = 500;
    fee = 0.5;

    setCurrentClasses(){
        this.currentClasses = {
            saveable:this.canSave,
            special:this.isSpecial
        }
    }

    setCurrentStyles(){
        this.currentStyles = {
            'font-style': this.canSave ? 'italic' : 'normal',
            'font-size': this.isSpecial ? '24px' : '12px'
        }
    }

    constructor() {
        this.people[2] = 'Carol';
        this.setCurrentClasses();
        this.setCurrentStyles();
    }
}