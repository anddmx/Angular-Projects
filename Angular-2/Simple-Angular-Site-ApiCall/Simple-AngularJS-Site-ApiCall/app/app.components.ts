import { Component } from '@angular/core';
@Component({
    selector: 'app-click-me',
    template: `
<div style="margin: 5px 0px 5px 0px;">
<button class="btn btn-primary" (click)="onClickMe()">Click me!</button>
                            {{clickMessage}}
</div>`,
})

export class AppComponent {
    clickMessage: string = '';

    onClickMe() {
        this.clickMessage = 'You are my hero!';
    }

    

}

