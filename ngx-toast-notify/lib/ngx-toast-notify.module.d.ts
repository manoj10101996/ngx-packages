import { ModuleWithProviders } from '@angular/core';
import { ngxToastNotifyConfig } from './ngx-toast-notify.service';
import * as i0 from "@angular/core";
import * as i1 from "@angular/platform-browser/animations";
export declare class NgxToastNotifyModule {
    constructor(parentModule?: NgxToastNotifyModule);
    static forRoot(config: ngxToastNotifyConfig): ModuleWithProviders<NgxToastNotifyModule>;
    static ɵfac: i0.ɵɵFactoryDeclaration<NgxToastNotifyModule, [{ optional: true; skipSelf: true; }]>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<NgxToastNotifyModule, never, [typeof i1.BrowserAnimationsModule], never>;
    static ɵinj: i0.ɵɵInjectorDeclaration<NgxToastNotifyModule>;
}
