import {
    Directive,
    Input,
    OnInit,
    // TemplateRef,
    // ViewContainerRef
} from '@angular/core';


@Directive({ selector: '[showAuthed]' })
export class ShowAuthedDirective implements OnInit {
    constructor(
        // private templateRef: TemplateRef<any>,
        // private viewContainer: ViewContainerRef
    ) { }

    condition: boolean;

    ngOnInit() {
        // this.userService.isAuthenticated.subscribe(
        //     (isAuthenticated) => {
        //         if (isAuthenticated && this.condition || !isAuthenticated && !this.condition) {
        //             this.viewContainer.createEmbeddedView(this.templateRef);
        //         } else {
        //             this.viewContainer.clear();
        //         }
        //     }
        // );
    }

    @Input() set showAuthed(condition: boolean) {
        this.condition = condition;
    }

}
