
class Moment {
    constructor(date) {
        this.initDate(date)
    }

    initDate(date) {
        this.year = date.getFullYear()
        this.month = date.getMonth() + 1
        this.day = date.getDate()
        this.hour = date.getHours()
        this.minute = date.getMinutes()
        this.second = date.getSeconds()
        this.addDate();
    }

    addDate() {
        if (Number(this.month) < 10) {
            this.month = '0' + this.month
        }
        if (Number(this.day) < 10) {
            this.day = '0' + this.day
        }
        if (Number(this.hour) < 10) {
            this.hour = '0' + this.hour
        }
        if (Number(this.minute) < 10) {
            this.minute = '0' + this.minute
        }
        if (Number(this.second) < 10) {
            this.second = '0' + this.second
        }
    }

    format(type) {
        if (type.includes('年') && type.includes('月') && type.includes('日') && !type.includes(':')) {
            return `${this.year}年${this.month}月${this.day}日`
        } else if (type.includes('-')) {
            return `${this.year}-${this.month}-${this.day} ${this.hour}:${this.minute}:${this.second}`
        } else if (type.includes('/')) {
            return `${this.year}/${this.month}/${this.day} ${this.hour}:${this.minute}:${this.second}`
        } else {
            return `${this.year}年${this.month}月${this.day}日 ${this.hour}:${this.minute}:${this.second}`
        }
    }

    getTime(type) {
        return this.format(type)
    }

    formatTime(obj) {
        if (! typeof obj === 'object') {
            console.error('formatTime params instanceof object not ' + typeof obj);
            return;
        }
        if (!(obj.date instanceof Date)) {
            console.error('formatTime instanceof Date not others')
            return;
        }
        if (!obj.format) {
            console.warn('format is undefined, what format do you need?');
        }
        this.initDate(obj.date);
        return this.format(obj.format);

    }



}

module.exports = new Moment(new Date());

