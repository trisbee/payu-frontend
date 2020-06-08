import Environment from "./enum/Environment";
import getConfig from "next/config";

const { publicRuntimeConfig } = getConfig();

/**
 * load env variable, validate it with enum and return host URL
 */
function getHost(): string
{
    let mode = publicRuntimeConfig.MODE;
    if(null == mode) {
        console.error("Missing specified mode in ENV! Fallback to sandbox.");
        mode = Environment.sandbox;
    }

    mode = mode.toLowerCase();

    if(mode == Environment.sandbox) {
        return Environment.sandbox;
    }

    if(mode == Environment.production){
        return Environment.production;
    }

    console.error("Mode is not specified well in ENV! Fallback to sandbox.");

    return Environment.sandbox;
}

/**
 * return full url for widget
 */
function getScriptUrl(): string
{
    const scriptUrl = "/front/widget/js/payu-bootstrap.js";
    return getHost() + scriptUrl;
}

/**
 * @todo: deside logic based on http accept-language and supported languages enum
 */
function getLanguage(): string
{
    return "cs";
}

export {
    getScriptUrl,
    getLanguage
}