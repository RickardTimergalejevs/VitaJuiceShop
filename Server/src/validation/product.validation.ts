import Joi from "joi"

const validateProduct = Joi.object({
    title: Joi.string().min(1).max(1000).required(),
    image: Joi.string().min(1).max(1000).required(),
    volume: Joi.number().min(1).max(1000).required(),
    ingredients: {
        ingr1: Joi.string().min(1).max(1000).required(),
        ingr2: Joi.string().min(1).max(1000),
        ingr3: Joi.string().min(1).max(1000),
        ingr4: Joi.string().min(1).max(1000),
        ingr5: Joi.string().min(1).max(1000),
    },
    nutritionalValue: {
        protein: Joi.number().min(1).max(1000).required(),
        carbohydrates: Joi.number().min(1).max(1000).required(),
        fat: Joi.number().min(1).max(1000).required()
    },
    shelfLife: Joi.number().min(1).max(1000).required(),
    storageConditions: Joi.string().min(1).max(1000).required(),
    price: Joi.number().min(1).max(1000).required(),
    category: Joi.string().min(1).max(1000).required()
})

export { validateProduct }