import { NgModule, Optional, SkipSelf, } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ngxToastNotifyConfig } from './ngx-toast-notify.service';
import * as i0 from "@angular/core";
export class NgxToastNotifyModule {
    constructor(parentModule) {
        if (parentModule) {
            throw new Error('NgxToastNotifyModule is already loaded. Import it in the AppModule only');
        }
    }
    static forRoot(config) {
        return {
            ngModule: NgxToastNotifyModule,
            providers: [{ provide: ngxToastNotifyConfig, useValue: config }],
        };
    }
}
NgxToastNotifyModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: NgxToastNotifyModule, deps: [{ token: NgxToastNotifyModule, optional: true, skipSelf: true }], target: i0.ɵɵFactoryTarget.NgModule });
NgxToastNotifyModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "15.2.9", ngImport: i0, type: NgxToastNotifyModule, imports: [BrowserAnimationsModule] });
NgxToastNotifyModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: NgxToastNotifyModule, imports: [BrowserAnimationsModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: NgxToastNotifyModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [],
                    imports: [BrowserAnimationsModule],
                    exports: [],
                }]
        }], ctorParameters: function () { return [{ type: NgxToastNotifyModule, decorators: [{
                    type: Optional
                }, {
                    type: SkipSelf
                }] }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LXRvYXN0LW5vdGlmeS5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtdG9hc3Qtbm90aWZ5L3NyYy9saWIvbmd4LXRvYXN0LW5vdGlmeS5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUVMLFFBQVEsRUFDUixRQUFRLEVBQ1IsUUFBUSxHQUNULE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBQy9FLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDRCQUE0QixDQUFDOztBQU9sRSxNQUFNLE9BQU8sb0JBQW9CO0lBQy9CLFlBQW9DLFlBQW1DO1FBQ3JFLElBQUksWUFBWSxFQUFFO1lBQ2hCLE1BQU0sSUFBSSxLQUFLLENBQ2IseUVBQXlFLENBQzFFLENBQUM7U0FDSDtJQUNILENBQUM7SUFFRCxNQUFNLENBQUMsT0FBTyxDQUNaLE1BQTRCO1FBRTVCLE9BQU87WUFDTCxRQUFRLEVBQUUsb0JBQW9CO1lBQzlCLFNBQVMsRUFBRSxDQUFDLEVBQUUsT0FBTyxFQUFFLG9CQUFvQixFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsQ0FBQztTQUNqRSxDQUFDO0lBQ0osQ0FBQzs7aUhBaEJVLG9CQUFvQjtrSEFBcEIsb0JBQW9CLFlBSHJCLHVCQUF1QjtrSEFHdEIsb0JBQW9CLFlBSHJCLHVCQUF1QjsyRkFHdEIsb0JBQW9CO2tCQUxoQyxRQUFRO21CQUFDO29CQUNSLFlBQVksRUFBRSxFQUFFO29CQUNoQixPQUFPLEVBQUUsQ0FBQyx1QkFBdUIsQ0FBQztvQkFDbEMsT0FBTyxFQUFFLEVBQUU7aUJBQ1o7OzBCQUVjLFFBQVE7OzBCQUFJLFFBQVEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBNb2R1bGVXaXRoUHJvdmlkZXJzLFxuICBOZ01vZHVsZSxcbiAgT3B0aW9uYWwsXG4gIFNraXBTZWxmLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEJyb3dzZXJBbmltYXRpb25zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlci9hbmltYXRpb25zJztcbmltcG9ydCB7IG5neFRvYXN0Tm90aWZ5Q29uZmlnIH0gZnJvbSAnLi9uZ3gtdG9hc3Qtbm90aWZ5LnNlcnZpY2UnO1xuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtdLFxuICBpbXBvcnRzOiBbQnJvd3NlckFuaW1hdGlvbnNNb2R1bGVdLFxuICBleHBvcnRzOiBbXSxcbn0pXG5leHBvcnQgY2xhc3MgTmd4VG9hc3ROb3RpZnlNb2R1bGUge1xuICBjb25zdHJ1Y3RvcihAT3B0aW9uYWwoKSBAU2tpcFNlbGYoKSBwYXJlbnRNb2R1bGU/OiBOZ3hUb2FzdE5vdGlmeU1vZHVsZSkge1xuICAgIGlmIChwYXJlbnRNb2R1bGUpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgJ05neFRvYXN0Tm90aWZ5TW9kdWxlIGlzIGFscmVhZHkgbG9hZGVkLiBJbXBvcnQgaXQgaW4gdGhlIEFwcE1vZHVsZSBvbmx5J1xuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICBzdGF0aWMgZm9yUm9vdChcbiAgICBjb25maWc6IG5neFRvYXN0Tm90aWZ5Q29uZmlnXG4gICk6IE1vZHVsZVdpdGhQcm92aWRlcnM8Tmd4VG9hc3ROb3RpZnlNb2R1bGU+IHtcbiAgICByZXR1cm4ge1xuICAgICAgbmdNb2R1bGU6IE5neFRvYXN0Tm90aWZ5TW9kdWxlLFxuICAgICAgcHJvdmlkZXJzOiBbeyBwcm92aWRlOiBuZ3hUb2FzdE5vdGlmeUNvbmZpZywgdXNlVmFsdWU6IGNvbmZpZyB9XSxcbiAgICB9O1xuICB9XG59XG4iXX0=