import Joi from "joi";



export const registerUserValidationSchema=Joi.object({
    email:Joi.string().required().trim().min(5).max(55).lowercase(),
    password:Joi.string().required().
                trim().
                max(55).
                pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/),
    fullName: Joi.string().required().trim().min(7).max(55),
    location:Joi.string().required().trim().min(2).max(55),
    phoneNumber: Joi.number().required().min(10),
});



export const loginUserValidationSchema= Joi.object({
    email:Joi.string().email().required().trim().lowercase(),
    password:Joi.string().required().trim(),
});


