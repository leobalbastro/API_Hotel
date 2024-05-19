const emailRegexp = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
const passwordRegexp = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?['#'?!@$%^&*-]).{8,}$/


module.exports = { emailRegexp, passwordRegexp }