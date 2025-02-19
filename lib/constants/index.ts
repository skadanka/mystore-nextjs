export const APP_NAME = process.env.APP_NAME || "MyStore";
export const APP_VERSION = process.env.APP_VERSION || "1.0.0";
export const APP_DESCRIPTION = process.env.APP_DESCRIPTION || "An eCommerce site";

const currentYear = new Date().getFullYear();
export const APP_COPYRIGHT = process.env.APP_COPYRIGHT || `&copy; ${currentYear} ${APP_NAME} Site. All rights reserved.`;
export const APP_LOGO = process.env.APP_LOGO || "/assets/store-shopper-svgrepo-com.svg";
export const APP_URL = process.env.APP_URL || "http://localhost:3000";

export const LATEST_PRODUCTS_COUNT = Number(process.env.LATEST_PRODUCTS_COUNT) || 5;

export const signInDefaultValues = {
    email: '',
    password: ''
}