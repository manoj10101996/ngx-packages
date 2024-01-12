import * as i0 from "@angular/core";
export declare class NgxDeviceInfoService {
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
