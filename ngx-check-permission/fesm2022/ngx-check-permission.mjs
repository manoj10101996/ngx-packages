import * as i0 from '@angular/core';
import { Injectable, Component } from '@angular/core';

class NgxCheckPermissionService {
    constructor() {
        this.permissionsNames = [
            'geolocation',
            'notifications',
            'push',
            'midi',
            'camera',
            'microphone',
            'speaker',
            'device-info',
            'background-fetch',
            'background-sync',
            'bluetooth',
            'persistent-storage',
            'ambient-light-sensor',
            'accelerometer',
            'gyroscope',
            'magnetometer',
            'clipboard',
            'display-capture',
            'nfc',
        ];
    }
    async getAllPermissions() {
        const allPermissions = [];
        // We use Promise.all to wait until all the permission queries are resolved
        await Promise.all(this.permissionsNames.map(async (permissionName) => {
            try {
                let permission;
                switch (permissionName) {
                    case 'push':
                        // Not necessary but right now Chrome only supports push messages with  notifications
                        permission = await navigator.permissions.query({
                            name: permissionName,
                        });
                        break;
                    default:
                        permission = await navigator.permissions.query({
                            name: permissionName,
                        });
                }
                allPermissions.push({ permissionName, state: permission.state });
            }
            catch (e) {
                allPermissions.push({
                    permissionName,
                    state: 'error',
                    errorMessage: e.toString(),
                });
            }
        }));
        return allPermissions;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.5", ngImport: i0, type: NgxCheckPermissionService, deps: [], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "17.3.5", ngImport: i0, type: NgxCheckPermissionService, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.5", ngImport: i0, type: NgxCheckPermissionService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }], ctorParameters: () => [] });

class NgxCheckPermissionComponent {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.5", ngImport: i0, type: NgxCheckPermissionComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.3.5", type: NgxCheckPermissionComponent, isStandalone: true, selector: "lib-ngx-check-permission", ngImport: i0, template: `
    <p>
      ngx-check-permission works!
    </p>
  `, isInline: true }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.5", ngImport: i0, type: NgxCheckPermissionComponent, decorators: [{
            type: Component,
            args: [{ selector: 'lib-ngx-check-permission', template: `
    <p>
      ngx-check-permission works!
    </p>
  `, standalone: true }]
        }] });

/*
 * Public API Surface of ngx-check-permission
 */

/**
 * Generated bundle index. Do not edit.
 */

export { NgxCheckPermissionComponent, NgxCheckPermissionService };
//# sourceMappingURL=ngx-check-permission.mjs.map
