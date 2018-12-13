

const errors= {
    BAD_REQUEST:{message:'BAD_REQUEST', code:400},
    NOT_FOUND: { message: 'NOT_FOUND', code:405},
    FORBIDDEN: {meesage: 'FORBIDDEN', code:403},
    UNAUTHORIZED: {message: 'UNAUTORIZED', code: 401},
    ERROR: {message: 'ERROR', code:500}
}

module.exports = {
    errors: errors
};