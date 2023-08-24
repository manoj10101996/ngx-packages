import { Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
export class AlertComponent {
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
AlertComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: AlertComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
AlertComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.9", type: AlertComponent, selector: "ngx-alert", inputs: { mode: "mode", close: "close", bold: "bold", text: "text", disabled: "disabled" }, ngImport: i0, template: "<div class=\"alert-bar-ngx\" [style.backgroundColor]=\"color\" [style.color]=\"textColor\"\r\n  [style.fontWeight]=\"bold === 'true' ? 'bold' : '100'\" [style.opacity]=\"disabled === 'true' ? '0.5' : '1'\"\r\n  [style.cursor]=\"disabled === 'true' ? 'not-allowed' : 'pointer'\">\r\n  <span class=\"closeIcon\" [hidden]=\"close === 'false'\">\r\n    &#215;\r\n  </span>\r\n  {{ text }}\r\n</div>\r\n", styles: [".alert-bar-ngx{margin:.625rem 0rem;padding:.6125rem .8125rem;color:#fff;box-shadow:0 0 5px 5px #f5f5f5}.closeIcon{float:right;cursor:pointer}.just-close{width:5%;font-weight:bolder;background-color:#dc143c;color:#fff;border-radius:0 5px 5px 0;padding:5px;display:flex;align-items:center;text-align:center}.just-content{width:95%;padding:5px}.just-container{display:flex;border-radius:1;border:1px solid crimson;border-radius:9px}\n"] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: AlertComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ngx-alert', template: "<div class=\"alert-bar-ngx\" [style.backgroundColor]=\"color\" [style.color]=\"textColor\"\r\n  [style.fontWeight]=\"bold === 'true' ? 'bold' : '100'\" [style.opacity]=\"disabled === 'true' ? '0.5' : '1'\"\r\n  [style.cursor]=\"disabled === 'true' ? 'not-allowed' : 'pointer'\">\r\n  <span class=\"closeIcon\" [hidden]=\"close === 'false'\">\r\n    &#215;\r\n  </span>\r\n  {{ text }}\r\n</div>\r\n", styles: [".alert-bar-ngx{margin:.625rem 0rem;padding:.6125rem .8125rem;color:#fff;box-shadow:0 0 5px 5px #f5f5f5}.closeIcon{float:right;cursor:pointer}.just-close{width:5%;font-weight:bolder;background-color:#dc143c;color:#fff;border-radius:0 5px 5px 0;padding:5px;display:flex;align-items:center;text-align:center}.just-content{width:95%;padding:5px}.just-container{display:flex;border-radius:1;border:1px solid crimson;border-radius:9px}\n"] }]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWxlcnQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LWFsZXJ0LW1lc3NhZ2Uvc3JjL2xpYi9hbGVydC9hbGVydC5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtYWxlcnQtbWVzc2FnZS9zcmMvbGliL2FsZXJ0L2FsZXJ0LmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDOztBQVN6RCxNQUFNLE9BQU8sY0FBYztJQVV6QixRQUFRO1FBQ04sSUFBSSxJQUFJLENBQUMsSUFBSSxLQUFLLFNBQVMsRUFBRTtZQUMzQixJQUFJLENBQUMsS0FBSyxHQUFHLE9BQU8sQ0FBQztTQUN0QjthQUFNLElBQUksSUFBSSxDQUFDLElBQUksS0FBSyxTQUFTLEVBQUU7WUFDbEMsSUFBSSxDQUFDLEtBQUssR0FBRyxTQUFTLENBQUM7U0FDeEI7YUFBTSxJQUFJLElBQUksQ0FBQyxJQUFJLEtBQUssUUFBUSxFQUFFO1lBQ2pDLElBQUksQ0FBQyxLQUFLLEdBQUcsU0FBUyxDQUFDO1NBQ3hCO2FBQU0sSUFBSSxJQUFJLENBQUMsSUFBSSxLQUFLLFNBQVMsRUFBRTtZQUNsQyxJQUFJLENBQUMsS0FBSyxHQUFHLFNBQVMsQ0FBQztTQUN4QjthQUFNLElBQUksSUFBSSxDQUFDLElBQUksS0FBSyxNQUFNLEVBQUU7WUFDL0IsSUFBSSxDQUFDLEtBQUssR0FBRyxnQkFBZ0IsQ0FBQztTQUMvQjthQUFNO1lBQ0wsSUFBSSxDQUFDLEtBQUssR0FBRyxPQUFPLENBQUM7WUFDckIsSUFBSSxDQUFDLFNBQVMsR0FBRyxPQUFPLENBQUM7WUFDekIsSUFBSSxDQUFDLElBQUksR0FBRyxNQUFNLENBQUM7U0FDcEI7SUFDSCxDQUFDOzsyR0ExQlUsY0FBYzsrRkFBZCxjQUFjLDZJQ1QzQixnWkFRQTsyRkRDYSxjQUFjO2tCQUwxQixTQUFTOytCQUNFLFdBQVc7OEJBTVosSUFBSTtzQkFBWixLQUFLO2dCQUNHLEtBQUs7c0JBQWIsS0FBSztnQkFDRyxJQUFJO3NCQUFaLEtBQUs7Z0JBQ0csSUFBSTtzQkFBWixLQUFLO2dCQUNHLFFBQVE7c0JBQWhCLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcblxyXG50eXBlIG1vZGUgPSBcInByaW1hcnlcIiB8IFwic3VjY2Vzc1wiIHwgXCJkYW5nZXJcIiB8IFwiaW5mb1wiIHwgXCJ3YXJuaW5nXCI7XHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbmd4LWFsZXJ0JyxcclxuICB0ZW1wbGF0ZVVybDogJy4vYWxlcnQuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL2FsZXJ0LmNvbXBvbmVudC5jc3MnXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIEFsZXJ0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICB0ZXh0Q29sb3I6IHN0cmluZztcclxuICBASW5wdXQoKSBtb2RlOiBtb2RlO1xyXG4gIEBJbnB1dCgpIGNsb3NlOiBhbnk7XHJcbiAgQElucHV0KCkgYm9sZDogYW55O1xyXG4gIEBJbnB1dCgpIHRleHQ6IGFueTtcclxuICBASW5wdXQoKSBkaXNhYmxlZDogYW55O1xyXG5cclxuICBwdWJsaWMgY29sb3I6IHN0cmluZztcclxuXHJcbiAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5tb2RlID09PSAnc3VjY2VzcycpIHtcclxuICAgICAgdGhpcy5jb2xvciA9ICdncmVlbic7XHJcbiAgICB9IGVsc2UgaWYgKHRoaXMubW9kZSA9PT0gJ3ByaW1hcnknKSB7XHJcbiAgICAgIHRoaXMuY29sb3IgPSAnIzBkNDdhMSc7XHJcbiAgICB9IGVsc2UgaWYgKHRoaXMubW9kZSA9PT0gJ2RhbmdlcicpIHtcclxuICAgICAgdGhpcy5jb2xvciA9ICdjcmltc29uJztcclxuICAgIH0gZWxzZSBpZiAodGhpcy5tb2RlID09PSAnd2FybmluZycpIHtcclxuICAgICAgdGhpcy5jb2xvciA9ICcjZmY5ODAwJztcclxuICAgIH0gZWxzZSBpZiAodGhpcy5tb2RlID09PSAnaW5mbycpIHtcclxuICAgICAgdGhpcy5jb2xvciA9ICdjb3JuZmxvd2VyYmx1ZSc7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLmNvbG9yID0gJ3doaXRlJztcclxuICAgICAgdGhpcy50ZXh0Q29sb3IgPSAnYmxhY2snO1xyXG4gICAgICB0aGlzLmJvbGQgPSAndHJ1ZSc7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsIjxkaXYgY2xhc3M9XCJhbGVydC1iYXItbmd4XCIgW3N0eWxlLmJhY2tncm91bmRDb2xvcl09XCJjb2xvclwiIFtzdHlsZS5jb2xvcl09XCJ0ZXh0Q29sb3JcIlxyXG4gIFtzdHlsZS5mb250V2VpZ2h0XT1cImJvbGQgPT09ICd0cnVlJyA/ICdib2xkJyA6ICcxMDAnXCIgW3N0eWxlLm9wYWNpdHldPVwiZGlzYWJsZWQgPT09ICd0cnVlJyA/ICcwLjUnIDogJzEnXCJcclxuICBbc3R5bGUuY3Vyc29yXT1cImRpc2FibGVkID09PSAndHJ1ZScgPyAnbm90LWFsbG93ZWQnIDogJ3BvaW50ZXInXCI+XHJcbiAgPHNwYW4gY2xhc3M9XCJjbG9zZUljb25cIiBbaGlkZGVuXT1cImNsb3NlID09PSAnZmFsc2UnXCI+XHJcbiAgICAmIzIxNTtcclxuICA8L3NwYW4+XHJcbiAge3sgdGV4dCB9fVxyXG48L2Rpdj5cclxuIl19