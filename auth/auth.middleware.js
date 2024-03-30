import { User } from "../user/user.model.js";
import jwt from "jsonwebtoken";

// Middleware to verify user authentication using JWT tokens
export const isUser = async (req, res, next) => {
    try {
        // Extract token from the Authorization header
        const authorization = req.headers.authorization;
        if (!authorization) {
            throw new Error("Unauthorized");
        }

        // Verify and decode the JWT token
        const token = authorization.split(" ")[1];
        const userData = jwt.verify(token, process.env.JWT_ACCESS_TOKEN_SECRET_KEY);

        // Find user from email extracted from token payload
        const user = await User.findOne({ email: userData.email });
        if (!user) {
            throw new Error("Unauthorized");
        }

        // Attach user information to the request object
        req.userInfo = user;
        next();
    } catch (error) {
        // Return 401 Unauthorized if token is invalid or user is not found
        return res.status(401).send({ message: "Unauthorized" });
    }
};
