const jwtSecret = process.env.JWT_SECRET || 'sdfAWEujNVDE7654e$';
const encPassSecret = process.env.PASS_SECRET || 'JURhbca037IVFj$TYTR'
module.exports = {
    jwtSecret: jwtSecret,
    encPassSecret: encPassSecret
}