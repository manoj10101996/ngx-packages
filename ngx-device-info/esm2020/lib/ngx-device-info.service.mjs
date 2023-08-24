import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
export class NgxDeviceInfoService {
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
        this.getAllPermissions = async () => {
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
        };
    }
    async getDeviceInfo() {
        let deviceName = '';
        var isMobile = {
            Android: function () {
                return navigator.userAgent.match(/Android/i);
            },
            Datalogic: function () {
                return navigator.userAgent.match(/DL-AXIS/i);
            },
            Bluebird: function () {
                return navigator.userAgent.match(/EF500/i);
            },
            Honeywell: function () {
                return navigator.userAgent.match(/CT50/i);
            },
            Zebra: function () {
                return navigator.userAgent.match(/TC70|TC55/i);
            },
            BlackBerry: function () {
                return navigator.userAgent.match(/BlackBerry/i);
            },
            iOS: function () {
                return navigator.userAgent.match(/iPhone|iPad|iPod/i);
            },
            Windows: function () {
                return navigator.userAgent.match(/IEMobile/i);
            },
            any: function () {
                return (isMobile.Datalogic() ||
                    isMobile.Bluebird() ||
                    isMobile.Honeywell() ||
                    isMobile.Zebra() ||
                    isMobile.BlackBerry() ||
                    isMobile.Android() ||
                    isMobile.iOS() ||
                    isMobile.Windows());
            },
        };
        if (isMobile.Datalogic())
            deviceName = 'Datalogic';
        else if (isMobile.Bluebird())
            deviceName = 'Bluebird';
        else if (isMobile.Honeywell())
            deviceName = 'Honeywell';
        else if (isMobile.Zebra())
            deviceName = 'Zebra';
        else if (isMobile.BlackBerry())
            deviceName = 'BlackBerry';
        else if (isMobile.iOS())
            deviceName = 'iOS';
        else if (deviceName == '' && isMobile.Android())
            deviceName = 'Android';
        else if (deviceName == '' && isMobile.Windows())
            deviceName = 'Windows';
        // if (deviceName) {
        //   console.log('Devices information deviceName = ' + deviceName);
        //   console.log('Devices information any = ' + isMobile.any());
        //   console.log('navigator.userAgent = ' + navigator.userAgent);
        // }
        let deviceData = {
            deviceName: deviceName,
            orientation: this.getOrientation(),
            deviceType: this.getDeviceType(),
            userAgent: navigator.userAgent,
            isMobile: this.isMobile(),
            isDesktop: this.isDesktop(),
            isTablet: this.isTablet(),
            language: window.navigator.language,
            isOnline: window.navigator.onLine,
            cookieEnabled: window.navigator.cookieEnabled,
            vendor: window.navigator.vendor,
            clientHeight: document.body.clientHeight,
            clientWidth: document.body.clientWidth,
            height: screen.height,
            width: screen.width,
            availHeight: screen.availHeight,
            availWidth: screen.availWidth,
            innerHeight: window.innerHeight,
            innerWidth: window.innerWidth,
            outerHeight: window.outerHeight,
            outerWidth: window.outerWidth,
            href: window.location.href,
            protocal: window.location.protocol,
            host: window.location.host,
            hostname: window.location.hostname,
            port: window.location.port,
            pathname: window.location.pathname,
            search: window.location.search,
            hash: window.location.hash,
            origin: window.location.origin,
            timeZoneOffSet: new Date().getTimezoneOffset(),
            utcString: new Date().toUTCString(),
            time: new Date().getTime(),
            date: new Date().getDate(),
            day: new Date().getDay(),
            month: new Date().getMonth(),
            hour: new Date().getHours(),
            year: new Date().getFullYear(),
            seconds: new Date().getSeconds,
            milliseconds: new Date().getMilliseconds(),
            utcdate: new Date().getUTCDate(),
            utcday: new Date().getUTCDay(),
            utcmonth: new Date().getUTCMonth(),
            utcyear: new Date().getUTCFullYear(),
        };
        await this.getAllPermissions().then((data) => {
            data.forEach((element) => {
                deviceData[element['permissionName']] = element['state'];
            });
        });
        return deviceData;
    }
    getDeviceName() {
        var sBrowser, sUsrAg = navigator.userAgent;
        // The order matters here, and this may report false positives for unlisted browsers.
        if (sUsrAg.indexOf('Firefox') > -1) {
            sBrowser = 'Mozilla Firefox';
            // "Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:61.0) Gecko/20100101 Firefox/61.0"
        }
        else if (sUsrAg.indexOf('SamsungBrowser') > -1) {
            sBrowser = 'Samsung Internet';
            // "Mozilla/5.0 (Linux; Android 9; SAMSUNG SM-G955F Build/PPR1.180610.011) AppleWebKit/537.36 (KHTML, like Gecko) SamsungBrowser/9.4 Chrome/67.0.3396.87 Mobile Safari/537.36
        }
        else if (sUsrAg.indexOf('Opera') > -1 || sUsrAg.indexOf('OPR') > -1) {
            sBrowser = 'Opera';
            // "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3538.102 Safari/537.36 OPR/57.0.3098.106"
        }
        else if (sUsrAg.indexOf('Trident') > -1) {
            sBrowser = 'Microsoft Internet Explorer';
            // "Mozilla/5.0 (Windows NT 10.0; WOW64; Trident/7.0; .NET4.0C; .NET4.0E; Zoom 3.6.0; wbx 1.0.0; rv:11.0) like Gecko"
        }
        else if (sUsrAg.indexOf('Edge') > -1) {
            sBrowser = 'Microsoft Edge (Legacy)';
            // "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.36 Edge/16.16299"
        }
        else if (sUsrAg.indexOf('Edg') > -1) {
            sBrowser = 'Microsoft Edge (Chromium)';
            // Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36 Edg/91.0.864.64
        }
        else if (sUsrAg.indexOf('Chrome') > -1) {
            sBrowser = 'Google Chrome or Chromium';
            // "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Ubuntu Chromium/66.0.3359.181 Chrome/66.0.3359.181 Safari/537.36"
        }
        else if (sUsrAg.indexOf('Safari') > -1) {
            sBrowser = 'Apple Safari';
            // "Mozilla/5.0 (iPhone; CPU iPhone OS 11_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/11.0 Mobile/15E148 Safari/604.1 980x1306"
        }
        else {
            sBrowser = 'unknown';
        }
        return sBrowser;
    }
    getDeviceType() {
        const ua = navigator.userAgent;
        if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua)) {
            return 'tablet';
        }
        if (/Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(ua)) {
            return 'mobile';
        }
        return 'desktop';
    }
    isMobile() {
        const ua = navigator.userAgent;
        if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua)) {
            return false;
        }
        if (/Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(ua)) {
            return true;
        }
        return false;
    }
    isTablet() {
        const ua = navigator.userAgent;
        if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua)) {
            return true;
        }
        if (/Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(ua)) {
            return false;
        }
        return false;
    }
    isDesktop() {
        const ua = navigator.userAgent;
        if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua)) {
            return false;
        }
        if (/Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(ua)) {
            return false;
        }
        return true;
    }
    getOrientation() {
        if (window.matchMedia('(orientation: portrait)').matches) {
            return 'portrait';
        }
        if (window.matchMedia('(orientation: landscape)').matches) {
            return 'landscape';
        }
        return "";
    }
}
NgxDeviceInfoService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: NgxDeviceInfoService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
NgxDeviceInfoService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: NgxDeviceInfoService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: NgxDeviceInfoService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }], ctorParameters: function () { return []; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWRldmljZS1pbmZvLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtZGV2aWNlLWluZm8vc3JjL2xpYi9uZ3gtZGV2aWNlLWluZm8uc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDOztBQUszQyxNQUFNLE9BQU8sb0JBQW9CO0lBc0IvQjtRQXJCUSxxQkFBZ0IsR0FBRztZQUN6QixhQUFhO1lBQ2IsZUFBZTtZQUNmLE1BQU07WUFDTixNQUFNO1lBQ04sUUFBUTtZQUNSLFlBQVk7WUFDWixTQUFTO1lBQ1QsYUFBYTtZQUNiLGtCQUFrQjtZQUNsQixpQkFBaUI7WUFDakIsV0FBVztZQUNYLG9CQUFvQjtZQUNwQixzQkFBc0I7WUFDdEIsZUFBZTtZQUNmLFdBQVc7WUFDWCxjQUFjO1lBQ2QsV0FBVztZQUNYLGlCQUFpQjtZQUNqQixLQUFLO1NBQ04sQ0FBQztRQTBOSyxzQkFBaUIsR0FBRyxLQUFLLElBQUksRUFBRTtZQUNwQyxNQUFNLGNBQWMsR0FBUSxFQUFFLENBQUM7WUFDL0IsMkVBQTJFO1lBQzNFLE1BQU0sT0FBTyxDQUFDLEdBQUcsQ0FDZixJQUFJLENBQUMsZ0JBQWdCLENBQUMsR0FBRyxDQUFDLEtBQUssRUFBRSxjQUFtQixFQUFFLEVBQUU7Z0JBQ3RELElBQUk7b0JBQ0YsSUFBSSxVQUFVLENBQUM7b0JBQ2YsUUFBUSxjQUFjLEVBQUU7d0JBQ3RCLEtBQUssTUFBTTs0QkFDVCxxRkFBcUY7NEJBQ3JGLFVBQVUsR0FBRyxNQUFNLFNBQVMsQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDO2dDQUM3QyxJQUFJLEVBQUUsY0FBYzs2QkFDckIsQ0FBQyxDQUFDOzRCQUNILE1BQU07d0JBQ1I7NEJBQ0UsVUFBVSxHQUFHLE1BQU0sU0FBUyxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUM7Z0NBQzdDLElBQUks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QztJQUNmLENBQUM7SUFFTSxRQUFRO1FBQ2IsTUFBTSxFQUFFLEdBQUcsU0FBUyxDQUFDLFNBQVMsQ0FBQztRQUMvQixJQUFJLGtEQUFrRCxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRTtZQUMvRCxPQUFPLElBQUksQ0FBQztTQUNiO1FBQ0QsSUFDRSxxR0FBcUcsQ0FBQyxJQUFJLENBQ3hHLEVBQUUsQ0FDSCxFQUNEO1lBQ0EsT0FBTyxLQUFLLENBQUM7U0FDZDtRQUNELE9BQU8sS0FBSyxDQUFDO0lBQ2YsQ0FBQztJQUVNLFNBQVM7UUFDZCxNQUFNLEVBQUUsR0FBRyxTQUFTLENBQUMsU0FBUyxDQUFDO1FBQy9CLElBQUksa0RBQWtELENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFFO1lBQy9ELE9BQU8sS0FBSyxDQUFDO1NBQ2Q7UUFDRCxJQUNFLHFHQUFxRyxDQUFDLElBQUksQ0FDeEcsRUFBRSxDQUNILEVBQ0Q7WUFDQSxPQUFPLEtBQUssQ0FBQztTQUNkO1FBQ0QsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDO0lBRU0sY0FBYztRQUNuQixJQUFJLE1BQU0sQ0FBQyxVQUFVLENBQUMseUJBQXlCLENBQUMsQ0FBQyxPQUFPLEVBQUU7WUFDeEQsT0FBTyxVQUFVLENBQUM7U0FDbkI7UUFDRCxJQUFJLE1BQU0sQ0FBQyxVQUFVLENBQUMsMEJBQTBCLENBQUMsQ0FBQyxPQUFPLEVBQUU7WUFDekQsT0FBTyxXQUFXLENBQUM7U0FDcEI7UUFDRCxPQUFPLEVBQUUsQ0FBQztJQUNaLENBQUM7O2lIQTdPVSxvQkFBb0I7cUhBQXBCLG9CQUFvQixjQUZuQixNQUFNOzJGQUVQLG9CQUFvQjtrQkFIaEMsVUFBVTttQkFBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBOZ3hEZXZpY2VJbmZvU2VydmljZSB7XG4gIHByaXZhdGUgcGVybWlzc2lvbnNOYW1lcyA9IFtcbiAgICAnZ2VvbG9jYXRpb24nLFxuICAgICdub3RpZmljYXRpb25zJyxcbiAgICAncHVzaCcsXG4gICAgJ21pZGknLFxuICAgICdjYW1lcmEnLFxuICAgICdtaWNyb3Bob25lJyxcbiAgICAnc3BlYWtlcicsXG4gICAgJ2RldmljZS1pbmZvJyxcbiAgICAnYmFja2dyb3VuZC1mZXRjaCcsXG4gICAgJ2JhY2tncm91bmQtc3luYycsXG4gICAgJ2JsdWV0b290aCcsXG4gICAgJ3BlcnNpc3RlbnQtc3RvcmFnZScsXG4gICAgJ2FtYmllbnQtbGlnaHQtc2Vuc29yJyxcbiAgICAnYWNjZWxlcm9tZXRlcicsXG4gICAgJ2d5cm9zY29wZScsXG4gICAgJ21hZ25ldG9tZXRlcicsXG4gICAgJ2NsaXBib2FyZCcsXG4gICAgJ2Rpc3BsYXktY2FwdHVyZScsXG4gICAgJ25mYycsXG4gIF07XG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgcHVibGljIGFzeW5jIGdldERldmljZUluZm8oKSB7XG4gICAgbGV0IGRldmljZU5hbWUgPSAnJztcbiAgICB2YXIgaXNNb2JpbGUgPSB7XG4gICAgICBBbmRyb2lkOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBuYXZpZ2F0b3IudXNlckFnZW50Lm1hdGNoKC9BbmRyb2lkL2kpO1xuICAgICAgfSxcbiAgICAgIERhdGFsb2dpYzogZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gbmF2aWdhdG9yLnVzZXJBZ2VudC5tYXRjaCgvREwtQVhJUy9pKTtcbiAgICAgIH0sXG4gICAgICBCbHVlYmlyZDogZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gbmF2aWdhdG9yLnVzZXJBZ2VudC5tYXRjaCgvRUY1MDAvaSk7XG4gICAgICB9LFxuICAgICAgSG9uZXl3ZWxsOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBuYXZpZ2F0b3IudXNlckFnZW50Lm1hdGNoKC9DVDUwL2kpO1xuICAgICAgfSxcbiAgICAgIFplYnJhOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBuYXZpZ2F0b3IudXNlckFnZW50Lm1hdGNoKC9UQzcwfFRDNTUvaSk7XG4gICAgICB9LFxuICAgICAgQmxhY2tCZXJyeTogZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gbmF2aWdhdG9yLnVzZXJBZ2VudC5tYXRjaCgvQmxhY2tCZXJyeS9pKTtcbiAgICAgIH0sXG4gICAgICBpT1M6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIG5hdmlnYXRvci51c2VyQWdlbnQubWF0Y2goL2lQaG9uZXxpUGFkfGlQb2QvaSk7XG4gICAgICB9LFxuICAgICAgV2luZG93czogZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gbmF2aWdhdG9yLnVzZXJBZ2VudC5tYXRjaCgvSUVNb2JpbGUvaSk7XG4gICAgICB9LFxuICAgICAgYW55OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgaXNNb2JpbGUuRGF0YWxvZ2ljKCkgfHxcbiAgICAgICAgICBpc01vYmlsZS5CbHVlYmlyZCgpIHx8XG4gICAgICAgICAgaXNNb2JpbGUuSG9uZXl3ZWxsKCkgfHxcbiAgICAgICAgICBpc01vYmlsZS5aZWJyYSgpIHx8XG4gICAgICAgICAgaXNNb2JpbGUuQmxhY2tCZXJyeSgpIHx8XG4gICAgICAgICAgaXNNb2JpbGUuQW5kcm9pZCgpIHx8XG4gICAgICAgICAgaXNNb2JpbGUuaU9TKCkgfHxcbiAgICAgICAgICBpc01vYmlsZS5XaW5kb3dzKClcbiAgICAgICAgKTtcbiAgICAgIH0sXG4gICAgfTtcblxuICAgIGlmIChpc01vYmlsZS5EYXRhbG9naWMoKSkgZGV2aWNlTmFtZSA9ICdEYXRhbG9naWMnO1xuICAgIGVsc2UgaWYgKGlzTW9iaWxlLkJsdWViaXJkKCkpIGRldmljZU5hbWUgPSAnQmx1ZWJpcmQnO1xuICAgIGVsc2UgaWYgKGlzTW9iaWxlLkhvbmV5d2VsbCgpKSBkZXZpY2VOYW1lID0gJ0hvbmV5d2VsbCc7XG4gICAgZWxzZSBpZiAoaXNNb2JpbGUuWmVicmEoKSkgZGV2aWNlTmFtZSA9ICdaZWJyYSc7XG4gICAgZWxzZSBpZiAoaXNNb2JpbGUuQmxhY2tCZXJyeSgpKSBkZXZpY2VOYW1lID0gJ0JsYWNrQmVycnknO1xuICAgIGVsc2UgaWYgKGlzTW9iaWxlLmlPUygpKSBkZXZpY2VOYW1lID0gJ2lPUyc7XG4gICAgZWxzZSBpZiAoZGV2aWNlTmFtZSA9PSAnJyAmJiBpc01vYmlsZS5BbmRyb2lkKCkpIGRldmljZU5hbWUgPSAnQW5kcm9pZCc7XG4gICAgZWxzZSBpZiAoZGV2aWNlTmFtZSA9PSAnJyAmJiBpc01vYmlsZS5XaW5kb3dzKCkpIGRldmljZU5hbWUgPSAnV2luZG93cyc7XG5cbiAgICAvLyBpZiAoZGV2aWNlTmFtZSkge1xuICAgIC8vICAgY29uc29sZS5sb2coJ0RldmljZXMgaW5mb3JtYXRpb24gZGV2aWNlTmFtZSA9ICcgKyBkZXZpY2VOYW1lKTtcbiAgICAvLyAgIGNvbnNvbGUubG9nKCdEZXZpY2VzIGluZm9ybWF0aW9uIGFueSA9ICcgKyBpc01vYmlsZS5hbnkoKSk7XG4gICAgLy8gICBjb25zb2xlLmxvZygnbmF2aWdhdG9yLnVzZXJBZ2VudCA9ICcgKyBuYXZpZ2F0b3IudXNlckFnZW50KTtcbiAgICAvLyB9XG4gICAgbGV0IGRldmljZURhdGE6IGFueSA9IHtcbiAgICAgIGRldmljZU5hbWU6IGRldmljZU5hbWUsXG4gICAgICBvcmllbnRhdGlvbjogdGhpcy5nZXRPcmllbnRhdGlvbigpLFxuICAgICAgZGV2aWNlVHlwZTogdGhpcy5nZXREZXZpY2VUeXBlKCksXG4gICAgICB1c2VyQWdlbnQ6IG5hdmlnYXRvci51c2VyQWdlbnQsXG4gICAgICBpc01vYmlsZTogdGhpcy5pc01vYmlsZSgpLFxuICAgICAgaXNEZXNrdG9wOiB0aGlzLmlzRGVza3RvcCgpLFxuICAgICAgaXNUYWJsZXQ6IHRoaXMuaXNUYWJsZXQoKSxcbiAgICAgIGxhbmd1YWdlOiB3aW5kb3cubmF2aWdhdG9yLmxhbmd1YWdlLFxuICAgICAgaXNPbmxpbmU6IHdpbmRvdy5uYXZpZ2F0b3Iub25MaW5lLFxuICAgICAgY29va2llRW5hYmxlZDogd2luZG93Lm5hdmlnYXRvci5jb29raWVFbmFibGVkLFxuICAgICAgdmVuZG9yOiB3aW5kb3cubmF2aWdhdG9yLnZlbmRvcixcbiAgICAgIGNsaWVudEhlaWdodDogZG9jdW1lbnQuYm9keS5jbGllbnRIZWlnaHQsXG4gICAgICBjbGllbnRXaWR0aDogZG9jdW1lbnQuYm9keS5jbGllbnRXaWR0aCxcbiAgICAgIGhlaWdodDogc2NyZWVuLmhlaWdodCxcbiAgICAgIHdpZHRoOiBzY3JlZW4ud2lkdGgsXG4gICAgICBhdmFpbEhlaWdodDogc2NyZWVuLmF2YWlsSGVpZ2h0LFxuICAgICAgYXZhaWxXaWR0aDogc2NyZWVuLmF2YWlsV2lkdGgsXG4gICAgICBpbm5lckhlaWdodDogd2luZG93LmlubmVySGVpZ2h0LFxuICAgICAgaW5uZXJXaWR0aDogd2luZG93LmlubmVyV2lkdGgsXG4gICAgICBvdXRlckhlaWdodDogd2luZG93Lm91dGVySGVpZ2h0LFxuICAgICAgb3V0ZXJXaWR0aDogd2luZG93Lm91dGVyV2lkdGgsXG4gICAgICBocmVmOiB3aW5kb3cubG9jYXRpb24uaHJlZixcbiAgICAgIHByb3RvY2FsOiB3aW5kb3cubG9jYXRpb24ucHJvdG9jb2wsXG4gICAgICBob3N0OiB3aW5kb3cubG9jYXRpb24uaG9zdCxcbiAgICAgIGhvc3RuYW1lOiB3aW5kb3cubG9jYXRpb24uaG9zdG5hbWUsXG4gICAgICBwb3J0OiB3aW5kb3cubG9jYXRpb24ucG9ydCxcbiAgICAgIHBhdGhuYW1lOiB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUsXG4gICAgICBzZWFyY2g6IHdpbmRvdy5sb2NhdGlvbi5zZWFyY2gsXG4gICAgICBoYXNoOiB3aW5kb3cubG9jYXRpb24uaGFzaCxcbiAgICAgIG9yaWdpbjogd2luZG93LmxvY2F0aW9uLm9yaWdpbixcbiAgICAgIHRpbWVab25lT2ZmU2V0OiBuZXcgRGF0ZSgpLmdldFRpbWV6b25lT2Zmc2V0KCksXG4gICAgICB1dGNTdHJpbmc6IG5ldyBEYXRlKCkudG9VVENTdHJpbmcoKSxcbiAgICAgIHRpbWU6IG5ldyBEYXRlKCkuZ2V0VGltZSgpLFxuICAgICAgZGF0ZTogbmV3IERhdGUoKS5nZXREYXRlKCksXG4gICAgICBkYXk6IG5ldyBEYXRlKCkuZ2V0RGF5KCksXG4gICAgICBtb250aDogbmV3IERhdGUoKS5nZXRNb250aCgpLFxuICAgICAgaG91cjogbmV3IERhdGUoKS5nZXRIb3VycygpLFxuICAgICAgeWVhcjogbmV3IERhdGUoKS5nZXRGdWxsWWVhcigpLFxuICAgICAgc2Vjb25kczogbmV3IERhdGUoKS5nZXRTZWNvbmRzLFxuICAgICAgbWlsbGlzZWNvbmRzOiBuZXcgRGF0ZSgpLmdldE1pbGxpc2Vjb25kcygpLFxuICAgICAgdXRjZGF0ZTogbmV3IERhdGUoKS5nZXRVVENEYXRlKCksXG4gICAgICB1dGNkYXk6IG5ldyBEYXRlKCkuZ2V0VVRDRGF5KCksXG4gICAgICB1dGNtb250aDogbmV3IERhdGUoKS5nZXRVVENNb250aCgpLFxuICAgICAgdXRjeWVhcjogbmV3IERhdGUoKS5nZXRVVENGdWxsWWVhcigpLFxuICAgIH07XG4gICAgYXdhaXQgdGhpcy5nZXRBbGxQZXJtaXNzaW9ucygpLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgIGRhdGEuZm9yRWFjaCgoZWxlbWVudDogYW55KSA9PiB7XG4gICAgICAgIGRldmljZURhdGFbZWxlbWVudFsncGVybWlzc2lvbk5hbWUnXV0gPSBlbGVtZW50WydzdGF0ZSddO1xuICAgICAgfSk7XG4gICAgfSk7XG4gICAgcmV0dXJuIGRldmljZURhdGE7XG4gIH1cblxuICBwdWJsaWMgZ2V0RGV2aWNlTmFtZSgpIHtcbiAgICB2YXIgc0Jyb3dzZXIsXG4gICAgICBzVXNyQWcgPSBuYXZpZ2F0b3IudXNlckFnZW50O1xuXG4gICAgLy8gVGhlIG9yZGVyIG1hdHRlcnMgaGVyZSwgYW5kIHRoaXMgbWF5IHJlcG9ydCBmYWxzZSBwb3NpdGl2ZXMgZm9yIHVubGlzdGVkIGJyb3dzZXJzLlxuXG4gICAgaWYgKHNVc3JBZy5pbmRleE9mKCdGaXJlZm94JykgPiAtMSkge1xuICAgICAgc0Jyb3dzZXIgPSAnTW96aWxsYSBGaXJlZm94JztcbiAgICAgIC8vIFwiTW96aWxsYS81LjAgKFgxMTsgVWJ1bnR1OyBMaW51eCB4ODZfNjQ7IHJ2OjYxLjApIEdlY2tvLzIwMTAwMTAxIEZpcmVmb3gvNjEuMFwiXG4gICAgfSBlbHNlIGlmIChzVXNyQWcuaW5kZXhPZignU2Ftc3VuZ0Jyb3dzZXInKSA+IC0xKSB7XG4gICAgICBzQnJvd3NlciA9ICdTYW1zdW5nIEludGVybmV0JztcbiAgICAgIC8vIFwiTW96aWxsYS81LjAgKExpbnV4OyBBbmRyb2lkIDk7IFNBTVNVTkcgU00tRzk1NUYgQnVpbGQvUFBSMS4xODA2MTAuMDExKSBBcHBsZVdlYktpdC81MzcuMzYgKEtIVE1MLCBsaWtlIEdlY2tvKSBTYW1zdW5nQnJvd3Nlci85LjQgQ2hyb21lLzY3LjAuMzM5Ni44NyBNb2JpbGUgU2FmYXJpLzUzNy4zNlxuICAgIH0gZWxzZSBpZiAoc1VzckFnLmluZGV4T2YoJ09wZXJhJykgPiAtMSB8fCBzVXNyQWcuaW5kZXhPZignT1BSJykgPiAtMSkge1xuICAgICAgc0Jyb3dzZXIgPSAnT3BlcmEnO1xuICAgICAgLy8gXCJNb3ppbGxhLzUuMCAoTWFjaW50b3NoOyBJbnRlbCBNYWMgT1MgWCAxMF8xNF8wKSBBcHBsZVdlYktpdC81MzcuMzYgKEtIVE1MLCBsaWtlIEdlY2tvKSBDaHJvbWUvNzAuMC4zNTM4LjEwMiBTYWZhcmkvNTM3LjM2IE9QUi81Ny4wLjMwOTguMTA2XCJcbiAgICB9IGVsc2UgaWYgKHNVc3JBZy5pbmRleE9mKCdUcmlkZW50JykgPiAtMSkge1xuICAgICAgc0Jyb3dzZXIgPSAnTWljcm9zb2Z0IEludGVybmV0IEV4cGxvcmVyJztcbiAgICAgIC8vIFwiTW96aWxsYS81LjAgKFdpbmRvd3MgTlQgMTAuMDsgV09XNjQ7IFRyaWRlbnQvNy4wOyAuTkVUNC4wQzsgLk5FVDQuMEU7IFpvb20gMy42LjA7IHdieCAxLjAuMDsgcnY6MTEuMCkgbGlrZSBHZWNrb1wiXG4gICAgfSBlbHNlIGlmIChzVXNyQWcuaW5kZXhPZignRWRnZScpID4gLTEpIHtcbiAgICAgIHNCcm93c2VyID0gJ01pY3Jvc29mdCBFZGdlIChMZWdhY3kpJztcbiAgICAgIC8vIFwiTW96aWxsYS81LjAgKFdpbmRvd3MgTlQgMTAuMDsgV2luNjQ7IHg2NCkgQXBwbGVXZWJLaXQvNTM3LjM2IChLSFRNTCwgbGlrZSBHZWNrbykgQ2hyb21lLzU4LjAuMzAyOS4xMTAgU2FmYXJpLzUzNy4zNiBFZGdlLzE2LjE2Mjk5XCJcbiAgICB9IGVsc2UgaWYgKHNVc3JBZy5pbmRleE9mKCdFZGcnKSA+IC0xKSB7XG4gICAgICBzQnJvd3NlciA9ICdNaWNyb3NvZnQgRWRnZSAoQ2hyb21pdW0pJztcbiAgICAgIC8vIE1vemlsbGEvNS4wIChXaW5kb3dzIE5UIDEwLjA7IFdpbjY0OyB4NjQpIEFwcGxlV2ViS2l0LzUzNy4zNiAoS0hUTUwsIGxpa2UgR2Vja28pIENocm9tZS85MS4wLjQ0NzIuMTI0IFNhZmFyaS81MzcuMzYgRWRnLzkxLjAuODY0LjY0XG4gICAgfSBlbHNlIGlmIChzVXNyQWcuaW5kZXhPZignQ2hyb21lJykgPiAtMSkge1xuICAgICAgc0Jyb3dzZXIgPSAnR29vZ2xlIENocm9tZSBvciBDaHJvbWl1bSc7XG4gICAgICAvLyBcIk1vemlsbGEvNS4wIChYMTE7IExpbnV4IHg4Nl82NCkgQXBwbGVXZWJLaXQvNTM3LjM2IChLSFRNTCwgbGlrZSBHZWNrbykgVWJ1bnR1IENocm9taXVtLzY2LjAuMzM1OS4xODEgQ2hyb21lLzY2LjAuMzM1OS4xODEgU2FmYXJpLzUzNy4zNlwiXG4gICAgfSBlbHNlIGlmIChzVXNyQWcuaW5kZXhPZignU2FmYXJpJykgPiAtMSkge1xuICAgICAgc0Jyb3dzZXIgPSAnQXBwbGUgU2FmYXJpJztcbiAgICAgIC8vIFwiTW96aWxsYS81LjAgKGlQaG9uZTsgQ1BVIGlQaG9uZSBPUyAxMV80IGxpa2UgTWFjIE9TIFgpIEFwcGxlV2ViS2l0LzYwNS4xLjE1IChLSFRNTCwgbGlrZSBHZWNrbykgVmVyc2lvbi8xMS4wIE1vYmlsZS8xNUUxNDggU2FmYXJpLzYwNC4xIDk4MHgxMzA2XCJcbiAgICB9IGVsc2Uge1xuICAgICAgc0Jyb3dzZXIgPSAndW5rbm93bic7XG4gICAgfVxuICAgIHJldHVybiBzQnJvd3NlcjtcbiAgfVxuXG4gIHB1YmxpYyBnZXREZXZpY2VUeXBlKCkge1xuICAgIGNvbnN0IHVhID0gbmF2aWdhdG9yLnVzZXJBZ2VudDtcbiAgICBpZiAoLyh0YWJsZXR8aXBhZHxwbGF5Ym9va3xzaWxrKXwoYW5kcm9pZCg/IS4qbW9iaSkpL2kudGVzdCh1YSkpIHtcbiAgICAgIHJldHVybiAndGFibGV0JztcbiAgICB9XG4gICAgaWYgKFxuICAgICAgL01vYmlsZXxpUChob25lfG9kKXxBbmRyb2lkfEJsYWNrQmVycnl8SUVNb2JpbGV8S2luZGxlfFNpbGstQWNjZWxlcmF0ZWR8KGhwd3x3ZWIpT1N8T3BlcmEgTShvYml8aW5pKS8udGVzdChcbiAgICAgICAgdWFcbiAgICAgIClcbiAgICApIHtcbiAgICAgIHJldHVybiAnbW9iaWxlJztcbiAgICB9XG4gICAgcmV0dXJuICdkZXNrdG9wJztcbiAgfVxuXG4gIHB1YmxpYyBpc01vYmlsZSgpIHtcbiAgICBjb25zdCB1YSA9IG5hdmlnYXRvci51c2VyQWdlbnQ7XG4gICAgaWYgKC8odGFibGV0fGlwYWR8cGxheWJvb2t8c2lsayl8KGFuZHJvaWQoPyEuKm1vYmkpKS9pLnRlc3QodWEpKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGlmIChcbiAgICAgIC9Nb2JpbGV8aVAoaG9uZXxvZCl8QW5kcm9pZHxCbGFja0JlcnJ5fElFTW9iaWxlfEtpbmRsZXxTaWxrLUFjY2VsZXJhdGVkfChocHd8d2ViKU9TfE9wZXJhIE0ob2JpfGluaSkvLnRlc3QoXG4gICAgICAgIHVhXG4gICAgICApXG4gICAgKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgcHVibGljIGlzVGFibGV0KCkge1xuICAgIGNvbnN0IHVhID0gbmF2aWdhdG9yLnVzZXJBZ2VudDtcbiAgICBpZiAoLyh0YWJsZXR8aXBhZHxwbGF5Ym9va3xzaWxrKXwoYW5kcm9pZCg/IS4qbW9iaSkpL2kudGVzdCh1YSkpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBpZiAoXG4gICAgICAvTW9iaWxlfGlQKGhvbmV8b2QpfEFuZHJvaWR8QmxhY2tCZXJyeXxJRU1vYmlsZXxLaW5kbGV8U2lsay1BY2NlbGVyYXRlZHwoaHB3fHdlYilPU3xPcGVyYSBNKG9iaXxpbmkpLy50ZXN0KFxuICAgICAgICB1YVxuICAgICAgKVxuICAgICkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBwdWJsaWMgaXNEZXNrdG9wKCkge1xuICAgIGNvbnN0IHVhID0gbmF2aWdhdG9yLnVzZXJBZ2VudDtcbiAgICBpZiAoLyh0YWJsZXR8aXBhZHxwbGF5Ym9va3xzaWxrKXwoYW5kcm9pZCg/IS4qbW9iaSkpL2kudGVzdCh1YSkpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgaWYgKFxuICAgICAgL01vYmlsZXxpUChob25lfG9kKXxBbmRyb2lkfEJsYWNrQmVycnl8SUVNb2JpbGV8S2luZGxlfFNpbGstQWNjZWxlcmF0ZWR8KGhwd3x3ZWIpT1N8T3BlcmEgTShvYml8aW5pKS8udGVzdChcbiAgICAgICAgdWFcbiAgICAgIClcbiAgICApIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBwdWJsaWMgZ2V0T3JpZW50YXRpb24oKSB7XG4gICAgaWYgKHdpbmRvdy5tYXRjaE1lZGlhKCcob3JpZW50YXRpb246IHBvcnRyYWl0KScpLm1hdGNoZXMpIHtcbiAgICAgIHJldHVybiAncG9ydHJhaXQnO1xuICAgIH1cbiAgICBpZiAod2luZG93Lm1hdGNoTWVkaWEoJyhvcmllbnRhdGlvbjogbGFuZHNjYXBlKScpLm1hdGNoZXMpIHtcbiAgICAgIHJldHVybiAnbGFuZHNjYXBlJztcbiAgICB9XG4gICAgcmV0dXJuIFwiXCI7XG4gIH1cblxuICBwdWJsaWMgZ2V0QWxsUGVybWlzc2lvbnMgPSBhc3luYyAoKSA9PiB7XG4gICAgY29uc3QgYWxsUGVybWlzc2lvbnM6IGFueSA9IFtdO1xuICAgIC8vIFdlIHVzZSBQcm9taXNlLmFsbCB0byB3YWl0IHVudGlsIGFsbCB0aGUgcGVybWlzc2lvbiBxdWVyaWVzIGFyZSByZXNvbHZlZFxuICAgIGF3YWl0IFByb21pc2UuYWxsKFxuICAgICAgdGhpcy5wZXJtaXNzaW9uc05hbWVzLm1hcChhc3luYyAocGVybWlzc2lvbk5hbWU6IGFueSkgPT4ge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIGxldCBwZXJtaXNzaW9uO1xuICAgICAgICAgIHN3aXRjaCAocGVybWlzc2lvbk5hbWUpIHtcbiAgICAgICAgICAgIGNhc2UgJ3B1c2gnOlxuICAgICAgICAgICAgICAvLyBOb3QgbmVjZXNzYXJ5IGJ1dCByaWdodCBub3cgQ2hyb21lIG9ubHkgc3VwcG9ydHMgcHVzaCBtZXNzYWdlcyB3aXRoICBub3RpZmljYXRpb25zXG4gICAgICAgICAgICAgIHBlcm1pc3Npb24gPSBhd2FpdCBuYXZpZ2F0b3IucGVybWlzc2lvbnMucXVlcnkoe1xuICAgICAgICAgICAgICAgIG5hbWU6IHBlcm1pc3Npb25OYW1lLFxuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICBwZXJtaXNzaW9uID0gYXdhaXQgbmF2aWdhdG9yLnBlcm1pc3Npb25zLnF1ZXJ5KHtcbiAgICAgICAgICAgICAgICBuYW1lOiBwZXJtaXNzaW9uTmFtZSxcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGFsbFBlcm1pc3Npb25zLnB1c2goeyBwZXJtaXNzaW9uTmFtZSwgc3RhdGU6IHBlcm1pc3Npb24uc3RhdGUgfSk7XG4gICAgICAgIH0gY2F0Y2ggKGU6IGFueSkge1xuICAgICAgICAgIGFsbFBlcm1pc3Npb25zLnB1c2goe1xuICAgICAgICAgICAgcGVybWlzc2lvbk5hbWUsXG4gICAgICAgICAgICBzdGF0ZTogJ2Vycm9yJyxcbiAgICAgICAgICAgIGVycm9yTWVzc2FnZTogZS50b1N0cmluZygpLFxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9KVxuICAgICk7XG4gICAgcmV0dXJuIGFsbFBlcm1pc3Npb25zO1xuICB9O1xufVxuIl19