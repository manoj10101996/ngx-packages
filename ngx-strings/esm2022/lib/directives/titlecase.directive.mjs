import { Directive } from '@angular/core';
import * as i0 from "@angular/core";
export class TitlecaseDirective {
    constructor(el, renderer) {
        this.el = el;
        this.renderer = renderer;
        this.renderer.setStyle(this.el.nativeElement, 'text-transform', 'capitalize');
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.8", ngImport: i0, type: TitlecaseDirective, deps: [{ token: i0.ElementRef }, { token: i0.Renderer2 }], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "17.0.8", type: TitlecaseDirective, isStandalone: true, selector: "[ngxTitleCase]", ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.8", ngImport: i0, type: TitlecaseDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[ngxTitleCase]',
                    standalone: true,
                }]
        }], ctorParameters: () => [{ type: i0.ElementRef }, { type: i0.Renderer2 }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGl0bGVjYXNlLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1zdHJpbmdzL3NyYy9saWIvZGlyZWN0aXZlcy90aXRsZWNhc2UuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQXlCLE1BQU0sZUFBZSxDQUFDOztBQU1qRSxNQUFNLE9BQU8sa0JBQWtCO0lBQzdCLFlBQW9CLEVBQWMsRUFBVSxRQUFtQjtRQUEzQyxPQUFFLEdBQUYsRUFBRSxDQUFZO1FBQVUsYUFBUSxHQUFSLFFBQVEsQ0FBVztRQUM3RCxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FDcEIsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLEVBQ3JCLGdCQUFnQixFQUNoQixZQUFZLENBQ2IsQ0FBQztJQUNKLENBQUM7OEdBUFUsa0JBQWtCO2tHQUFsQixrQkFBa0I7OzJGQUFsQixrQkFBa0I7a0JBSjlCLFNBQVM7bUJBQUM7b0JBQ1AsUUFBUSxFQUFFLGdCQUFnQjtvQkFDMUIsVUFBVSxFQUFFLElBQUk7aUJBQ25CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBFbGVtZW50UmVmLCBSZW5kZXJlcjIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQERpcmVjdGl2ZSh7XG4gICAgc2VsZWN0b3I6ICdbbmd4VGl0bGVDYXNlXScsXG4gICAgc3RhbmRhbG9uZTogdHJ1ZSxcbn0pXG5leHBvcnQgY2xhc3MgVGl0bGVjYXNlRGlyZWN0aXZlIHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBlbDogRWxlbWVudFJlZiwgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyKSB7XG4gICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZShcbiAgICAgIHRoaXMuZWwubmF0aXZlRWxlbWVudCxcbiAgICAgICd0ZXh0LXRyYW5zZm9ybScsXG4gICAgICAnY2FwaXRhbGl6ZSdcbiAgICApO1xuICB9XG59XG4iXX0=