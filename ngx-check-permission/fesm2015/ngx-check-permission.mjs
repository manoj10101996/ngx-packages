import { __awaiter } from 'tslib';
import * as i0 from '@angular/core';
import { Injectable, Component, NgModule } from '@angular/core';

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
    getAllPermissions() {
        return __awaiter(this, void 0, void 0, function* () {
            const allPermissions = [];
            // We use Promise.all to wait until all the permission queries are resolved
            yield Promise.all(this.permissionsNames.map((permissionName) => __awaiter(this, void 0, void 0, function* () {
                try {
                    let permission;
                    switch (permissionName) {
                        case 'push':
                            // Not necessary but right now Chrome only supports push messages with  notifications
                            permission = yield navigator.permissions.query({
                                name: permissionName,
                            });
                            break;
                        default:
                            permission = yield navigator.permissions.query({
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
            })));
            return allPermissions;
        });
    }
}
NgxCheckPermissionService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: NgxCheckPermissionService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
NgxCheckPermissionService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: NgxCheckPermissionService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: NgxCheckPermissionService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }], ctorParameters: function () { return []; } });

class NgxCheckPermissionComponent {
}
NgxCheckPermissionComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: NgxCheckPermissionComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
NgxCheckPermissionComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.9", type: NgxCheckPermissionComponent, selector: "lib-ngx-check-permission", ngImport: i0, template: `
    <p>
      ngx-check-permission works!
    </p>
  `, isInline: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: NgxCheckPermissionComponent, decorators: [{
            type: Component,
            args: [{ selector: 'lib-ngx-check-permission', template: `
    <p>
      ngx-check-permission works!
    </p>
  ` }]
        }] });

class NgxCheckPermissionModule {
}
NgxCheckPermissionModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: NgxCheckPermissionModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
NgxCheckPermissionModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "15.2.9", ngImport: i0, type: NgxCheckPermissionModule, declarations: [NgxCheckPermissionComponent], exports: [NgxCheckPermissionComponent] });
NgxCheckPermissionModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: NgxCheckPermissionModule });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: NgxCheckPermissionModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        NgxCheckPermissionComponent
                    ],
                    imports: [],
                    exports: [
                        NgxCheckPermissionComponent
                    ]
                }]
        }] });

/*
 * Public API Surface of ngx-check-permission
 */

/**
 * Generated bundle index. Do not edit.
 */

export { NgxCheckPermissionComponent, NgxCheckPermissionModule, NgxCheckPermissionService };
//# sourceMappingURL=ngx-check-permission.mjs.map
