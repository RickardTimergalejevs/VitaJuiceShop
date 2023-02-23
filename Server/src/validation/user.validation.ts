import Joi from "joi"

const validateUser = Joi.object({
    firstName: Joi.string().min(1).max(1000).required(),
    phoneNumber: Joi.number().min(1).max(100000000000).required()
})

export { validateUser }