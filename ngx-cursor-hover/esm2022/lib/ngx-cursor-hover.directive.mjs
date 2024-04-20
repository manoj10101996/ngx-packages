import { Directive, Input } from "@angular/core";
import * as i0 from "@angular/core";
export class NgxCursorHoverDirective {
    constructor(el) {
        this.el = el;
        this.cursor = "pointer";
        this.element = this.el.nativeElement;
    }
    ngAfterViewInit() {
        this.element.classList.add("ngx-cursor-hover-" + this.cursor);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.5", ngImport: i0, type: NgxCursorHoverDirective, deps: [{ token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "17.3.5", type: NgxCursorHoverDirective, isStandalone: true, selector: "[ngxCursor]", inputs: { cursor: "cursor" }, ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.5", ngImport: i0, type: NgxCursorHoverDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: "[ngxCursor]",
                    standalone: true
                }]
        }], ctorParameters: () => [{ type: i0.ElementRef }], propDecorators: { cursor: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWN1cnNvci1ob3Zlci5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtY3Vyc29yLWhvdmVyL3NyYy9saWIvbmd4LWN1cnNvci1ob3Zlci5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFpQixTQUFTLEVBQWMsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDOztBQU01RSxNQUFNLE9BQU8sdUJBQXVCO0lBR2xDLFlBQW9CLEVBQWM7UUFBZCxPQUFFLEdBQUYsRUFBRSxDQUFZO1FBRnpCLFdBQU0sR0FBVyxTQUFTLENBQUM7UUFHbEMsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQztJQUN2QyxDQUFDO0lBRUQsZUFBZTtRQUNiLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxtQkFBbUIsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDaEUsQ0FBQzs4R0FUVSx1QkFBdUI7a0dBQXZCLHVCQUF1Qjs7MkZBQXZCLHVCQUF1QjtrQkFKbkMsU0FBUzttQkFBQztvQkFDUCxRQUFRLEVBQUUsYUFBYTtvQkFDdkIsVUFBVSxFQUFFLElBQUk7aUJBQ25COytFQUVVLE1BQU07c0JBQWQsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFmdGVyVmlld0luaXQsIERpcmVjdGl2ZSwgRWxlbWVudFJlZiwgSW5wdXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuXG5ARGlyZWN0aXZlKHtcbiAgICBzZWxlY3RvcjogXCJbbmd4Q3Vyc29yXVwiLFxuICAgIHN0YW5kYWxvbmU6IHRydWVcbn0pXG5leHBvcnQgY2xhc3MgTmd4Q3Vyc29ySG92ZXJEaXJlY3RpdmUgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0IHtcbiAgQElucHV0KCkgY3Vyc29yOiBzdHJpbmcgPSBcInBvaW50ZXJcIjtcbiAgcHJpdmF0ZSBlbGVtZW50OiBIVE1MRWxlbWVudDtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBlbDogRWxlbWVudFJlZikge1xuICAgIHRoaXMuZWxlbWVudCA9IHRoaXMuZWwubmF0aXZlRWxlbWVudDtcbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LmFkZChcIm5neC1jdXJzb3ItaG92ZXItXCIgKyB0aGlzLmN1cnNvcik7XG4gIH1cbn1cbiJdfQ==