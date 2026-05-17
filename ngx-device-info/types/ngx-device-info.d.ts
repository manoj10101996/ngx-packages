import * as i0 from '@angular/core';

declare class NgxDeviceInfoService {
    private permissionsNames;
    constructor();
    getDeviceInfo(): Promise<any>;
    getDeviceName(): string;
    getDeviceType(): "tablet" | "mobile" | "desktop";
    isMobile(): boolean;
    isTablet(): boolean;
    isDesktop(): boolean;
    getOrientation(): "" | "portrait" | "landscape";
    getAllPermissions: () => Promise<any>;
    static ɵfac: i0.ɵɵFactoryDeclaration<NgxDeviceInfoService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<NgxDeviceInfoService>;
}

declare class NgxDeviceInfoComponent {
    static ɵfac: i0.ɵɵFactoryDeclaration<NgxDeviceInfoComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<NgxDeviceInfoComponent, "lib-ngx-device-info", never, {}, {}, never, never, true, never>;
}

export { NgxDeviceInfoComponent, NgxDeviceInfoService };
