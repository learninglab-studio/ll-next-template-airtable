const dateFns = require('date-fns')
const { zonedTimeToUtc, utcToZonedTime, format } = require('date-fns-tz')

module.exports.llTimestamp = () => {
    return format(new Date(), 'yyyyMMdd.HHmmss.SSS')
}

module.exports.llDate = () => {
    return format(new Date(), 'yyyyMMdd')
}

module.exports.llDay = (d) => {
    return format(new Date(d), 'dddd')
}

module.exports.dateToLlDate = (theDate) => {
    return format(new Date(theDate), 'yyyyMMdd')
}

module.exports.llHHMM = (atDate) => {
    const tempUTCDate= new Date(atDate)
    const tzOffset = tempUTCDate.getTimezoneOffset()
    const actualUTCDate = dateFns.addMinutes(tempUTCDate, (-tzOffset))
    console.log(`at date was ${atDate} and time is ${format(actualUTCDate, 'HH:mm')}`);
    console.log(`tz offset is ${tzOffset}`);
    return format(actualUTCDate, 'HH:mm');
}

module.exports.convertAtToTimeString = (atDate) => {
    const tempUTCDate= new Date(atDate)
    const tzOffset = tempUTCDate.getTimezoneOffset()
    const actualUTCDate = dateFns.addMinutes(tempUTCDate, tzOffset)
    console.log(`at date was ${atDate} and time is ${format(actualUTCDate, 'HH:mm:ss')}`);
    console.log(`tz offset is ${tzOffset}`);
    return format(actualUTCDate, 'HH:mm:ss');
}