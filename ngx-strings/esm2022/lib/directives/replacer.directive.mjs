import { Directive, Input } from '@angular/core';
import * as i0 from "@angular/core";
export class ReplacerDirective {
    constructor(el, renderer) {
        this.el = el;
        this.renderer = renderer;
    }
    ngOnInit() {
        let find = this.from;
        let re = new RegExp(find, 'g');
        let actualText;
        actualText = this.el.nativeElement.textContent;
        actualText = actualText.replace(re, this.to);
        this.el.nativeElement.textContent = actualText;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.8", ngImport: i0, type: ReplacerDirective, deps: [{ token: i0.ElementRef }, { token: i0.Renderer2 }], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "17.0.8", type: ReplacerDirective, isStandalone: true, selector: "[ngxStringReplacer]", inputs: { from: "from", to: "to" }, ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.8", ngImport: i0, type: ReplacerDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[ngxStringReplacer]',
                    standalone: true,
                }]
        }], ctorParameters: () => [{ type: i0.ElementRef }, { type: i0.Renderer2 }], propDecorators: { from: [{
                type: Input
            }], to: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVwbGFjZXIuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LXN0cmluZ3Mvc3JjL2xpYi9kaXJlY3RpdmVzL3JlcGxhY2VyLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBeUIsTUFBTSxlQUFlLENBQUM7O0FBTXhFLE1BQU0sT0FBTyxpQkFBaUI7SUFJNUIsWUFBb0IsRUFBYyxFQUFVLFFBQW1CO1FBQTNDLE9BQUUsR0FBRixFQUFFLENBQVk7UUFBVSxhQUFRLEdBQVIsUUFBUSxDQUFXO0lBQUcsQ0FBQztJQUNuRSxRQUFRO1FBQ04sSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztRQUNyQixJQUFJLEVBQUUsR0FBRyxJQUFJLE1BQU0sQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFFL0IsSUFBSSxVQUFrQixDQUFDO1FBQ3ZCLFVBQVUsR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUM7UUFDL0MsVUFBVSxHQUFHLFVBQVUsQ0FBQyxPQUFPLENBQUMsRUFBRSxFQUFFLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUM3QyxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxXQUFXLEdBQUcsVUFBVSxDQUFDO0lBQ2pELENBQUM7OEdBYlUsaUJBQWlCO2tHQUFqQixpQkFBaUI7OzJGQUFqQixpQkFBaUI7a0JBSjdCLFNBQVM7bUJBQUM7b0JBQ1AsUUFBUSxFQUFFLHFCQUFxQjtvQkFDL0IsVUFBVSxFQUFFLElBQUk7aUJBQ25CO3VHQUVVLElBQUk7c0JBQVosS0FBSztnQkFDRyxFQUFFO3NCQUFWLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIElucHV0LCBFbGVtZW50UmVmLCBSZW5kZXJlcjIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQERpcmVjdGl2ZSh7XG4gICAgc2VsZWN0b3I6ICdbbmd4U3RyaW5nUmVwbGFjZXJdJyxcbiAgICBzdGFuZGFsb25lOiB0cnVlLFxufSlcbmV4cG9ydCBjbGFzcyBSZXBsYWNlckRpcmVjdGl2ZSB7XG4gIEBJbnB1dCgpIGZyb206IHN0cmluZztcbiAgQElucHV0KCkgdG86IHN0cmluZztcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsOiBFbGVtZW50UmVmLCBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIpIHt9XG4gIG5nT25Jbml0KCkge1xuICAgIGxldCBmaW5kID0gdGhpcy5mcm9tO1xuICAgIGxldCByZSA9IG5ldyBSZWdFeHAoZmluZCwgJ2cnKTtcblxuICAgIGxldCBhY3R1YWxUZXh0OiBzdHJpbmc7XG4gICAgYWN0dWFsVGV4dCA9IHRoaXMuZWwubmF0aXZlRWxlbWVudC50ZXh0Q29udGVudDtcbiAgICBhY3R1YWxUZXh0ID0gYWN0dWFsVGV4dC5yZXBsYWNlKHJlLCB0aGlzLnRvKTtcbiAgICB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQudGV4dENvbnRlbnQgPSBhY3R1YWxUZXh0O1xuICB9XG59XG4iXX0=