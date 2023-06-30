import { Directive, HostListener } from "@angular/core";

@Directive({
    selector: 'a[no-open]'
})
export class NoOpenDirective{

    @HostListener('click')
    onClickLink(){
        window.alert('Accés impossible !');
        return false;
        
    }
}