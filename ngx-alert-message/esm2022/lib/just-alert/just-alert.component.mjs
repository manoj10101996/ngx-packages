import { Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
export class JustAlertComponent {
    constructor() {
        this.mode = "success";
        this.close = true;
        this.bold = false;
        this.text = "ngx-just-alert-message";
        this.disabled = false;
    }
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
            this.bold = true;
        }
        console.log(this.mode, this.color);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.5", ngImport: i0, type: JustAlertComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.3.5", type: JustAlertComponent, isStandalone: true, selector: "ngx-just-alert", inputs: { mode: "mode", close: "close", bold: "bold", text: "text", disabled: "disabled" }, ngImport: i0, template: "<div class=\"ngx-alert-container\" [style.border]=\"'1px solid ' + color\" [style.color]=\"color\"\n  [style.fontWeight]=\"bold  ? 'bold' : '100'\" [style.opacity]=\"disabled  ? '0.75' : '1'\"\n  [style.cursor]=\"disabled  ? 'not-allowed' : 'pointer'\">\n  <div class=\"ngx-alert-text\">\n    {{ text }}\n  </div>\n  <div class=\"ngx-alert-close\" [style.background-color]=\"color\" [style.color]=\"'white'\">\n    <span class=\"closeIcon\" [hidden]=\"!close\">\n      <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"20\" height=\"20\" viewBox=\"0 0 384 512\">\n        <path fill=\"white\"\n          d=\"M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z\" />\n      </svg>\n    </span>\n  </div>\n</div>\n", styles: [".ngx-alert-container{display:grid;align-items:center;grid-template-columns:auto 56px;margin-bottom:.5rem}.ngx-alert-container .ngx-alert-text{font-weight:500;font-size:1rem;padding:1rem 1.25rem}.ngx-alert-container .ngx-alert-close{width:56px;height:100%;display:flex;align-items:center;justify-content:center}.ngx-alert-container-extended .ngx-alert-text{color:#fff}\n"] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.5", ngImport: i0, type: JustAlertComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ngx-just-alert', standalone: true, template: "<div class=\"ngx-alert-container\" [style.border]=\"'1px solid ' + color\" [style.color]=\"color\"\n  [style.fontWeight]=\"bold  ? 'bold' : '100'\" [style.opacity]=\"disabled  ? '0.75' : '1'\"\n  [style.cursor]=\"disabled  ? 'not-allowed' : 'pointer'\">\n  <div class=\"ngx-alert-text\">\n    {{ text }}\n  </div>\n  <div class=\"ngx-alert-close\" [style.background-color]=\"color\" [style.color]=\"'white'\">\n    <span class=\"closeIcon\" [hidden]=\"!close\">\n      <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"20\" height=\"20\" viewBox=\"0 0 384 512\">\n        <path fill=\"white\"\n          d=\"M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z\" />\n      </svg>\n    </span>\n  </div>\n</div>\n", styles: [".ngx-alert-container{display:grid;align-items:center;grid-template-columns:auto 56px;margin-bottom:.5rem}.ngx-alert-container .ngx-alert-text{font-weight:500;font-size:1rem;padding:1rem 1.25rem}.ngx-alert-container .ngx-alert-close{width:56px;height:100%;display:flex;align-items:center;justify-content:center}.ngx-alert-container-extended .ngx-alert-text{color:#fff}\n"] }]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianVzdC1hbGVydC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtYWxlcnQtbWVzc2FnZS9zcmMvbGliL2p1c3QtYWxlcnQvanVzdC1hbGVydC5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtYWxlcnQtbWVzc2FnZS9zcmMvbGliL2p1c3QtYWxlcnQvanVzdC1hbGVydC5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQzs7QUFTekQsTUFBTSxPQUFPLGtCQUFrQjtJQU4vQjtRQVNXLFNBQUksR0FBUyxTQUFTLENBQUM7UUFDdkIsVUFBSyxHQUFZLElBQUksQ0FBQztRQUN0QixTQUFJLEdBQVksS0FBSyxDQUFDO1FBQ3RCLFNBQUksR0FBUSx3QkFBd0IsQ0FBQztRQUNyQyxhQUFRLEdBQVksS0FBSyxDQUFDO0tBd0JwQztJQXBCQyxRQUFRO1FBQ04sSUFBSSxJQUFJLENBQUMsSUFBSSxLQUFLLFNBQVMsRUFBRTtZQUMzQixJQUFJLENBQUMsS0FBSyxHQUFHLE9BQU8sQ0FBQztTQUN0QjthQUFNLElBQUksSUFBSSxDQUFDLElBQUksS0FBSyxTQUFTLEVBQUU7WUFDbEMsSUFBSSxDQUFDLEtBQUssR0FBRyxTQUFTLENBQUM7U0FDeEI7YUFBTSxJQUFJLElBQUksQ0FBQyxJQUFJLEtBQUssUUFBUSxFQUFFO1lBQ2pDLElBQUksQ0FBQyxLQUFLLEdBQUcsU0FBUyxDQUFDO1NBQ3hCO2FBQU0sSUFBSSxJQUFJLENBQUMsSUFBSSxLQUFLLFNBQVMsRUFBRTtZQUNsQyxJQUFJLENBQUMsS0FBSyxHQUFHLFNBQVMsQ0FBQztTQUN4QjthQUFNLElBQUksSUFBSSxDQUFDLElBQUksS0FBSyxNQUFNLEVBQUU7WUFDL0IsSUFBSSxDQUFDLEtBQUssR0FBRyxnQkFBZ0IsQ0FBQztTQUMvQjthQUFNO1lBQ0wsSUFBSSxDQUFDLEtBQUssR0FBRyxPQUFPLENBQUM7WUFDckIsSUFBSSxDQUFDLFNBQVMsR0FBRyxPQUFPLENBQUM7WUFDekIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7U0FDbEI7UUFFRCxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBRXJDLENBQUM7OEdBOUJVLGtCQUFrQjtrR0FBbEIsa0JBQWtCLHNLQ1QvQiw2NkJBZUE7OzJGRE5hLGtCQUFrQjtrQkFOOUIsU0FBUzsrQkFDRSxnQkFBZ0IsY0FHZCxJQUFJOzhCQUtQLElBQUk7c0JBQVosS0FBSztnQkFDRyxLQUFLO3NCQUFiLEtBQUs7Z0JBQ0csSUFBSTtzQkFBWixLQUFLO2dCQUNHLElBQUk7c0JBQVosS0FBSztnQkFDRyxRQUFRO3NCQUFoQixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG50eXBlIG1vZGUgPSBcInByaW1hcnlcIiB8IFwic3VjY2Vzc1wiIHwgXCJkYW5nZXJcIiB8IFwiaW5mb1wiIHwgXCJ3YXJuaW5nXCI7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25neC1qdXN0LWFsZXJ0JyxcbiAgdGVtcGxhdGVVcmw6ICcuL2p1c3QtYWxlcnQuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi4vYWxlcnQuc2NzcyddLFxuICBzdGFuZGFsb25lOiB0cnVlLFxufSlcbmV4cG9ydCBjbGFzcyBKdXN0QWxlcnRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICB0ZXh0Q29sb3I6IHN0cmluZztcblxuICBASW5wdXQoKSBtb2RlOiBtb2RlID0gXCJzdWNjZXNzXCI7XG4gIEBJbnB1dCgpIGNsb3NlOiBib29sZWFuID0gdHJ1ZTtcbiAgQElucHV0KCkgYm9sZDogYm9vbGVhbiA9IGZhbHNlO1xuICBASW5wdXQoKSB0ZXh0OiBhbnkgPSBcIm5neC1qdXN0LWFsZXJ0LW1lc3NhZ2VcIjtcbiAgQElucHV0KCkgZGlzYWJsZWQ6IGJvb2xlYW4gPSBmYWxzZTtcblxuICBwdWJsaWMgY29sb3I6IHN0cmluZztcblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5tb2RlID09PSAnc3VjY2VzcycpIHtcbiAgICAgIHRoaXMuY29sb3IgPSAnZ3JlZW4nO1xuICAgIH0gZWxzZSBpZiAodGhpcy5tb2RlID09PSAncHJpbWFyeScpIHtcbiAgICAgIHRoaXMuY29sb3IgPSAnIzBkNDdhMSc7XG4gICAgfSBlbHNlIGlmICh0aGlzLm1vZGUgPT09ICdkYW5nZXInKSB7XG4gICAgICB0aGlzLmNvbG9yID0gJ2NyaW1zb24nO1xuICAgIH0gZWxzZSBpZiAodGhpcy5tb2RlID09PSAnd2FybmluZycpIHtcbiAgICAgIHRoaXMuY29sb3IgPSAnI2ZmOTgwMCc7XG4gICAgfSBlbHNlIGlmICh0aGlzLm1vZGUgPT09ICdpbmZvJykge1xuICAgICAgdGhpcy5jb2xvciA9ICdjb3JuZmxvd2VyYmx1ZSc7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuY29sb3IgPSAnd2hpdGUnO1xuICAgICAgdGhpcy50ZXh0Q29sb3IgPSAnYmxhY2snO1xuICAgICAgdGhpcy5ib2xkID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBjb25zb2xlLmxvZyh0aGlzLm1vZGUsIHRoaXMuY29sb3IpO1xuXG4gIH1cbn1cbiIsIjxkaXYgY2xhc3M9XCJuZ3gtYWxlcnQtY29udGFpbmVyXCIgW3N0eWxlLmJvcmRlcl09XCInMXB4IHNvbGlkICcgKyBjb2xvclwiIFtzdHlsZS5jb2xvcl09XCJjb2xvclwiXG4gIFtzdHlsZS5mb250V2VpZ2h0XT1cImJvbGQgID8gJ2JvbGQnIDogJzEwMCdcIiBbc3R5bGUub3BhY2l0eV09XCJkaXNhYmxlZCAgPyAnMC43NScgOiAnMSdcIlxuICBbc3R5bGUuY3Vyc29yXT1cImRpc2FibGVkICA/ICdub3QtYWxsb3dlZCcgOiAncG9pbnRlcidcIj5cbiAgPGRpdiBjbGFzcz1cIm5neC1hbGVydC10ZXh0XCI+XG4gICAge3sgdGV4dCB9fVxuICA8L2Rpdj5cbiAgPGRpdiBjbGFzcz1cIm5neC1hbGVydC1jbG9zZVwiIFtzdHlsZS5iYWNrZ3JvdW5kLWNvbG9yXT1cImNvbG9yXCIgW3N0eWxlLmNvbG9yXT1cIid3aGl0ZSdcIj5cbiAgICA8c3BhbiBjbGFzcz1cImNsb3NlSWNvblwiIFtoaWRkZW5dPVwiIWNsb3NlXCI+XG4gICAgICA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB3aWR0aD1cIjIwXCIgaGVpZ2h0PVwiMjBcIiB2aWV3Qm94PVwiMCAwIDM4NCA1MTJcIj5cbiAgICAgICAgPHBhdGggZmlsbD1cIndoaXRlXCJcbiAgICAgICAgICBkPVwiTTM0Mi42IDE1MC42YzEyLjUtMTIuNSAxMi41LTMyLjggMC00NS4zcy0zMi44LTEyLjUtNDUuMyAwTDE5MiAyMTAuNyA4Ni42IDEwNS40Yy0xMi41LTEyLjUtMzIuOC0xMi41LTQ1LjMgMHMtMTIuNSAzMi44IDAgNDUuM0wxNDYuNyAyNTYgNDEuNCAzNjEuNGMtMTIuNSAxMi41LTEyLjUgMzIuOCAwIDQ1LjNzMzIuOCAxMi41IDQ1LjMgMEwxOTIgMzAxLjMgMjk3LjQgNDA2LjZjMTIuNSAxMi41IDMyLjggMTIuNSA0NS4zIDBzMTIuNS0zMi44IDAtNDUuM0wyMzcuMyAyNTYgMzQyLjYgMTUwLjZ6XCIgLz5cbiAgICAgIDwvc3ZnPlxuICAgIDwvc3Bhbj5cbiAgPC9kaXY+XG48L2Rpdj5cbiJdfQ==