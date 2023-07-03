import { Directive, Input, TemplateRef, ViewContainerRef } from "@angular/core";

@Directive({
    selector: '[loop]'
})

export class LoopDirective {
    @Input('loop')
    array: any[] = [];

    constructor(private templateRef: TemplateRef<any>, private containerRef: ViewContainerRef) {}

    ngOnInit() {
       this.array.forEach ((item, index) => {
        this.containerRef.createEmbeddedView(this.templateRef, {
            item: item,
            index: index,
        });
       });
    }
}