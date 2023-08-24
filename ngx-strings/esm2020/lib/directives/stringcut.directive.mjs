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
}
StringcutDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: StringcutDirective, deps: [{ token: i0.ElementRef }, { token: i0.Renderer2 }], target: i0.ɵɵFactoryTarget.Directive });
StringcutDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "15.2.9", type: StringcutDirective, selector: "[ngxStringSlicer]", inputs: { start: "start", end: "end", overflow: "overflow" }, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: StringcutDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[ngxStringSlicer]',
                }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }, { type: i0.Renderer2 }]; }, propDecorators: { start: [{
                type: Input
            }], end: [{
                type: Input
            }], overflow: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RyaW5nY3V0LmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1zdHJpbmdzL3NyYy9saWIvZGlyZWN0aXZlcy9zdHJpbmdjdXQuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFpQyxNQUFNLGVBQWUsQ0FBQzs7QUFLaEYsTUFBTSxPQUFPLGtCQUFrQjtJQUs3QixZQUFvQixFQUFjLEVBQVUsUUFBbUI7UUFBM0MsT0FBRSxHQUFGLEVBQUUsQ0FBWTtRQUFVLGFBQVEsR0FBUixRQUFRLENBQVc7SUFBSSxDQUFDO0lBQ3BFLFFBQVE7UUFDTixJQUFJLFVBQWtCLENBQUM7UUFDdkIsVUFBVSxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FBQztRQUMvQyxVQUFVLEdBQUcsVUFBVSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNwRCxJQUFJLElBQUksQ0FBQyxRQUFRLEtBQUssSUFBSSxFQUFFO1lBQzFCLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLFdBQVcsR0FBRyxVQUFVLEdBQUcsS0FBSyxDQUFDO1NBQ3hEO2FBQU07WUFDTCxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxXQUFXLEdBQUcsVUFBVSxDQUFDO1NBQ2hEO0lBQ0gsQ0FBQzs7K0dBZlUsa0JBQWtCO21HQUFsQixrQkFBa0I7MkZBQWxCLGtCQUFrQjtrQkFIOUIsU0FBUzttQkFBQztvQkFDVCxRQUFRLEVBQUUsbUJBQW1CO2lCQUM5Qjt5SEFFVSxLQUFLO3NCQUFiLEtBQUs7Z0JBQ0csR0FBRztzQkFBWCxLQUFLO2dCQUNHLFFBQVE7c0JBQWhCLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIElucHV0LCBFbGVtZW50UmVmLCBSZW5kZXJlcjIsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQERpcmVjdGl2ZSh7XHJcbiAgc2VsZWN0b3I6ICdbbmd4U3RyaW5nU2xpY2VyXScsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTdHJpbmdjdXREaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIEBJbnB1dCgpIHN0YXJ0OiBudW1iZXI7XHJcbiAgQElucHV0KCkgZW5kOiBudW1iZXI7XHJcbiAgQElucHV0KCkgb3ZlcmZsb3c6IGJvb2xlYW47XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZWw6IEVsZW1lbnRSZWYsIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMikgeyB9XHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICBsZXQgYWN0dWFsVGV4dDogc3RyaW5nO1xyXG4gICAgYWN0dWFsVGV4dCA9IHRoaXMuZWwubmF0aXZlRWxlbWVudC50ZXh0Q29udGVudDtcclxuICAgIGFjdHVhbFRleHQgPSBhY3R1YWxUZXh0LnNsaWNlKHRoaXMuc3RhcnQsIHRoaXMuZW5kKTtcclxuICAgIGlmICh0aGlzLm92ZXJmbG93ID09PSB0cnVlKSB7XHJcbiAgICAgIHRoaXMuZWwubmF0aXZlRWxlbWVudC50ZXh0Q29udGVudCA9IGFjdHVhbFRleHQgKyAnLi4uJztcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuZWwubmF0aXZlRWxlbWVudC50ZXh0Q29udGVudCA9IGFjdHVhbFRleHQ7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ==