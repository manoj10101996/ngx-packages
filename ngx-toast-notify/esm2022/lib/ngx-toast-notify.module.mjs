import { NgModule, Optional, SkipSelf, } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import * as i0 from "@angular/core";
export class NgxToastNotifyModule {
    constructor(parentModule) {
        if (parentModule) {
            throw new Error('NgxToastNotifyModule is already loaded. Import it in the AppModule only');
        }
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.5", ngImport: i0, type: NgxToastNotifyModule, deps: [{ token: NgxToastNotifyModule, optional: true, skipSelf: true }], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "17.3.5", ngImport: i0, type: NgxToastNotifyModule, imports: [BrowserAnimationsModule] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "17.3.5", ngImport: i0, type: NgxToastNotifyModule, imports: [BrowserAnimationsModule] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.5", ngImport: i0, type: NgxToastNotifyModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [],
                    imports: [BrowserAnimationsModule],
                    exports: [],
                }]
        }], ctorParameters: () => [{ type: NgxToastNotifyModule, decorators: [{
                    type: Optional
                }, {
                    type: SkipSelf
                }] }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LXRvYXN0LW5vdGlmeS5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtdG9hc3Qtbm90aWZ5L3NyYy9saWIvbmd4LXRvYXN0LW5vdGlmeS5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUVMLFFBQVEsRUFDUixRQUFRLEVBQ1IsUUFBUSxHQUNULE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLHNDQUFzQyxDQUFDOztBQU8vRSxNQUFNLE9BQU8sb0JBQW9CO0lBQy9CLFlBQW9DLFlBQW1DO1FBQ3JFLElBQUksWUFBWSxFQUFFO1lBQ2hCLE1BQU0sSUFBSSxLQUFLLENBQ2IseUVBQXlFLENBQzFFLENBQUM7U0FDSDtJQUNILENBQUM7OEdBUFUsb0JBQW9COytHQUFwQixvQkFBb0IsWUFIckIsdUJBQXVCOytHQUd0QixvQkFBb0IsWUFIckIsdUJBQXVCOzsyRkFHdEIsb0JBQW9CO2tCQUxoQyxRQUFRO21CQUFDO29CQUNSLFlBQVksRUFBRSxFQUFFO29CQUNoQixPQUFPLEVBQUUsQ0FBQyx1QkFBdUIsQ0FBQztvQkFDbEMsT0FBTyxFQUFFLEVBQUU7aUJBQ1o7OzBCQUVjLFFBQVE7OzBCQUFJLFFBQVEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBNb2R1bGVXaXRoUHJvdmlkZXJzLFxuICBOZ01vZHVsZSxcbiAgT3B0aW9uYWwsXG4gIFNraXBTZWxmLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEJyb3dzZXJBbmltYXRpb25zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlci9hbmltYXRpb25zJztcblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbXSxcbiAgaW1wb3J0czogW0Jyb3dzZXJBbmltYXRpb25zTW9kdWxlXSxcbiAgZXhwb3J0czogW10sXG59KVxuZXhwb3J0IGNsYXNzIE5neFRvYXN0Tm90aWZ5TW9kdWxlIHtcbiAgY29uc3RydWN0b3IoQE9wdGlvbmFsKCkgQFNraXBTZWxmKCkgcGFyZW50TW9kdWxlPzogTmd4VG9hc3ROb3RpZnlNb2R1bGUpIHtcbiAgICBpZiAocGFyZW50TW9kdWxlKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICdOZ3hUb2FzdE5vdGlmeU1vZHVsZSBpcyBhbHJlYWR5IGxvYWRlZC4gSW1wb3J0IGl0IGluIHRoZSBBcHBNb2R1bGUgb25seSdcbiAgICAgICk7XG4gICAgfVxuICB9XG59XG4iXX0=