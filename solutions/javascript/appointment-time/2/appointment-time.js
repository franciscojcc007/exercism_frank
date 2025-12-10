// @ts-check

/**
 * Create an appointment
 *
 * @param {number} days
 * @param {number} [now] (ms since the epoch, or undefined)
 *
 * @returns {Date} the appointment
 */
export function createAppointment(days, now = new Date()) {
  const appointmentDate= new Date(now)
  appointmentDate.setDate(appointmentDate.getDate() + days)
  
  return appointmentDate
}

/**
 * Generate the appointment timestamp
 *
 * @param {Date} appointmentDate
 *
 * @returns {string} timestamp
 */
export function getAppointmentTimestamp(appointmentDate) {
  return appointmentDate.toISOString()
}

/**
 * Get details of an appointment
 *
 * @param {string} timestamp (ISO 8601)
 *
 * @returns {Record<'year' | 'month' | 'date' | 'hour' | 'minute', number>} the appointment details
 */
export function getAppointmentDetails(timestamp) {
  const appointmentDetails = new Date(timestamp)
  
  return{
    year: appointmentDetails.getFullYear(), 
    month: appointmentDetails.getMonth(), 
    date: appointmentDetails.getDate(), 
    hour: appointmentDetails.getHours(), 
    minute: appointmentDetails.getMinutes() 
  }
}

/**
 * Update an appointment with given options
 *
 * @param {string} timestamp (ISO 8601)
 * @param {Partial<Record<'year' | 'month' | 'date' | 'hour' | 'minute', number>>} options
 *
 * @returns {Record<'year' | 'month' | 'date' | 'hour' | 'minute', number>} the appointment details
 */
export function updateAppointment(timestamp, options) {
  const date = new Date(timestamp)

  if (options.year !== undefined) {
    date.setFullYear(options.year);
  }
  
  if (options.month !== undefined) {
    date.setMonth(options.month);
  }

   if (options.date !== undefined) {
    date.setDate(options.date);
  }

   if (options.hour !== undefined) {
    date.setHours(options.hour);
  }
  
   if (options.minute !== undefined) {
    date.setMinutes(options.minute);
  }
  
  return getAppointmentDetails(date.toISOString());
}

/**
 * Get available time in seconds (rounded) between two appointments
 *
 * @param {string} timestampA (ISO 8601)
 * @param {string} timestampB (ISO 8601)
 *
 * @returns {number} amount of seconds (rounded)
 */
function reformation (dateA, dateB) {
  const parsedA = new Date(dateA)
  const parsedB = new Date(dateB)
  const numA = Number(parsedA) 
  const numB = Number(parsedB) 

  return [ numA , numB]
}

export function timeBetween(timestampA, timestampB) {
  const [startDate, endDate] = reformation(timestampA, timestampB);
  const secondTransformation = 1000
  const numA = startDate / secondTransformation
  const numB = endDate / secondTransformation
  
  return Math.round(numB - numA);
}

/**
 * Get available times between two appointment
 *
 * @param {string} appointmentTimestamp (ISO 8601)
 * @param {string} currentTimestamp (ISO 8601)
 */
export function isValid(appointmentTimestamp, currentTimestamp) {
  const [dateAppointment, dateCurrent] = reformation(appointmentTimestamp, currentTimestamp)

  if(dateAppointment > dateCurrent){
    return true
  }
  
  return false
}
