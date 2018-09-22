import { Component } from '@angular/core';
@Component({
    selector: 'app-click-me',
    template: `<button class="btn btn-primary" (click)="onClickMe()">Click me!</button>
                            {{clickMessage}}`,
})

export class AppComponent {
    clickMessage = '';

    onClickMe() {
        this.clickMessage = 'You are my hero!';
    }

    

}

