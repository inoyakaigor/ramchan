class TimeFormatter {
  constructor(pattern = "%d.%m.%y %h:%m") {
    this.pattern = pattern
  }
  toFormattedString(time) {
    const d = new Date(time*1)
    const year   = d.getFullYear()
    const month  = d.getMonth() + 1 < 10 ? '0' + (d.getMonth() + 1) : d.getMonth() + 1
    const date   = d.getDate() + 1 < 10 ? '0' + d.getDate() : d.getDate()
    const hour   = d.getHours() + 1 < 10 ? '0' + (d.getHours() + 1) : d.getHours() + 1
    const minute = d.getMinutes() + 1 < 10 ? '0' + (d.getMinutes() + 1) : d.getMinutes() + 1
    return this.pattern.replace(/%d/, date).replace(/%m/, month).replace(/%y/, year).replace(/%h/, hour).replace(/%m/, minute)
  }
}

export const timeFormatter = new TimeFormatter()