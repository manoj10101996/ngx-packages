import { Directive, Input } from '@angular/core';
import * as i0 from "@angular/core";
export class EmailcutDirective {
    constructor(el, renderer) {
        this.el = el;
        this.renderer = renderer;
    }
    ngOnInit() {
        let actualText;
        this.invalid = this.invalid ? this.invalid : 'Invalid Email!';
        actualText = this.el.nativeElement.textContent;
        if (actualText.includes('@') && actualText.includes('.')) {
            let email = actualText.split('@');
            let pre = '';
            let post = '';
            pre = email[0].trim();
            post = email[1].trim();
            pre = pre.slice(0, -5);
            post = post.substr(1, post.length);
            this.el.nativeElement.textContent = pre + '****' + post;
        }
        else {
            this.el.nativeElement.textContent = this.invalid;
            this.renderer.setStyle(this.el.nativeElement, 'color', 'crimson');
            this.renderer.setStyle(this.el.nativeElement, 'font-weight', 'bold');
        }
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.5", ngImport: i0, type: EmailcutDirective, deps: [{ token: i0.ElementRef }, { token: i0.Renderer2 }], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "17.3.5", type: EmailcutDirective, isStandalone: true, selector: "[ngxEmailSlicer]", inputs: { invalid: "invalid" }, ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.5", ngImport: i0, type: EmailcutDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[ngxEmailSlicer]',
                    standalone: true,
                }]
        }], ctorParameters: () => [{ type: i0.ElementRef }, { type: i0.Renderer2 }], propDecorators: { invalid: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW1haWxjdXQuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LXN0cmluZ3Mvc3JjL2xpYi9kaXJlY3RpdmVzL2VtYWlsY3V0LmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBeUIsTUFBTSxlQUFlLENBQUM7O0FBTXhFLE1BQU0sT0FBTyxpQkFBaUI7SUFFNUIsWUFBb0IsRUFBYyxFQUFVLFFBQW1CO1FBQTNDLE9BQUUsR0FBRixFQUFFLENBQVk7UUFBVSxhQUFRLEdBQVIsUUFBUSxDQUFXO0lBQUcsQ0FBQztJQUNuRSxRQUFRO1FBQ04sSUFBSSxVQUFrQixDQUFDO1FBQ3ZCLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsZ0JBQWdCLENBQUM7UUFDOUQsVUFBVSxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FBQztRQUMvQyxJQUFJLFVBQVUsQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLElBQUksVUFBVSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsRUFBRTtZQUN4RCxJQUFJLEtBQUssR0FBRyxVQUFVLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ2xDLElBQUksR0FBRyxHQUFHLEVBQUUsQ0FBQztZQUNiLElBQUksSUFBSSxHQUFHLEVBQUUsQ0FBQztZQUNkLEdBQUcsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUM7WUFDdEIsSUFBSSxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztZQUN2QixHQUFHLEdBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUN2QixJQUFJLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ25DLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLFdBQVcsR0FBRyxHQUFHLEdBQUcsTUFBTSxHQUFHLElBQUksQ0FBQztTQUN6RDthQUFNO1lBQ0wsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUM7WUFDakQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLEVBQUUsT0FBTyxFQUFFLFNBQVMsQ0FBQyxDQUFDO1lBQ2xFLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxFQUFFLGFBQWEsRUFBRSxNQUFNLENBQUMsQ0FBQztTQUN0RTtJQUNILENBQUM7OEdBckJVLGlCQUFpQjtrR0FBakIsaUJBQWlCOzsyRkFBakIsaUJBQWlCO2tCQUo3QixTQUFTO21CQUFDO29CQUNQLFFBQVEsRUFBRSxrQkFBa0I7b0JBQzVCLFVBQVUsRUFBRSxJQUFJO2lCQUNuQjt1R0FFVSxPQUFPO3NCQUFmLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIElucHV0LCBFbGVtZW50UmVmLCBSZW5kZXJlcjIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQERpcmVjdGl2ZSh7XG4gICAgc2VsZWN0b3I6ICdbbmd4RW1haWxTbGljZXJdJyxcbiAgICBzdGFuZGFsb25lOiB0cnVlLFxufSlcbmV4cG9ydCBjbGFzcyBFbWFpbGN1dERpcmVjdGl2ZSB7XG4gIEBJbnB1dCgpIGludmFsaWQ6IHN0cmluZztcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBlbDogRWxlbWVudFJlZiwgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyKSB7fVxuICBuZ09uSW5pdCgpIHtcbiAgICBsZXQgYWN0dWFsVGV4dDogc3RyaW5nO1xuICAgIHRoaXMuaW52YWxpZCA9IHRoaXMuaW52YWxpZCA/IHRoaXMuaW52YWxpZCA6ICdJbnZhbGlkIEVtYWlsISc7XG4gICAgYWN0dWFsVGV4dCA9IHRoaXMuZWwubmF0aXZlRWxlbWVudC50ZXh0Q29udGVudDtcbiAgICBpZiAoYWN0dWFsVGV4dC5pbmNsdWRlcygnQCcpICYmIGFjdHVhbFRleHQuaW5jbHVkZXMoJy4nKSkge1xuICAgICAgbGV0IGVtYWlsID0gYWN0dWFsVGV4dC5zcGxpdCgnQCcpO1xuICAgICAgbGV0IHByZSA9ICcnO1xuICAgICAgbGV0IHBvc3QgPSAnJztcbiAgICAgIHByZSA9IGVtYWlsWzBdLnRyaW0oKTtcbiAgICAgIHBvc3QgPSBlbWFpbFsxXS50cmltKCk7XG4gICAgICBwcmUgPSBwcmUuc2xpY2UoMCwgLTUpO1xuICAgICAgcG9zdCA9IHBvc3Quc3Vic3RyKDEsIHBvc3QubGVuZ3RoKTtcbiAgICAgIHRoaXMuZWwubmF0aXZlRWxlbWVudC50ZXh0Q29udGVudCA9IHByZSArICcqKioqJyArIHBvc3Q7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZWwubmF0aXZlRWxlbWVudC50ZXh0Q29udGVudCA9IHRoaXMuaW52YWxpZDtcbiAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy5lbC5uYXRpdmVFbGVtZW50LCAnY29sb3InLCAnY3JpbXNvbicpO1xuICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQsICdmb250LXdlaWdodCcsICdib2xkJyk7XG4gICAgfVxuICB9XG59XG4iXX0=