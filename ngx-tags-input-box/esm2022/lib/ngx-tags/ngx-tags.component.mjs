import { Component, EventEmitter, Input } from '@angular/core';
import * as i0 from "@angular/core";
export class NgxTagsComponent {
    constructor() {
        this.limit = 25;
        this.rounded = false;
        this.disabled = false;
        this.tagsChange = new EventEmitter();
        this.tags = [];
    }
    ngOnInit() {
        this.limit = this.limit || 25;
        this.placeholder = this.placeholder + `( Maximum ${this.limit} )` || `Add tags ( Maximum ${this.limit} )`;
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
        else if (this.mode === 'light') {
            this.color = 'gray';
        }
        else {
            this.color = 'cornflowerblue';
        }
    }
    add(e) {
        if (this.tags.length < this.limit - 1) {
            this.tags.push(e.target.value);
        }
        else {
            this.tags[this.limit - 1] = e.target.value;
        }
        e.target.value = '';
        this.tagsChange.emit(this.tags);
    }
    remove(i) {
        this.tags.splice(i, 1);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.8", ngImport: i0, type: NgxTagsComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "17.0.8", type: NgxTagsComponent, isStandalone: true, selector: "ngx-tags-input", inputs: { limit: "limit", mode: "mode", placeholder: "placeholder", tags: "tags", rounded: "rounded", disabled: "disabled" }, ngImport: i0, template: "<div class=\"ngx-tag-container\">\n  <input type=\"text\" class=\"ngx-tags-input\" [disabled]=\"disabled\" [class.ngx-tags-input-rounded]=\"rounded\"\n    (change)=\"add($event)\" [style.borderColor]=\"color\" [placeholder]=\"placeholder\" />\n  <div class=\"ngx-tags-extra\">\n    <div>\n      @for (item of tags; track item; let i = $index) {\n        <span class=\"ngx-tags-label\" [class.ngx-tags-label-rounded]=\"rounded\" [style.backgroundColor]=\"color\"\n          >\n          {{ item }} <span (click)=\"remove(i)\" class=\"ngx-tag-remove\">&times;</span>\n        </span>\n      }\n    </div>\n  </div>\n</div>\n", styles: [".ngx-tags-label-header{font-size:12px;font-weight:700;margin-bottom:.5rem}.ngx-tags-input{padding:7.5px 10px;margin-bottom:5px;width:100%;border:1.5px solid lightslategray;outline:none;border-radius:2.5px;font-weight:700}.ngx-tags-input:focus{border:1px solid lightslategray!important}.ngx-tags-input::placeholder{font-size:14px;color:#789;text-transform:capitalize}.ngx-tags-label{padding:7.5px 10px;background-color:#6495ed;margin-right:5px;color:#fff;font-weight:700;font-size:12px;text-transform:lowercase;cursor:pointer;border-radius:5px;display:inline-flex;align-items:center;justify-content:space-between}.ngx-tags-input-rounded,.ngx-tags-label-rounded{border-radius:25px}input:focus{border:1px solid!important;outline:0;box-shadow:none}.ngx-tags-extra{display:flex;align-items:center;justify-content:space-between;margin-top:.5rem}.ngx-tag-remove{font-weight:700;padding-left:1rem;padding-right:.25rem}.ngx-tag-container{margin:1rem 0}\n"] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.8", ngImport: i0, type: NgxTagsComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ngx-tags-input', standalone: true, imports: [], template: "<div class=\"ngx-tag-container\">\n  <input type=\"text\" class=\"ngx-tags-input\" [disabled]=\"disabled\" [class.ngx-tags-input-rounded]=\"rounded\"\n    (change)=\"add($event)\" [style.borderColor]=\"color\" [placeholder]=\"placeholder\" />\n  <div class=\"ngx-tags-extra\">\n    <div>\n      @for (item of tags; track item; let i = $index) {\n        <span class=\"ngx-tags-label\" [class.ngx-tags-label-rounded]=\"rounded\" [style.backgroundColor]=\"color\"\n          >\n          {{ item }} <span (click)=\"remove(i)\" class=\"ngx-tag-remove\">&times;</span>\n        </span>\n      }\n    </div>\n  </div>\n</div>\n", styles: [".ngx-tags-label-header{font-size:12px;font-weight:700;margin-bottom:.5rem}.ngx-tags-input{padding:7.5px 10px;margin-bottom:5px;width:100%;border:1.5px solid lightslategray;outline:none;border-radius:2.5px;font-weight:700}.ngx-tags-input:focus{border:1px solid lightslategray!important}.ngx-tags-input::placeholder{font-size:14px;color:#789;text-transform:capitalize}.ngx-tags-label{padding:7.5px 10px;background-color:#6495ed;margin-right:5px;color:#fff;font-weight:700;font-size:12px;text-transform:lowercase;cursor:pointer;border-radius:5px;display:inline-flex;align-items:center;justify-content:space-between}.ngx-tags-input-rounded,.ngx-tags-label-rounded{border-radius:25px}input:focus{border:1px solid!important;outline:0;box-shadow:none}.ngx-tags-extra{display:flex;align-items:center;justify-content:space-between;margin-top:.5rem}.ngx-tag-remove{font-weight:700;padding-left:1rem;padding-right:.25rem}.ngx-tag-container{margin:1rem 0}\n"] }]
        }], ctorParameters: () => [], propDecorators: { limit: [{
                type: Input
            }], mode: [{
                type: Input
            }], placeholder: [{
                type: Input
            }], tags: [{
                type: Input
            }], rounded: [{
                type: Input
            }], disabled: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LXRhZ3MuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LXRhZ3MtaW5wdXQtYm94L3NyYy9saWIvbmd4LXRhZ3Mvbmd4LXRhZ3MuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LXRhZ3MtaW5wdXQtYm94L3NyYy9saWIvbmd4LXRhZ3Mvbmd4LXRhZ3MuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDOztBQVcvRCxNQUFNLE9BQU8sZ0JBQWdCO0lBVTNCO1FBUlMsVUFBSyxHQUFXLEVBQUUsQ0FBQztRQUluQixZQUFPLEdBQVksS0FBSyxDQUFDO1FBQ3pCLGFBQVEsR0FBWSxLQUFLLENBQUM7UUFJakMsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBQ3JDLElBQUksQ0FBQyxJQUFJLEdBQUcsRUFBRSxDQUFDO0lBQ2pCLENBQUM7SUFFRCxRQUFRO1FBQ04sSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxJQUFJLEVBQUUsQ0FBQztRQUM5QixJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxXQUFXLEdBQUcsYUFBYSxJQUFJLENBQUMsS0FBSyxJQUFJLElBQUksc0JBQXNCLElBQUksQ0FBQyxLQUFLLElBQUksQ0FBQztRQUMxRyxJQUFJLElBQUksQ0FBQyxJQUFJLEtBQUssU0FBUyxFQUFFO1lBQzNCLElBQUksQ0FBQyxLQUFLLEdBQUcsT0FBTyxDQUFDO1NBQ3RCO2FBQU0sSUFBSSxJQUFJLENBQUMsSUFBSSxLQUFLLFNBQVMsRUFBRTtZQUNsQyxJQUFJLENBQUMsS0FBSyxHQUFHLFNBQVMsQ0FBQztTQUN4QjthQUFNLElBQUksSUFBSSxDQUFDLElBQUksS0FBSyxRQUFRLEVBQUU7WUFDakMsSUFBSSxDQUFDLEtBQUssR0FBRyxTQUFTLENBQUM7U0FDeEI7YUFBTSxJQUFJLElBQUksQ0FBQyxJQUFJLEtBQUssU0FBUyxFQUFFO1lBQ2xDLElBQUksQ0FBQyxLQUFLLEdBQUcsU0FBUyxDQUFDO1NBQ3hCO2FBQU0sSUFBSSxJQUFJLENBQUMsSUFBSSxLQUFLLE1BQU0sRUFBRTtZQUMvQixJQUFJLENBQUMsS0FBSyxHQUFHLGdCQUFnQixDQUFDO1NBQy9CO2FBQU0sSUFBSSxJQUFJLENBQUMsSUFBSSxLQUFLLE9BQU8sRUFBRTtZQUNoQyxJQUFJLENBQUMsS0FBSyxHQUFHLE1BQU0sQ0FBQztTQUNyQjthQUFNO1lBQ0wsSUFBSSxDQUFDLEtBQUssR0FBRyxnQkFBZ0IsQ0FBQztTQUMvQjtJQUNILENBQUM7SUFFRCxHQUFHLENBQUMsQ0FBTTtRQUNSLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLEVBQUU7WUFDckMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUNoQzthQUNJO1lBQ0gsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDO1NBQzVDO1FBQ0QsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDO1FBQ3BCLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNsQyxDQUFDO0lBRUQsTUFBTSxDQUFDLENBQVM7UUFDZCxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDekIsQ0FBQzs4R0FoRFUsZ0JBQWdCO2tHQUFoQixnQkFBZ0Isd01DWDdCLGduQkFjQTs7MkZESGEsZ0JBQWdCO2tCQVA1QixTQUFTOytCQUNJLGdCQUFnQixjQUdkLElBQUksV0FDUCxFQUFFO3dEQUlKLEtBQUs7c0JBQWIsS0FBSztnQkFDRyxJQUFJO3NCQUFaLEtBQUs7Z0JBQ0csV0FBVztzQkFBbkIsS0FBSztnQkFDRyxJQUFJO3NCQUFaLEtBQUs7Z0JBQ0csT0FBTztzQkFBZixLQUFLO2dCQUNHLFFBQVE7c0JBQWhCLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxudHlwZSBtb2RlID0gXCJwcmltYXJ5XCIgfCBcInN1Y2Nlc3NcIiB8IFwiZGFuZ2VyXCIgfCBcImluZm9cIiB8IFwid2FybmluZ1wiIHwgXCJsaWdodFwiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ25neC10YWdzLWlucHV0JyxcbiAgICB0ZW1wbGF0ZVVybDogJy4vbmd4LXRhZ3MuY29tcG9uZW50Lmh0bWwnLFxuICAgIHN0eWxlVXJsczogWycuL25neC10YWdzLmNvbXBvbmVudC5jc3MnXSxcbiAgICBzdGFuZGFsb25lOiB0cnVlLFxuICAgIGltcG9ydHM6IFtdXG59KVxuZXhwb3J0IGNsYXNzIE5neFRhZ3NDb21wb25lbnQge1xuICB0YWdzQ2hhbmdlOiBFdmVudEVtaXR0ZXI8YW55PjtcbiAgQElucHV0KCkgbGltaXQ6IG51bWJlciA9IDI1O1xuICBASW5wdXQoKSBtb2RlOiBtb2RlO1xuICBASW5wdXQoKSBwbGFjZWhvbGRlcjogc3RyaW5nO1xuICBASW5wdXQoKSB0YWdzOiBhbnlbXTtcbiAgQElucHV0KCkgcm91bmRlZDogYm9vbGVhbiA9IGZhbHNlO1xuICBASW5wdXQoKSBkaXNhYmxlZDogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIHB1YmxpYyBjb2xvcjogc3RyaW5nO1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLnRhZ3NDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gICAgdGhpcy50YWdzID0gW107XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmxpbWl0ID0gdGhpcy5saW1pdCB8fCAyNTtcbiAgICB0aGlzLnBsYWNlaG9sZGVyID0gdGhpcy5wbGFjZWhvbGRlciArIGAoIE1heGltdW0gJHt0aGlzLmxpbWl0fSApYCB8fCBgQWRkIHRhZ3MgKCBNYXhpbXVtICR7dGhpcy5saW1pdH0gKWA7XG4gICAgaWYgKHRoaXMubW9kZSA9PT0gJ3N1Y2Nlc3MnKSB7XG4gICAgICB0aGlzLmNvbG9yID0gJ2dyZWVuJztcbiAgICB9IGVsc2UgaWYgKHRoaXMubW9kZSA9PT0gJ3ByaW1hcnknKSB7XG4gICAgICB0aGlzLmNvbG9yID0gJyMwZDQ3YTEnO1xuICAgIH0gZWxzZSBpZiAodGhpcy5tb2RlID09PSAnZGFuZ2VyJykge1xuICAgICAgdGhpcy5jb2xvciA9ICdjcmltc29uJztcbiAgICB9IGVsc2UgaWYgKHRoaXMubW9kZSA9PT0gJ3dhcm5pbmcnKSB7XG4gICAgICB0aGlzLmNvbG9yID0gJyNmZjk4MDAnO1xuICAgIH0gZWxzZSBpZiAodGhpcy5tb2RlID09PSAnaW5mbycpIHtcbiAgICAgIHRoaXMuY29sb3IgPSAnY29ybmZsb3dlcmJsdWUnO1xuICAgIH0gZWxzZSBpZiAodGhpcy5tb2RlID09PSAnbGlnaHQnKSB7XG4gICAgICB0aGlzLmNvbG9yID0gJ2dyYXknO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmNvbG9yID0gJ2Nvcm5mbG93ZXJibHVlJztcbiAgICB9XG4gIH1cblxuICBhZGQoZTogYW55KSB7XG4gICAgaWYgKHRoaXMudGFncy5sZW5ndGggPCB0aGlzLmxpbWl0IC0gMSkge1xuICAgICAgdGhpcy50YWdzLnB1c2goZS50YXJnZXQudmFsdWUpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMudGFnc1t0aGlzLmxpbWl0IC0gMV0gPSBlLnRhcmdldC52YWx1ZTtcbiAgICB9XG4gICAgZS50YXJnZXQudmFsdWUgPSAnJztcbiAgICB0aGlzLnRhZ3NDaGFuZ2UuZW1pdCh0aGlzLnRhZ3MpO1xuICB9XG5cbiAgcmVtb3ZlKGk6IG51bWJlcikge1xuICAgIHRoaXMudGFncy5zcGxpY2UoaSwgMSk7XG4gIH1cbn1cbiIsIjxkaXYgY2xhc3M9XCJuZ3gtdGFnLWNvbnRhaW5lclwiPlxuICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzcz1cIm5neC10YWdzLWlucHV0XCIgW2Rpc2FibGVkXT1cImRpc2FibGVkXCIgW2NsYXNzLm5neC10YWdzLWlucHV0LXJvdW5kZWRdPVwicm91bmRlZFwiXG4gICAgKGNoYW5nZSk9XCJhZGQoJGV2ZW50KVwiIFtzdHlsZS5ib3JkZXJDb2xvcl09XCJjb2xvclwiIFtwbGFjZWhvbGRlcl09XCJwbGFjZWhvbGRlclwiIC8+XG4gIDxkaXYgY2xhc3M9XCJuZ3gtdGFncy1leHRyYVwiPlxuICAgIDxkaXY+XG4gICAgICBAZm9yIChpdGVtIG9mIHRhZ3M7IHRyYWNrIGl0ZW07IGxldCBpID0gJGluZGV4KSB7XG4gICAgICAgIDxzcGFuIGNsYXNzPVwibmd4LXRhZ3MtbGFiZWxcIiBbY2xhc3Mubmd4LXRhZ3MtbGFiZWwtcm91bmRlZF09XCJyb3VuZGVkXCIgW3N0eWxlLmJhY2tncm91bmRDb2xvcl09XCJjb2xvclwiXG4gICAgICAgICAgPlxuICAgICAgICAgIHt7IGl0ZW0gfX0gPHNwYW4gKGNsaWNrKT1cInJlbW92ZShpKVwiIGNsYXNzPVwibmd4LXRhZy1yZW1vdmVcIj4mdGltZXM7PC9zcGFuPlxuICAgICAgICA8L3NwYW4+XG4gICAgICB9XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuPC9kaXY+XG4iXX0=