import { Directive, HostBinding, HostListener, Input } from "@angular/core";

@Directive({
    selector: 'p[highlight]',
    exportAs: 'hl',
})

export class HighlightDirective{

    @HostBinding('style.backgroundColor')
    color = 'transparent';

    ngOnInit() {
        this.color = this.baseColor;
    }

    @Input('background-color')
    backgroundColor = 'blue';

    @Input('base-color')
    baseColor = 'transparent';

    @HostListener('mouseenter')
    onMouseEnter() {
       this.color = this.backgroundColor;
    }

    @HostListener('mouseout')
    onMouseOut() {
        this.color = this.baseColor;
    }
}