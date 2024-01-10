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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.8", ngImport: i0, type: JustAlertComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.0.8", type: JustAlertComponent, isStandalone: true, selector: "ngx-just-alert", inputs: { mode: "mode", close: "close", bold: "bold", text: "text", disabled: "disabled" }, ngImport: i0, template: "<div class=\"just-container\" [style.border]=\"'1px solid ' + mode\" [style.color]=\"mode\"\n  [style.fontWeight]=\"bold === 'true' ? 'bold' : '100'\" [style.opacity]=\"disabled === 'true' ? '0.5' : '1'\"\n  [style.cursor]=\"disabled === 'true' ? 'not-allowed' : 'pointer'\">\n  <div class=\"just-content\">\n    {{ text }}\n  </div>\n  <div class=\"just-close\" [style.backgroundColor]=\"mode\" [style.color]=\"'white'\">\n    <span>&#215;</span>\n  </div>\n</div>\n", styles: [".just-close{width:6%;font-weight:bolder;text-align:center;background-color:#dc143c;color:#fff;border-radius:0;padding:0;display:grid;align-items:center}.just-content{width:95%;padding:.6125rem .8125rem}.just-container{display:flex;border-radius:1;border:1px solid crimson;margin:.625rem 0rem;color:#fff;box-shadow:0 0 5px 5px #f5f5f5}\n"] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.8", ngImport: i0, type: JustAlertComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ngx-just-alert', standalone: true, template: "<div class=\"just-container\" [style.border]=\"'1px solid ' + mode\" [style.color]=\"mode\"\n  [style.fontWeight]=\"bold === 'true' ? 'bold' : '100'\" [style.opacity]=\"disabled === 'true' ? '0.5' : '1'\"\n  [style.cursor]=\"disabled === 'true' ? 'not-allowed' : 'pointer'\">\n  <div class=\"just-content\">\n    {{ text }}\n  </div>\n  <div class=\"just-close\" [style.backgroundColor]=\"mode\" [style.color]=\"'white'\">\n    <span>&#215;</span>\n  </div>\n</div>\n", styles: [".just-close{width:6%;font-weight:bolder;text-align:center;background-color:#dc143c;color:#fff;border-radius:0;padding:0;display:grid;align-items:center}.just-content{width:95%;padding:.6125rem .8125rem}.just-container{display:flex;border-radius:1;border:1px solid crimson;margin:.625rem 0rem;color:#fff;box-shadow:0 0 5px 5px #f5f5f5}\n"] }]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianVzdC1hbGVydC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtYWxlcnQtbWVzc2FnZS9zcmMvbGliL2p1c3QtYWxlcnQvanVzdC1hbGVydC5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtYWxlcnQtbWVzc2FnZS9zcmMvbGliL2p1c3QtYWxlcnQvanVzdC1hbGVydC5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQzs7QUFTekQsTUFBTSxPQUFPLGtCQUFrQjtJQVU3QixRQUFRO1FBQ04sSUFBSSxJQUFJLENBQUMsSUFBSSxLQUFLLFNBQVMsRUFBRTtZQUMzQixJQUFJLENBQUMsS0FBSyxHQUFHLE9BQU8sQ0FBQztTQUN0QjthQUFNLElBQUksSUFBSSxDQUFDLElBQUksS0FBSyxTQUFTLEVBQUU7WUFDbEMsSUFBSSxDQUFDLEtBQUssR0FBRyxTQUFTLENBQUM7U0FDeEI7YUFBTSxJQUFJLElBQUksQ0FBQyxJQUFJLEtBQUssUUFBUSxFQUFFO1lBQ2pDLElBQUksQ0FBQyxLQUFLLEdBQUcsU0FBUyxDQUFDO1NBQ3hCO2FBQU0sSUFBSSxJQUFJLENBQUMsSUFBSSxLQUFLLFNBQVMsRUFBRTtZQUNsQyxJQUFJLENBQUMsS0FBSyxHQUFHLFNBQVMsQ0FBQztTQUN4QjthQUFNLElBQUksSUFBSSxDQUFDLElBQUksS0FBSyxNQUFNLEVBQUU7WUFDL0IsSUFBSSxDQUFDLEtBQUssR0FBRyxnQkFBZ0IsQ0FBQztTQUMvQjthQUFNO1lBQ0wsSUFBSSxDQUFDLEtBQUssR0FBRyxPQUFPLENBQUM7WUFDckIsSUFBSSxDQUFDLFNBQVMsR0FBRyxPQUFPLENBQUM7WUFDekIsSUFBSSxDQUFDLElBQUksR0FBRyxNQUFNLENBQUM7U0FDcEI7SUFDSCxDQUFDOzhHQTFCVSxrQkFBa0I7a0dBQWxCLGtCQUFrQixzS0NUL0IscWRBVUE7OzJGRERhLGtCQUFrQjtrQkFOOUIsU0FBUzsrQkFDSSxnQkFBZ0IsY0FHZCxJQUFJOzhCQUlULElBQUk7c0JBQVosS0FBSztnQkFDRyxLQUFLO3NCQUFiLEtBQUs7Z0JBQ0csSUFBSTtzQkFBWixLQUFLO2dCQUNHLElBQUk7c0JBQVosS0FBSztnQkFDRyxRQUFRO3NCQUFoQixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG50eXBlIG1vZGUgPSBcInByaW1hcnlcIiB8IFwic3VjY2Vzc1wiIHwgXCJkYW5nZXJcIiB8IFwiaW5mb1wiIHwgXCJ3YXJuaW5nXCI7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnbmd4LWp1c3QtYWxlcnQnLFxuICAgIHRlbXBsYXRlVXJsOiAnLi9qdXN0LWFsZXJ0LmNvbXBvbmVudC5odG1sJyxcbiAgICBzdHlsZVVybHM6IFsnLi9qdXN0LWFsZXJ0LmNvbXBvbmVudC5jc3MnXSxcbiAgICBzdGFuZGFsb25lOiB0cnVlLFxufSlcbmV4cG9ydCBjbGFzcyBKdXN0QWxlcnRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICB0ZXh0Q29sb3I6IHN0cmluZztcbiAgQElucHV0KCkgbW9kZTogbW9kZTtcbiAgQElucHV0KCkgY2xvc2U6IGFueTtcbiAgQElucHV0KCkgYm9sZDogYW55O1xuICBASW5wdXQoKSB0ZXh0OiBhbnk7XG4gIEBJbnB1dCgpIGRpc2FibGVkOiBhbnk7XG5cbiAgcHVibGljIGNvbG9yOiBzdHJpbmc7XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMubW9kZSA9PT0gJ3N1Y2Nlc3MnKSB7XG4gICAgICB0aGlzLmNvbG9yID0gJ2dyZWVuJztcbiAgICB9IGVsc2UgaWYgKHRoaXMubW9kZSA9PT0gJ3ByaW1hcnknKSB7XG4gICAgICB0aGlzLmNvbG9yID0gJyMwZDQ3YTEnO1xuICAgIH0gZWxzZSBpZiAodGhpcy5tb2RlID09PSAnZGFuZ2VyJykge1xuICAgICAgdGhpcy5jb2xvciA9ICdjcmltc29uJztcbiAgICB9IGVsc2UgaWYgKHRoaXMubW9kZSA9PT0gJ3dhcm5pbmcnKSB7XG4gICAgICB0aGlzLmNvbG9yID0gJyNmZjk4MDAnO1xuICAgIH0gZWxzZSBpZiAodGhpcy5tb2RlID09PSAnaW5mbycpIHtcbiAgICAgIHRoaXMuY29sb3IgPSAnY29ybmZsb3dlcmJsdWUnO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmNvbG9yID0gJ3doaXRlJztcbiAgICAgIHRoaXMudGV4dENvbG9yID0gJ2JsYWNrJztcbiAgICAgIHRoaXMuYm9sZCA9ICd0cnVlJztcbiAgICB9XG4gIH1cbn1cbiIsIjxkaXYgY2xhc3M9XCJqdXN0LWNvbnRhaW5lclwiIFtzdHlsZS5ib3JkZXJdPVwiJzFweCBzb2xpZCAnICsgbW9kZVwiIFtzdHlsZS5jb2xvcl09XCJtb2RlXCJcbiAgW3N0eWxlLmZvbnRXZWlnaHRdPVwiYm9sZCA9PT0gJ3RydWUnID8gJ2JvbGQnIDogJzEwMCdcIiBbc3R5bGUub3BhY2l0eV09XCJkaXNhYmxlZCA9PT0gJ3RydWUnID8gJzAuNScgOiAnMSdcIlxuICBbc3R5bGUuY3Vyc29yXT1cImRpc2FibGVkID09PSAndHJ1ZScgPyAnbm90LWFsbG93ZWQnIDogJ3BvaW50ZXInXCI+XG4gIDxkaXYgY2xhc3M9XCJqdXN0LWNvbnRlbnRcIj5cbiAgICB7eyB0ZXh0IH19XG4gIDwvZGl2PlxuICA8ZGl2IGNsYXNzPVwianVzdC1jbG9zZVwiIFtzdHlsZS5iYWNrZ3JvdW5kQ29sb3JdPVwibW9kZVwiIFtzdHlsZS5jb2xvcl09XCInd2hpdGUnXCI+XG4gICAgPHNwYW4+JiMyMTU7PC9zcGFuPlxuICA8L2Rpdj5cbjwvZGl2PlxuIl19