// creates a method and exports it


// High order function
// const asyncHandler = (func) => async (request, response, next) => {
//     try {
//         await func(req, res, next)
//     } catch (error) {
//         response.status(error.code || 500).json({
//             success: false,
//             message: error.message
//         })
//     }
// }

const asyncHandler = (requestHandler) => {
    (request, response, next) => {
        Promise.resolve(requestHandler(request, response, next))
            .catch((error) => {
                return next(error);
            })
    }
}





export { asyncHandler };