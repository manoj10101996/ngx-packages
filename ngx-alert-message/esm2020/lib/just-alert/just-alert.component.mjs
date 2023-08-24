import { Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
export class JustAlertComponent {
    ngOnInit() {
        if (this.mode === 'success') {
            this.color = 'green';
        }
        else if (this.mode === 'primary') {
            this.color = '#0d47a1';
        }
        else if (this.mode === 'danger') {
            this.color = 'crimson';
        }
        else if (this.mode === 'warning') {
            this.color = '#ff9800';
        }
        else if (this.mode === 'info') {
            this.color = 'cornflowerblue';
        }
        else {
            this.color = 'white';
            this.textColor = 'black';
            this.bold = 'true';
        }
    }
}
JustAlertComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: JustAlertComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
JustAlertComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.9", type: JustAlertComponent, selector: "ngx-just-alert", inputs: { mode: "mode", close: "close", bold: "bold", text: "text", disabled: "disabled" }, ngImport: i0, template: "<div class=\"just-container\" [style.border]=\"'1px solid ' + mode\" [style.color]=\"mode\"\r\n  [style.fontWeight]=\"bold === 'true' ? 'bold' : '100'\" [style.opacity]=\"disabled === 'true' ? '0.5' : '1'\"\r\n  [style.cursor]=\"disabled === 'true' ? 'not-allowed' : 'pointer'\">\r\n  <div class=\"just-content\">\r\n    {{ text }}\r\n  </div>\r\n  <div class=\"just-close\" [style.backgroundColor]=\"mode\" [style.color]=\"'white'\">\r\n    <span>&#215;</span>\r\n  </div>\r\n</div>\r\n", styles: [".just-close{width:6%;font-weight:bolder;text-align:center;background-color:#dc143c;color:#fff;border-radius:0;padding:0;display:grid;align-items:center}.just-content{width:95%;padding:.6125rem .8125rem}.just-container{display:flex;border-radius:1;border:1px solid crimson;margin:.625rem 0rem;color:#fff;box-shadow:0 0 5px 5px #f5f5f5}\n"] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: JustAlertComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ngx-just-alert', template: "<div class=\"just-container\" [style.border]=\"'1px solid ' + mode\" [style.color]=\"mode\"\r\n  [style.fontWeight]=\"bold === 'true' ? 'bold' : '100'\" [style.opacity]=\"disabled === 'true' ? '0.5' : '1'\"\r\n  [style.cursor]=\"disabled === 'true' ? 'not-allowed' : 'pointer'\">\r\n  <div class=\"just-content\">\r\n    {{ text }}\r\n  </div>\r\n  <div class=\"just-close\" [style.backgroundColor]=\"mode\" [style.color]=\"'white'\">\r\n    <span>&#215;</span>\r\n  </div>\r\n</div>\r\n", styles: [".just-close{width:6%;font-weight:bolder;text-align:center;background-color:#dc143c;color:#fff;border-radius:0;padding:0;display:grid;align-items:center}.just-content{width:95%;padding:.6125rem .8125rem}.just-container{display:flex;border-radius:1;border:1px solid crimson;margin:.625rem 0rem;color:#fff;box-shadow:0 0 5px 5px #f5f5f5}\n"] }]
        }], propDecorators: { mode: [{
                type: Input
            }], close: [{
                type: Input
            }], bold: [{
                type: Input
            }], text: [{
                type: Input
            }], disabled: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianVzdC1hbGVydC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtYWxlcnQtbWVzc2FnZS9zcmMvbGliL2p1c3QtYWxlcnQvanVzdC1hbGVydC5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtYWxlcnQtbWVzc2FnZS9zcmMvbGliL2p1c3QtYWxlcnQvanVzdC1hbGVydC5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQzs7QUFRekQsTUFBTSxPQUFPLGtCQUFrQjtJQVU3QixRQUFRO1FBQ04sSUFBSSxJQUFJLENBQUMsSUFBSSxLQUFLLFNBQVMsRUFBRTtZQUMzQixJQUFJLENBQUMsS0FBSyxHQUFHLE9BQU8sQ0FBQztTQUN0QjthQUFNLElBQUksSUFBSSxDQUFDLElBQUksS0FBSyxTQUFTLEVBQUU7WUFDbEMsSUFBSSxDQUFDLEtBQUssR0FBRyxTQUFTLENBQUM7U0FDeEI7YUFBTSxJQUFJLElBQUksQ0FBQyxJQUFJLEtBQUssUUFBUSxFQUFFO1lBQ2pDLElBQUksQ0FBQyxLQUFLLEdBQUcsU0FBUyxDQUFDO1NBQ3hCO2FBQU0sSUFBSSxJQUFJLENBQUMsSUFBSSxLQUFLLFNBQVMsRUFBRTtZQUNsQyxJQUFJLENBQUMsS0FBSyxHQUFHLFNBQVMsQ0FBQztTQUN4QjthQUFNLElBQUksSUFBSSxDQUFDLElBQUksS0FBSyxNQUFNLEVBQUU7WUFDL0IsSUFBSSxDQUFDLEtBQUssR0FBRyxnQkFBZ0IsQ0FBQztTQUMvQjthQUFNO1lBQ0wsSUFBSSxDQUFDLEtBQUssR0FBRyxPQUFPLENBQUM7WUFDckIsSUFBSSxDQUFDLFNBQVMsR0FBRyxPQUFPLENBQUM7WUFDekIsSUFBSSxDQUFDLElBQUksR0FBRyxNQUFNLENBQUM7U0FDcEI7SUFDSCxDQUFDOzsrR0ExQlUsa0JBQWtCO21HQUFsQixrQkFBa0Isa0pDUi9CLHllQVVBOzJGREZhLGtCQUFrQjtrQkFMOUIsU0FBUzsrQkFDRSxnQkFBZ0I7OEJBTWpCLElBQUk7c0JBQVosS0FBSztnQkFDRyxLQUFLO3NCQUFiLEtBQUs7Z0JBQ0csSUFBSTtzQkFBWixLQUFLO2dCQUNHLElBQUk7c0JBQVosS0FBSztnQkFDRyxRQUFRO3NCQUFoQixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbnR5cGUgbW9kZSA9IFwicHJpbWFyeVwiIHwgXCJzdWNjZXNzXCIgfCBcImRhbmdlclwiIHwgXCJpbmZvXCIgfCBcIndhcm5pbmdcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbmd4LWp1c3QtYWxlcnQnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9qdXN0LWFsZXJ0LmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9qdXN0LWFsZXJ0LmNvbXBvbmVudC5jc3MnXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIEp1c3RBbGVydENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgdGV4dENvbG9yOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgbW9kZTogbW9kZTtcclxuICBASW5wdXQoKSBjbG9zZTogYW55O1xyXG4gIEBJbnB1dCgpIGJvbGQ6IGFueTtcclxuICBASW5wdXQoKSB0ZXh0OiBhbnk7XHJcbiAgQElucHV0KCkgZGlzYWJsZWQ6IGFueTtcclxuXHJcbiAgcHVibGljIGNvbG9yOiBzdHJpbmc7XHJcblxyXG4gIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMubW9kZSA9PT0gJ3N1Y2Nlc3MnKSB7XHJcbiAgICAgIHRoaXMuY29sb3IgPSAnZ3JlZW4nO1xyXG4gICAgfSBlbHNlIGlmICh0aGlzLm1vZGUgPT09ICdwcmltYXJ5Jykge1xyXG4gICAgICB0aGlzLmNvbG9yID0gJyMwZDQ3YTEnO1xyXG4gICAgfSBlbHNlIGlmICh0aGlzLm1vZGUgPT09ICdkYW5nZXInKSB7XHJcbiAgICAgIHRoaXMuY29sb3IgPSAnY3JpbXNvbic7XHJcbiAgICB9IGVsc2UgaWYgKHRoaXMubW9kZSA9PT0gJ3dhcm5pbmcnKSB7XHJcbiAgICAgIHRoaXMuY29sb3IgPSAnI2ZmOTgwMCc7XHJcbiAgICB9IGVsc2UgaWYgKHRoaXMubW9kZSA9PT0gJ2luZm8nKSB7XHJcbiAgICAgIHRoaXMuY29sb3IgPSAnY29ybmZsb3dlcmJsdWUnO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5jb2xvciA9ICd3aGl0ZSc7XHJcbiAgICAgIHRoaXMudGV4dENvbG9yID0gJ2JsYWNrJztcclxuICAgICAgdGhpcy5ib2xkID0gJ3RydWUnO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCI8ZGl2IGNsYXNzPVwianVzdC1jb250YWluZXJcIiBbc3R5bGUuYm9yZGVyXT1cIicxcHggc29saWQgJyArIG1vZGVcIiBbc3R5bGUuY29sb3JdPVwibW9kZVwiXHJcbiAgW3N0eWxlLmZvbnRXZWlnaHRdPVwiYm9sZCA9PT0gJ3RydWUnID8gJ2JvbGQnIDogJzEwMCdcIiBbc3R5bGUub3BhY2l0eV09XCJkaXNhYmxlZCA9PT0gJ3RydWUnID8gJzAuNScgOiAnMSdcIlxyXG4gIFtzdHlsZS5jdXJzb3JdPVwiZGlzYWJsZWQgPT09ICd0cnVlJyA/ICdub3QtYWxsb3dlZCcgOiAncG9pbnRlcidcIj5cclxuICA8ZGl2IGNsYXNzPVwianVzdC1jb250ZW50XCI+XHJcbiAgICB7eyB0ZXh0IH19XHJcbiAgPC9kaXY+XHJcbiAgPGRpdiBjbGFzcz1cImp1c3QtY2xvc2VcIiBbc3R5bGUuYmFja2dyb3VuZENvbG9yXT1cIm1vZGVcIiBbc3R5bGUuY29sb3JdPVwiJ3doaXRlJ1wiPlxyXG4gICAgPHNwYW4+JiMyMTU7PC9zcGFuPlxyXG4gIDwvZGl2PlxyXG48L2Rpdj5cclxuIl19