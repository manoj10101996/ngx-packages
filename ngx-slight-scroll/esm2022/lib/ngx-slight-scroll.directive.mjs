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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.8", ngImport: i0, type: NgxSlightScrollDirective, deps: [{ token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "17.0.8", type: NgxSlightScrollDirective, isStandalone: true, selector: "[ngxSlimScroll]", inputs: { maxHeight: "maxHeight", minHeight: "minHeight", scrollBg: "scrollBg", scrollThumbBg: "scrollThumbBg", scrollThumbRadius: "scrollThumbRadius", scrollWidth: "scrollWidth", scrollBorder: "scrollBorder" }, outputs: { scrollEndEvent: "scrollEndEvent" }, ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.8", ngImport: i0, type: NgxSlightScrollDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: "[ngxSlimScroll]",
                    standalone: true
                }]
        }], ctorParameters: () => [{ type: i0.ElementRef }], propDecorators: { maxHeight: [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LXNsaWdodC1zY3JvbGwuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LXNsaWdodC1zY3JvbGwvc3JjL2xpYi9uZ3gtc2xpZ2h0LXNjcm9sbC5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFpQixZQUFZLEVBQUUsU0FBUyxFQUFjLEtBQUssRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7O0FBTWxHLE1BQU0sT0FBTyx3QkFBd0I7SUFhbkMsWUFBb0IsRUFBYztRQUFkLE9BQUUsR0FBRixFQUFFLENBQVk7UUFWekIsYUFBUSxHQUFXLE1BQU0sQ0FBQztRQUMxQixrQkFBYSxHQUFXLFNBQVMsQ0FBQztRQUNsQyxzQkFBaUIsR0FBVyxDQUFDLENBQUM7UUFDOUIsZ0JBQVcsR0FBVyxFQUFFLENBQUM7UUFDekIsaUJBQVksR0FBWSxLQUFLLENBQUM7UUFFN0IsbUJBQWMsR0FBc0IsSUFBSSxZQUFZLEVBQU8sQ0FBQztRQUtwRSxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBNEIsQ0FBQztRQUNwRCxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsbUJBQW1CLENBQUMsQ0FBQztJQUNsRCxDQUFDO0lBRUQsZUFBZTtRQUNiLElBQUksSUFBSSxDQUFDLFlBQVksRUFBRTtZQUNyQixJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsMEJBQTBCLENBQUMsQ0FBQztTQUN4RDtRQUNELElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRTtZQUNsQixJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQztTQUMvQztRQUNELElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRTtZQUNsQixJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQztTQUMvQztRQUNELFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FDN0IsOEJBQThCLEVBQzlCLElBQUksQ0FBQyxhQUFhLENBQ25CLENBQUM7UUFDRixRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQzdCLGtDQUFrQyxFQUNsQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsUUFBUSxFQUFFLEdBQUcsSUFBSSxDQUN6QyxDQUFDO1FBQ0YsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUM3QiwyQkFBMkIsRUFDM0IsSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLEVBQUUsR0FBRyxJQUFJLENBQ25DLENBQUM7UUFDRixRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsd0JBQXdCLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBRXpFLElBQUksQ0FBQyxPQUFPLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxFQUFFLEdBQUcsRUFBRTtZQUMzQyxJQUNFLElBQUksQ0FBQyxPQUFPLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUztnQkFDbEQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxZQUFZLEVBQ3pCO2dCQUNBLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxFQUFFLENBQUM7YUFDNUI7UUFDSCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7OEdBbERVLHdCQUF3QjtrR0FBeEIsd0JBQXdCOzsyRkFBeEIsd0JBQXdCO2tCQUpwQyxTQUFTO21CQUFDO29CQUNQLFFBQVEsRUFBRSxpQkFBaUI7b0JBQzNCLFVBQVUsRUFBRSxJQUFJO2lCQUNuQjsrRUFFVSxTQUFTO3NCQUFqQixLQUFLO2dCQUNHLFNBQVM7c0JBQWpCLEtBQUs7Z0JBQ0csUUFBUTtzQkFBaEIsS0FBSztnQkFDRyxhQUFhO3NCQUFyQixLQUFLO2dCQUNHLGlCQUFpQjtzQkFBekIsS0FBSztnQkFDRyxXQUFXO3NCQUFuQixLQUFLO2dCQUNHLFlBQVk7c0JBQXBCLEtBQUs7Z0JBRUksY0FBYztzQkFBdkIsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFmdGVyVmlld0luaXQsIEV2ZW50RW1pdHRlciwgRGlyZWN0aXZlLCBFbGVtZW50UmVmLCBJbnB1dCwgT3V0cHV0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcblxuQERpcmVjdGl2ZSh7XG4gICAgc2VsZWN0b3I6IFwiW25neFNsaW1TY3JvbGxdXCIsXG4gICAgc3RhbmRhbG9uZTogdHJ1ZVxufSlcbmV4cG9ydCBjbGFzcyBOZ3hTbGlnaHRTY3JvbGxEaXJlY3RpdmUgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0IHtcbiAgQElucHV0KCkgbWF4SGVpZ2h0OiBzdHJpbmc7XG4gIEBJbnB1dCgpIG1pbkhlaWdodDogc3RyaW5nO1xuICBASW5wdXQoKSBzY3JvbGxCZzogc3RyaW5nID0gXCIjZmZmXCI7XG4gIEBJbnB1dCgpIHNjcm9sbFRodW1iQmc6IHN0cmluZyA9IFwiI2Q5ZDlkOVwiO1xuICBASW5wdXQoKSBzY3JvbGxUaHVtYlJhZGl1czogbnVtYmVyID0gMDtcbiAgQElucHV0KCkgc2Nyb2xsV2lkdGg6IG51bWJlciA9IDEwO1xuICBASW5wdXQoKSBzY3JvbGxCb3JkZXI6IGJvb2xlYW4gPSBmYWxzZTtcblxuICBAT3V0cHV0KCkgc2Nyb2xsRW5kRXZlbnQ6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG5cbiAgcHVibGljIGVsZW1lbnQ6IEhUTUxFbGVtZW50O1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZWw6IEVsZW1lbnRSZWYpIHtcbiAgICB0aGlzLmVsZW1lbnQgPSB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQgYXMgSFRNTEVsZW1lbnQ7XG4gICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJuZ3gtc2xpZ2h0LXNjcm9sbFwiKTtcbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5zY3JvbGxCb3JkZXIpIHtcbiAgICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QuYWRkKFwibmd4LXNsaWdodC1zY3JvbGwtYm9yZGVyXCIpO1xuICAgIH1cbiAgICBpZiAodGhpcy5taW5IZWlnaHQpIHtcbiAgICAgIHRoaXMuZWxlbWVudC5zdHlsZS5taW5IZWlnaHQgPSB0aGlzLm1pbkhlaWdodDtcbiAgICB9XG4gICAgaWYgKHRoaXMubWF4SGVpZ2h0KSB7XG4gICAgICB0aGlzLmVsZW1lbnQuc3R5bGUubWF4SGVpZ2h0ID0gdGhpcy5tYXhIZWlnaHQ7XG4gICAgfVxuICAgIGRvY3VtZW50LmJvZHkuc3R5bGUuc2V0UHJvcGVydHkoXG4gICAgICBcIi0tbmd4LXNsaWdodC1zY3JvbGwtdGh1bWItYmdcIixcbiAgICAgIHRoaXMuc2Nyb2xsVGh1bWJCZ1xuICAgICk7XG4gICAgZG9jdW1lbnQuYm9keS5zdHlsZS5zZXRQcm9wZXJ0eShcbiAgICAgIFwiLS1uZ3gtc2xpZ2h0LXNjcm9sbC10aHVtYi1yYWRpdXNcIixcbiAgICAgIHRoaXMuc2Nyb2xsVGh1bWJSYWRpdXMudG9TdHJpbmcoKSArIFwicHhcIlxuICAgICk7XG4gICAgZG9jdW1lbnQuYm9keS5zdHlsZS5zZXRQcm9wZXJ0eShcbiAgICAgIFwiLS1uZ3gtc2xpZ2h0LXNjcm9sbC13aWR0aFwiLFxuICAgICAgdGhpcy5zY3JvbGxXaWR0aC50b1N0cmluZygpICsgXCJweFwiXG4gICAgKTtcbiAgICBkb2N1bWVudC5ib2R5LnN0eWxlLnNldFByb3BlcnR5KFwiLS1uZ3gtc2xpZ2h0LXNjcm9sbC1iZ1wiLCB0aGlzLnNjcm9sbEJnKTtcblxuICAgIHRoaXMuZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsICgpID0+IHtcbiAgICAgIGlmIChcbiAgICAgICAgdGhpcy5lbGVtZW50Lm9mZnNldEhlaWdodCArIHRoaXMuZWxlbWVudC5zY3JvbGxUb3AgPj1cbiAgICAgICAgdGhpcy5lbGVtZW50LnNjcm9sbEhlaWdodFxuICAgICAgKSB7XG4gICAgICAgIHRoaXMuc2Nyb2xsRW5kRXZlbnQuZW1pdCgpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG59XG4iXX0=