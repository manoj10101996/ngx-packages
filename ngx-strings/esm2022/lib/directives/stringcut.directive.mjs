import { Directive, Input } from '@angular/core';
import * as i0 from "@angular/core";
export class StringcutDirective {
    constructor(el, renderer) {
        this.el = el;
        this.renderer = renderer;
    }
    ngOnInit() {
        let actualText;
        actualText = this.el.nativeElement.textContent;
        actualText = actualText.slice(this.start, this.end);
        if (this.overflow === true) {
            this.el.nativeElement.textContent = actualText + '...';
        }
        else {
            this.el.nativeElement.textContent = actualText;
        }
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.5", ngImport: i0, type: StringcutDirective, deps: [{ token: i0.ElementRef }, { token: i0.Renderer2 }], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "17.3.5", type: StringcutDirective, isStandalone: true, selector: "[ngxStringSlicer]", inputs: { start: "start", end: "end", overflow: "overflow" }, ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.5", ngImport: i0, type: StringcutDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[ngxStringSlicer]',
                    standalone: true,
                }]
        }], ctorParameters: () => [{ type: i0.ElementRef }, { type: i0.Renderer2 }], propDecorators: { start: [{
                type: Input
            }], end: [{
                type: Input
            }], overflow: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RyaW5nY3V0LmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1zdHJpbmdzL3NyYy9saWIvZGlyZWN0aXZlcy9zdHJpbmdjdXQuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFpQyxNQUFNLGVBQWUsQ0FBQzs7QUFNaEYsTUFBTSxPQUFPLGtCQUFrQjtJQUs3QixZQUFvQixFQUFjLEVBQVUsUUFBbUI7UUFBM0MsT0FBRSxHQUFGLEVBQUUsQ0FBWTtRQUFVLGFBQVEsR0FBUixRQUFRLENBQVc7SUFBSSxDQUFDO0lBQ3BFLFFBQVE7UUFDTixJQUFJLFVBQWtCLENBQUM7UUFDdkIsVUFBVSxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FBQztRQUMvQyxVQUFVLEdBQUcsVUFBVSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNwRCxJQUFJLElBQUksQ0FBQyxRQUFRLEtBQUssSUFBSSxFQUFFO1lBQzFCLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLFdBQVcsR0FBRyxVQUFVLEdBQUcsS0FBSyxDQUFDO1NBQ3hEO2FBQU07WUFDTCxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxXQUFXLEdBQUcsVUFBVSxDQUFDO1NBQ2hEO0lBQ0gsQ0FBQzs4R0FmVSxrQkFBa0I7a0dBQWxCLGtCQUFrQjs7MkZBQWxCLGtCQUFrQjtrQkFKOUIsU0FBUzttQkFBQztvQkFDUCxRQUFRLEVBQUUsbUJBQW1CO29CQUM3QixVQUFVLEVBQUUsSUFBSTtpQkFDbkI7dUdBRVUsS0FBSztzQkFBYixLQUFLO2dCQUNHLEdBQUc7c0JBQVgsS0FBSztnQkFDRyxRQUFRO3NCQUFoQixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBJbnB1dCwgRWxlbWVudFJlZiwgUmVuZGVyZXIyLCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQERpcmVjdGl2ZSh7XG4gICAgc2VsZWN0b3I6ICdbbmd4U3RyaW5nU2xpY2VyXScsXG4gICAgc3RhbmRhbG9uZTogdHJ1ZSxcbn0pXG5leHBvcnQgY2xhc3MgU3RyaW5nY3V0RGlyZWN0aXZlIGltcGxlbWVudHMgT25Jbml0IHtcbiAgQElucHV0KCkgc3RhcnQ6IG51bWJlcjtcbiAgQElucHV0KCkgZW5kOiBudW1iZXI7XG4gIEBJbnB1dCgpIG92ZXJmbG93OiBib29sZWFuO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZWw6IEVsZW1lbnRSZWYsIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMikgeyB9XG4gIG5nT25Jbml0KCkge1xuICAgIGxldCBhY3R1YWxUZXh0OiBzdHJpbmc7XG4gICAgYWN0dWFsVGV4dCA9IHRoaXMuZWwubmF0aXZlRWxlbWVudC50ZXh0Q29udGVudDtcbiAgICBhY3R1YWxUZXh0ID0gYWN0dWFsVGV4dC5zbGljZSh0aGlzLnN0YXJ0LCB0aGlzLmVuZCk7XG4gICAgaWYgKHRoaXMub3ZlcmZsb3cgPT09IHRydWUpIHtcbiAgICAgIHRoaXMuZWwubmF0aXZlRWxlbWVudC50ZXh0Q29udGVudCA9IGFjdHVhbFRleHQgKyAnLi4uJztcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5lbC5uYXRpdmVFbGVtZW50LnRleHRDb250ZW50ID0gYWN0dWFsVGV4dDtcbiAgICB9XG4gIH1cbn1cbiJdfQ==