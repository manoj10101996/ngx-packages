import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
export class NgxCheckPermissionService {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWNoZWNrLXBlcm1pc3Npb24uc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1jaGVjay1wZXJtaXNzaW9uL3NyYy9saWIvbmd4LWNoZWNrLXBlcm1pc3Npb24uc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDOztBQUszQyxNQUFNLE9BQU8seUJBQXlCO0lBQ3BDO1FBQ1EscUJBQWdCLEdBQUc7WUFDekIsYUFBYTtZQUNiLGVBQWU7WUFDZixNQUFNO1lBQ04sTUFBTTtZQUNOLFFBQVE7WUFDUixZQUFZO1lBQ1osU0FBUztZQUNULGFBQWE7WUFDYixrQkFBa0I7WUFDbEIsaUJBQWlCO1lBQ2pCLFdBQVc7WUFDWCxvQkFBb0I7WUFDcEIsc0JBQXNCO1lBQ3RCLGVBQWU7WUFDZixXQUFXO1lBQ1gsY0FBYztZQUNkLFdBQVc7WUFDWCxpQkFBaUI7WUFDakIsS0FBSztTQUNOLENBQUM7SUFyQmMsQ0FBQztJQXVCVixLQUFLLENBQUMsaUJBQWlCO1FBQzVCLE1BQU0sY0FBYyxHQUFRLEVBQUUsQ0FBQztRQUMvQiwyRUFBMkU7UUFDM0UsTUFBTSxPQUFPLENBQUMsR0FBRyxDQUNmLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxHQUFHLENBQUMsS0FBSyxFQUFFLGNBQW1CLEVBQUUsRUFBRTtZQUN0RCxJQUFJO2dCQUNGLElBQUksVUFBVSxDQUFDO2dCQUNmLFFBQVEsY0FBYyxFQUFFO29CQUN0QixLQUFLLE1BQU07d0JBQ1QscUZBQXFGO3dCQUNyRixVQUFVLEdBQUcsTUFBTSxTQUFTLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQzs0QkFDN0MsSUFBSSxFQUFFLGNBQWM7eUJBQ3JCLENBQUMsQ0FBQzt3QkFDSCxNQUFNO29CQUNSO3dCQUNFLFVBQVUsR0FBRyxNQUFNLFNBQVMsQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDOzRCQUM3QyxJQUFJLEVBQUUsY0FBYzt5QkFDckIsQ0FBQyxDQUFDO2lCQUNOO2dCQUNELGNBQWMsQ0FBQyxJQUFJLENBQUMsRUFBRSxjQUFjLEVBQUUsS0FBSyxFQUFFLFVBQVUsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDO2FBQ2xFO1lBQUMsT0FBTyxDQUFNLEVBQUU7Z0JBQ2YsY0FBYyxDQUFDLElBQUksQ0FBQztvQkFDbEIsY0FBYztvQkFDZCxLQUFLLEVBQUUsT0FBTztvQkFDZCxZQUFZLEVBQUUsQ0FBQyxDQUFDLFFBQVEsRUFBRTtpQkFDM0IsQ0FBQyxDQUFDO2FBQ0o7UUFDSCxDQUFDLENBQUMsQ0FDSCxDQUFDO1FBQ0YsT0FBTyxjQUFjLENBQUM7SUFDeEIsQ0FBQzs4R0F0RFUseUJBQXlCO2tIQUF6Qix5QkFBeUIsY0FGeEIsTUFBTTs7MkZBRVAseUJBQXlCO2tCQUhyQyxVQUFVO21CQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIE5neENoZWNrUGVybWlzc2lvblNlcnZpY2Uge1xuICBjb25zdHJ1Y3RvcigpIHsgfVxuICBwcml2YXRlIHBlcm1pc3Npb25zTmFtZXMgPSBbXG4gICAgJ2dlb2xvY2F0aW9uJyxcbiAgICAnbm90aWZpY2F0aW9ucycsXG4gICAgJ3B1c2gnLFxuICAgICdtaWRpJyxcbiAgICAnY2FtZXJhJyxcbiAgICAnbWljcm9waG9uZScsXG4gICAgJ3NwZWFrZXInLFxuICAgICdkZXZpY2UtaW5mbycsXG4gICAgJ2JhY2tncm91bmQtZmV0Y2gnLFxuICAgICdiYWNrZ3JvdW5kLXN5bmMnLFxuICAgICdibHVldG9vdGgnLFxuICAgICdwZXJzaXN0ZW50LXN0b3JhZ2UnLFxuICAgICdhbWJpZW50LWxpZ2h0LXNlbnNvcicsXG4gICAgJ2FjY2VsZXJvbWV0ZXInLFxuICAgICdneXJvc2NvcGUnLFxuICAgICdtYWduZXRvbWV0ZXInLFxuICAgICdjbGlwYm9hcmQnLFxuICAgICdkaXNwbGF5LWNhcHR1cmUnLFxuICAgICduZmMnLFxuICBdO1xuXG4gIHB1YmxpYyBhc3luYyBnZXRBbGxQZXJtaXNzaW9ucygpIHtcbiAgICBjb25zdCBhbGxQZXJtaXNzaW9uczogYW55ID0gW107XG4gICAgLy8gV2UgdXNlIFByb21pc2UuYWxsIHRvIHdhaXQgdW50aWwgYWxsIHRoZSBwZXJtaXNzaW9uIHF1ZXJpZXMgYXJlIHJlc29sdmVkXG4gICAgYXdhaXQgUHJvbWlzZS5hbGwoXG4gICAgICB0aGlzLnBlcm1pc3Npb25zTmFtZXMubWFwKGFzeW5jIChwZXJtaXNzaW9uTmFtZTogYW55KSA9PiB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgbGV0IHBlcm1pc3Npb247XG4gICAgICAgICAgc3dpdGNoIChwZXJtaXNzaW9uTmFtZSkge1xuICAgICAgICAgICAgY2FzZSAncHVzaCc6XG4gICAgICAgICAgICAgIC8vIE5vdCBuZWNlc3NhcnkgYnV0IHJpZ2h0IG5vdyBDaHJvbWUgb25seSBzdXBwb3J0cyBwdXNoIG1lc3NhZ2VzIHdpdGggIG5vdGlmaWNhdGlvbnNcbiAgICAgICAgICAgICAgcGVybWlzc2lvbiA9IGF3YWl0IG5hdmlnYXRvci5wZXJtaXNzaW9ucy5xdWVyeSh7XG4gICAgICAgICAgICAgICAgbmFtZTogcGVybWlzc2lvbk5hbWUsXG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgIHBlcm1pc3Npb24gPSBhd2FpdCBuYXZpZ2F0b3IucGVybWlzc2lvbnMucXVlcnkoe1xuICAgICAgICAgICAgICAgIG5hbWU6IHBlcm1pc3Npb25OYW1lLFxuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgYWxsUGVybWlzc2lvbnMucHVzaCh7IHBlcm1pc3Npb25OYW1lLCBzdGF0ZTogcGVybWlzc2lvbi5zdGF0ZSB9KTtcbiAgICAgICAgfSBjYXRjaCAoZTogYW55KSB7XG4gICAgICAgICAgYWxsUGVybWlzc2lvbnMucHVzaCh7XG4gICAgICAgICAgICBwZXJtaXNzaW9uTmFtZSxcbiAgICAgICAgICAgIHN0YXRlOiAnZXJyb3InLFxuICAgICAgICAgICAgZXJyb3JNZXNzYWdlOiBlLnRvU3RyaW5nKCksXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgKTtcbiAgICByZXR1cm4gYWxsUGVybWlzc2lvbnM7XG4gIH1cbn1cbiJdfQ==