'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { 
    function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) { 
            var descriptor = props[i]; 
            descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; 
            if ("value" in descriptor) descriptor.writable = true; 
            Object.defineProperty(target, descriptor.key, descriptor); 
        } 
    } 
    return function (Constructor, protoProps, staticProps) { 
        if (protoProps) defineProperties(Constructor.prototype, protoProps); 
        if (staticProps) defineProperties(Constructor, staticProps); 
        return Constructor; 
    }; 
}();

function _classCallCheck(instance, Constructor) { 
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function"); 
    } 
}

var Moment = function () {
    function Moment(date) {

        _classCallCheck(this, Moment);

        this.initDate(date);
    }

    _createClass(Moment, [
        {
            key: 'initDate',
            value: function initDate(date) {
                this.year = date.getFullYear();
                this.month = date.getMonth() + 1;
                this.day = date.getDate();
                this.hour = date.getHours();
                this.minute = date.getMinutes();
                this.second = date.getSeconds();
                this.addDate();
            }
        }, 
        {
            key: 'addDate',
            value: function addDate() {
                if (Number(this.month) < 10) {
                    this.month = '0' + this.month;
                }
                if (Number(this.day) < 10) {
                    this.day = '0' + this.day;
                }
                if (Number(this.hour) < 10) {
                    this.hour = '0' + this.hour;
                }
                if (Number(this.minute) < 10) {
                    this.minute = '0' + this.minute;
                }
                if (Number(this.second) < 10) {
                    this.second = '0' + this.second;
                }
            }
        }, 
        {
            key: 'format',
            value: function format(type) {
                if (type.includes('年') && type.includes('月') && type.includes('日') && !type.includes(':')) {
                    return this.year + '\u5E74' + this.month + '\u6708' + this.day + '\u65E5';
                } else if (type.includes('-')) {
                    return this.year + '-' + this.month + '-' + this.day + ' ' + this.hour + ':' + this.minute + ':' + this.second;
                } else if (type.includes('/')) {
                    return this.year + '/' + this.month + '/' + this.day + ' ' + this.hour + ':' + this.minute + ':' + this.second;
                } else {
                    return this.year + '\u5E74' + this.month + '\u6708' + this.day + '\u65E5 ' + this.hour + ':' + this.minute + ':' + this.second;
                }
            }
        }, 
        {
            key: 'getTime',
            value: function getTime(type) {
                return this.format(type);
            }
        }, 
        {
            key: 'formatTime',
            value: function formatTime(obj) {
                if (!(typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) === 'object') {
                    console.error('formatTime params instanceof object not ' + (typeof obj === 'undefined' ? 'undefined' : _typeof(obj)));
                    return;
                }
                if (!(obj.date instanceof Date)) {
                    console.error('formatTime instanceof Date not others');
                    return;
                }
                if (!obj.format) {
                    console.warn('format is undefined, what format do you need?');
                }
                this.initDate(obj.date);
                return this.format(obj.format);
            }
        }
    ]);

    return Moment;
}();

module.exports = new Moment(new Date());
