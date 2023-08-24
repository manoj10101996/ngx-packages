import { EventEmitter, Directive, Input, Output } from "@angular/core";
import * as i0 from "@angular/core";
export class NgxSlightScrollDirective {
    constructor(el) {
        this.el = el;
        this.scrollBg = "#fff";
        this.scrollThumbBg = "#d9d9d9";
        this.scrollThumbRadius = 0;
        this.scrollWidth = 10;
        this.scrollBorder = false;
        this.scrollEndEvent = new EventEmitter();
        this.element = this.el.nativeElement;
        this.element.classList.add("ngx-slight-scroll");
    }
    ngAfterViewInit() {
        if (this.scrollBorder) {
            this.element.classList.add("ngx-slight-scroll-border");
        }
        if (this.minHeight) {
            this.element.style.minHeight = this.minHeight;
        }
        if (this.maxHeight) {
            this.element.style.maxHeight = this.maxHeight;
        }
        document.body.style.setProperty("--ngx-slight-scroll-thumb-bg", this.scrollThumbBg);
        document.body.style.setProperty("--ngx-slight-scroll-thumb-radius", this.scrollThumbRadius.toString() + "px");
        document.body.style.setProperty("--ngx-slight-scroll-width", this.scrollWidth.toString() + "px");
        document.body.style.setProperty("--ngx-slight-scroll-bg", this.scrollBg);
        this.element.addEventListener("scroll", () => {
            if (this.element.offsetHeight + this.element.scrollTop >=
                this.element.scrollHeight) {
                this.scrollEndEvent.emit();
            }
        });
    }
}
NgxSlightScrollDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: NgxSlightScrollDirective, deps: [{ token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Directive });
NgxSlightScrollDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "15.2.9", type: NgxSlightScrollDirective, selector: "[ngxSlimScroll]", inputs: { maxHeight: "maxHeight", minHeight: "minHeight", scrollBg: "scrollBg", scrollThumbBg: "scrollThumbBg", scrollThumbRadius: "scrollThumbRadius", scrollWidth: "scrollWidth", scrollBorder: "scrollBorder" }, outputs: { scrollEndEvent: "scrollEndEvent" }, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: NgxSlightScrollDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: "[ngxSlimScroll]"
                }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }]; }, propDecorators: { maxHeight: [{
                type: Input
            }], minHeight: [{
                type: Input
            }], scrollBg: [{
                type: Input
            }], scrollThumbBg: [{
                type: Input
            }], scrollThumbRadius: [{
                type: Input
            }], scrollWidth: [{
                type: Input
            }], scrollBorder: [{
                type: Input
            }], scrollEndEvent: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LXNsaWdodC1zY3JvbGwuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LXNsaWdodC1zY3JvbGwvc3JjL2xpYi9uZ3gtc2xpZ2h0LXNjcm9sbC5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFpQixZQUFZLEVBQUUsU0FBUyxFQUFjLEtBQUssRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7O0FBS2xHLE1BQU0sT0FBTyx3QkFBd0I7SUFhbkMsWUFBb0IsRUFBYztRQUFkLE9BQUUsR0FBRixFQUFFLENBQVk7UUFWekIsYUFBUSxHQUFXLE1BQU0sQ0FBQztRQUMxQixrQkFBYSxHQUFXLFNBQVMsQ0FBQztRQUNsQyxzQkFBaUIsR0FBVyxDQUFDLENBQUM7UUFDOUIsZ0JBQVcsR0FBVyxFQUFFLENBQUM7UUFDekIsaUJBQVksR0FBWSxLQUFLLENBQUM7UUFFN0IsbUJBQWMsR0FBc0IsSUFBSSxZQUFZLEVBQU8sQ0FBQztRQUtwRSxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBNEIsQ0FBQztRQUNwRCxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsbUJBQW1CLENBQUMsQ0FBQztJQUNsRCxDQUFDO0lBRUQsZUFBZTtRQUNiLElBQUksSUFBSSxDQUFDLFlBQVksRUFBRTtZQUNyQixJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsMEJBQTBCLENBQUMsQ0FBQztTQUN4RDtRQUNELElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRTtZQUNsQixJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQztTQUMvQztRQUNELElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRTtZQUNsQixJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQztTQUMvQztRQUNELFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FDN0IsOEJBQThCLEVBQzlCLElBQUksQ0FBQyxhQUFhLENBQ25CLENBQUM7UUFDRixRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQzdCLGtDQUFrQyxFQUNsQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsUUFBUSxFQUFFLEdBQUcsSUFBSSxDQUN6QyxDQUFDO1FBQ0YsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUM3QiwyQkFBMkIsRUFDM0IsSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLEVBQUUsR0FBRyxJQUFJLENBQ25DLENBQUM7UUFDRixRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsd0JBQXdCLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBRXpFLElBQUksQ0FBQyxPQUFPLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxFQUFFLEdBQUcsRUFBRTtZQUMzQyxJQUNFLElBQUksQ0FBQyxPQUFPLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUztnQkFDbEQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxZQUFZLEVBQ3pCO2dCQUNBLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxFQUFFLENBQUM7YUFDNUI7UUFDSCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7O3FIQWxEVSx3QkFBd0I7eUdBQXhCLHdCQUF3QjsyRkFBeEIsd0JBQXdCO2tCQUhwQyxTQUFTO21CQUFDO29CQUNULFFBQVEsRUFBRSxpQkFBaUI7aUJBQzVCO2lHQUVVLFNBQVM7c0JBQWpCLEtBQUs7Z0JBQ0csU0FBUztzQkFBakIsS0FBSztnQkFDRyxRQUFRO3NCQUFoQixLQUFLO2dCQUNHLGFBQWE7c0JBQXJCLEtBQUs7Z0JBQ0csaUJBQWlCO3NCQUF6QixLQUFLO2dCQUNHLFdBQVc7c0JBQW5CLEtBQUs7Z0JBQ0csWUFBWTtzQkFBcEIsS0FBSztnQkFFSSxjQUFjO3NCQUF2QixNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWZ0ZXJWaWV3SW5pdCwgRXZlbnRFbWl0dGVyLCBEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIElucHV0LCBPdXRwdXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6IFwiW25neFNsaW1TY3JvbGxdXCJcbn0pXG5leHBvcnQgY2xhc3MgTmd4U2xpZ2h0U2Nyb2xsRGlyZWN0aXZlIGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCB7XG4gIEBJbnB1dCgpIG1heEhlaWdodDogc3RyaW5nO1xuICBASW5wdXQoKSBtaW5IZWlnaHQ6IHN0cmluZztcbiAgQElucHV0KCkgc2Nyb2xsQmc6IHN0cmluZyA9IFwiI2ZmZlwiO1xuICBASW5wdXQoKSBzY3JvbGxUaHVtYkJnOiBzdHJpbmcgPSBcIiNkOWQ5ZDlcIjtcbiAgQElucHV0KCkgc2Nyb2xsVGh1bWJSYWRpdXM6IG51bWJlciA9IDA7XG4gIEBJbnB1dCgpIHNjcm9sbFdpZHRoOiBudW1iZXIgPSAxMDtcbiAgQElucHV0KCkgc2Nyb2xsQm9yZGVyOiBib29sZWFuID0gZmFsc2U7XG5cbiAgQE91dHB1dCgpIHNjcm9sbEVuZEV2ZW50OiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuXG4gIHB1YmxpYyBlbGVtZW50OiBIVE1MRWxlbWVudDtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsOiBFbGVtZW50UmVmKSB7XG4gICAgdGhpcy5lbGVtZW50ID0gdGhpcy5lbC5uYXRpdmVFbGVtZW50IGFzIEhUTUxFbGVtZW50O1xuICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QuYWRkKFwibmd4LXNsaWdodC1zY3JvbGxcIik7XG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuc2Nyb2xsQm9yZGVyKSB7XG4gICAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LmFkZChcIm5neC1zbGlnaHQtc2Nyb2xsLWJvcmRlclwiKTtcbiAgICB9XG4gICAgaWYgKHRoaXMubWluSGVpZ2h0KSB7XG4gICAgICB0aGlzLmVsZW1lbnQuc3R5bGUubWluSGVpZ2h0ID0gdGhpcy5taW5IZWlnaHQ7XG4gICAgfVxuICAgIGlmICh0aGlzLm1heEhlaWdodCkge1xuICAgICAgdGhpcy5lbGVtZW50LnN0eWxlLm1heEhlaWdodCA9IHRoaXMubWF4SGVpZ2h0O1xuICAgIH1cbiAgICBkb2N1bWVudC5ib2R5LnN0eWxlLnNldFByb3BlcnR5KFxuICAgICAgXCItLW5neC1zbGlnaHQtc2Nyb2xsLXRodW1iLWJnXCIsXG4gICAgICB0aGlzLnNjcm9sbFRodW1iQmdcbiAgICApO1xuICAgIGRvY3VtZW50LmJvZHkuc3R5bGUuc2V0UHJvcGVydHkoXG4gICAgICBcIi0tbmd4LXNsaWdodC1zY3JvbGwtdGh1bWItcmFkaXVzXCIsXG4gICAgICB0aGlzLnNjcm9sbFRodW1iUmFkaXVzLnRvU3RyaW5nKCkgKyBcInB4XCJcbiAgICApO1xuICAgIGRvY3VtZW50LmJvZHkuc3R5bGUuc2V0UHJvcGVydHkoXG4gICAgICBcIi0tbmd4LXNsaWdodC1zY3JvbGwtd2lkdGhcIixcbiAgICAgIHRoaXMuc2Nyb2xsV2lkdGgudG9TdHJpbmcoKSArIFwicHhcIlxuICAgICk7XG4gICAgZG9jdW1lbnQuYm9keS5zdHlsZS5zZXRQcm9wZXJ0eShcIi0tbmd4LXNsaWdodC1zY3JvbGwtYmdcIiwgdGhpcy5zY3JvbGxCZyk7XG5cbiAgICB0aGlzLmVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCAoKSA9PiB7XG4gICAgICBpZiAoXG4gICAgICAgIHRoaXMuZWxlbWVudC5vZmZzZXRIZWlnaHQgKyB0aGlzLmVsZW1lbnQuc2Nyb2xsVG9wID49XG4gICAgICAgIHRoaXMuZWxlbWVudC5zY3JvbGxIZWlnaHRcbiAgICAgICkge1xuICAgICAgICB0aGlzLnNjcm9sbEVuZEV2ZW50LmVtaXQoKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxufVxuIl19