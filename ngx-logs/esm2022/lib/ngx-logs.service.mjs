import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
export class NgxLogsService {
    /**
     * Logs current page info with all require information's (URL, PATH etc.)
     */
    log(text) {
        console.log(this.currentTime() + ': ' + text);
    }
    /**
     * Logs Error message for custom strings as console logs
     */
    error(text) {
        console.error(this.currentTime() + ': ' + text);
    }
    /**
     * Logs Error message for custom strings as console logs
     */
    warn(text) {
        console.warn(this.currentTime() + ': ' + text);
    }
    /**
     * Same as console logs
     */
    info(text) {
        console.info(this.currentTime() + ': ' + text);
    }
    /**
     * Clears the entire console logs
     */
    clear() {
        console.clear();
    }
    /**
     * Console logs for iterations with index value - Can be used with for , forin, foreach, do..while
     */
    counter(text) {
        console.count(text);
    }
    /**
     * Logs current page info with all require information's (URL, PATH etc.)
     */
    directory() {
        console.dir(document.location);
    }
    /**
     * Displays array or JSON of array/dictionary input as a table in console
     */
    table(array) {
        console.table(array);
    }
    /**
     * Logs current page info with all require information's (URL, PATH etc.)
     */
    currentTime() {
        return ((new Date().getHours() > 12
            ? new Date().getHours() - 12
            : new Date().getHours()) +
            ':' +
            new Date().getMinutes() +
            ':' +
            new Date().getSeconds() +
            ':' +
            new Date().getMilliseconds() +
            's');
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.8", ngImport: i0, type: NgxLogsService, deps: [], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "17.0.8", ngImport: i0, type: NgxLogsService, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.8", ngImport: i0, type: NgxLogsService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWxvZ3Muc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1sb2dzL3NyYy9saWIvbmd4LWxvZ3Muc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDOztBQUszQyxNQUFNLE9BQU8sY0FBYztJQUN6Qjs7T0FFRztJQUNJLEdBQUcsQ0FBQyxJQUFZO1FBQ3JCLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxHQUFHLElBQUksR0FBRyxJQUFJLENBQUMsQ0FBQztJQUNoRCxDQUFDO0lBQ0Q7O09BRUc7SUFDSSxLQUFLLENBQUMsSUFBWTtRQUN2QixPQUFPLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsR0FBRyxJQUFJLEdBQUcsSUFBSSxDQUFDLENBQUM7SUFDbEQsQ0FBQztJQUNEOztPQUVHO0lBQ0ksSUFBSSxDQUFDLElBQVk7UUFDdEIsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLEdBQUcsSUFBSSxHQUFHLElBQUksQ0FBQyxDQUFDO0lBQ2pELENBQUM7SUFDRDs7T0FFRztJQUNJLElBQUksQ0FBQyxJQUFZO1FBQ3RCLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxHQUFHLElBQUksR0FBRyxJQUFJLENBQUMsQ0FBQztJQUNqRCxDQUFDO0lBQ0Q7O09BRUc7SUFDSSxLQUFLO1FBQ1YsT0FBTyxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ2xCLENBQUM7SUFDRDs7T0FFRztJQUNJLE9BQU8sQ0FBQyxJQUFZO1FBQ3pCLE9BQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDdEIsQ0FBQztJQUNEOztPQUVHO0lBQ0ksU0FBUztRQUNkLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ2pDLENBQUM7SUFDRDs7T0FFRztJQUNJLEtBQUssQ0FBQyxLQUFVO1FBQ3JCLE9BQU8sQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDdkIsQ0FBQztJQUNEOztPQUVHO0lBQ0ssV0FBVztRQUNqQixPQUFPLENBQ0wsQ0FBQyxJQUFJLElBQUksRUFBRSxDQUFDLFFBQVEsRUFBRSxHQUFHLEVBQUU7WUFDekIsQ0FBQyxDQUFDLElBQUksSUFBSSxFQUFFLENBQUMsUUFBUSxFQUFFLEdBQUcsRUFBRTtZQUM1QixDQUFDLENBQUMsSUFBSSxJQUFJLEVBQUUsQ0FBQyxRQUFRLEVBQUUsQ0FBQztZQUMxQixHQUFHO1lBQ0gsSUFBSSxJQUFJLEVBQUUsQ0FBQyxVQUFVLEVBQUU7WUFDdkIsR0FBRztZQUNILElBQUksSUFBSSxFQUFFLENBQUMsVUFBVSxFQUFFO1lBQ3ZCLEdBQUc7WUFDSCxJQUFJLElBQUksRUFBRSxDQUFDLGVBQWUsRUFBRTtZQUM1QixHQUFHLENBQ0osQ0FBQztJQUNKLENBQUM7OEdBakVVLGNBQWM7a0hBQWQsY0FBYyxjQUZiLE1BQU07OzJGQUVQLGNBQWM7a0JBSDFCLFVBQVU7bUJBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgTmd4TG9nc1NlcnZpY2Uge1xuICAvKipcbiAgICogTG9ncyBjdXJyZW50IHBhZ2UgaW5mbyB3aXRoIGFsbCByZXF1aXJlIGluZm9ybWF0aW9uJ3MgKFVSTCwgUEFUSCBldGMuKVxuICAgKi9cbiAgcHVibGljIGxvZyh0ZXh0OiBzdHJpbmcpIHtcbiAgICBjb25zb2xlLmxvZyh0aGlzLmN1cnJlbnRUaW1lKCkgKyAnOiAnICsgdGV4dCk7XG4gIH1cbiAgLyoqXG4gICAqIExvZ3MgRXJyb3IgbWVzc2FnZSBmb3IgY3VzdG9tIHN0cmluZ3MgYXMgY29uc29sZSBsb2dzXG4gICAqL1xuICBwdWJsaWMgZXJyb3IodGV4dDogc3RyaW5nKSB7XG4gICAgY29uc29sZS5lcnJvcih0aGlzLmN1cnJlbnRUaW1lKCkgKyAnOiAnICsgdGV4dCk7XG4gIH1cbiAgLyoqXG4gICAqIExvZ3MgRXJyb3IgbWVzc2FnZSBmb3IgY3VzdG9tIHN0cmluZ3MgYXMgY29uc29sZSBsb2dzXG4gICAqL1xuICBwdWJsaWMgd2Fybih0ZXh0OiBzdHJpbmcpIHtcbiAgICBjb25zb2xlLndhcm4odGhpcy5jdXJyZW50VGltZSgpICsgJzogJyArIHRleHQpO1xuICB9XG4gIC8qKlxuICAgKiBTYW1lIGFzIGNvbnNvbGUgbG9nc1xuICAgKi9cbiAgcHVibGljIGluZm8odGV4dDogc3RyaW5nKSB7XG4gICAgY29uc29sZS5pbmZvKHRoaXMuY3VycmVudFRpbWUoKSArICc6ICcgKyB0ZXh0KTtcbiAgfVxuICAvKipcbiAgICogQ2xlYXJzIHRoZSBlbnRpcmUgY29uc29sZSBsb2dzXG4gICAqL1xuICBwdWJsaWMgY2xlYXIoKSB7XG4gICAgY29uc29sZS5jbGVhcigpO1xuICB9XG4gIC8qKlxuICAgKiBDb25zb2xlIGxvZ3MgZm9yIGl0ZXJhdGlvbnMgd2l0aCBpbmRleCB2YWx1ZSAtIENhbiBiZSB1c2VkIHdpdGggZm9yICwgZm9yaW4sIGZvcmVhY2gsIGRvLi53aGlsZVxuICAgKi9cbiAgcHVibGljIGNvdW50ZXIodGV4dDogc3RyaW5nKSB7XG4gICAgY29uc29sZS5jb3VudCh0ZXh0KTtcbiAgfVxuICAvKipcbiAgICogTG9ncyBjdXJyZW50IHBhZ2UgaW5mbyB3aXRoIGFsbCByZXF1aXJlIGluZm9ybWF0aW9uJ3MgKFVSTCwgUEFUSCBldGMuKVxuICAgKi9cbiAgcHVibGljIGRpcmVjdG9yeSgpIHtcbiAgICBjb25zb2xlLmRpcihkb2N1bWVudC5sb2NhdGlvbik7XG4gIH1cbiAgLyoqXG4gICAqIERpc3BsYXlzIGFycmF5IG9yIEpTT04gb2YgYXJyYXkvZGljdGlvbmFyeSBpbnB1dCBhcyBhIHRhYmxlIGluIGNvbnNvbGVcbiAgICovXG4gIHB1YmxpYyB0YWJsZShhcnJheTogYW55KSB7XG4gICAgY29uc29sZS50YWJsZShhcnJheSk7XG4gIH1cbiAgLyoqXG4gICAqIExvZ3MgY3VycmVudCBwYWdlIGluZm8gd2l0aCBhbGwgcmVxdWlyZSBpbmZvcm1hdGlvbidzIChVUkwsIFBBVEggZXRjLilcbiAgICovXG4gIHByaXZhdGUgY3VycmVudFRpbWUoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gKFxuICAgICAgKG5ldyBEYXRlKCkuZ2V0SG91cnMoKSA+IDEyXG4gICAgICAgID8gbmV3IERhdGUoKS5nZXRIb3VycygpIC0gMTJcbiAgICAgICAgOiBuZXcgRGF0ZSgpLmdldEhvdXJzKCkpICtcbiAgICAgICc6JyArXG4gICAgICBuZXcgRGF0ZSgpLmdldE1pbnV0ZXMoKSArXG4gICAgICAnOicgK1xuICAgICAgbmV3IERhdGUoKS5nZXRTZWNvbmRzKCkgK1xuICAgICAgJzonICtcbiAgICAgIG5ldyBEYXRlKCkuZ2V0TWlsbGlzZWNvbmRzKCkgK1xuICAgICAgJ3MnXG4gICAgKTtcbiAgfVxufVxuIl19