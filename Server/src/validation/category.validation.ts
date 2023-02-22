import Joi from "joi";

const validateCategory = Joi.object({
    title: Joi.string().min(1).max(1000).required().messages({
        "any.required": "Title field is required!",
        "string.empty": "Title cannot be an empty field",
        "string.base": "Title should be a type of text",
        "string.min": "Minimum field length 1 characher",
        "string.max": "Maximum field length 1000 characters"
    }),
    image: Joi.string().min(1).max(1000).required().messages({
        "any.required": "Image field is required!",
        "string.empty": "Image cannot be an empty field",
        "string.base": "Image should be a type of URL",
        "string.min": "Minimum field length 1 characher",
        "string.max": "Maximum field length 1000 characters"
    }),
    description: Joi.string().min(1).max(1000).required().messages({
        "any.required": "Description field is required!",
        "string.empty": "Description cannot be an empty field",
        "string.base": "Description should be a type of text",
        "string.min": "Minimum field length 1 characher",
        "string.max": "Maximum field length 1000 characters"
    })
})

export { validateCategory }