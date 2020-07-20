import { Mode, ModeHosts } from "./enum/Mode";
import getConfig from "next/config";

const { publicRuntimeConfig } = getConfig();

/**
 * load env variable, validate it with enum and return host URL
 */
function getHost(): Mode
{
    let mode = publicRuntimeConfig.MERCHANT_MODE;
    if(null == mode) {
        console.error("Missing specified mode in ENV! Fallback to sandbox.");
        return Mode.sandbox;
    }

    mode = mode.toLowerCase();

    if(mode == Mode.sandbox) {
        return Mode.sandbox;
    }

    if(mode == Mode.production){
        return Mode.production;
    }

    console.error("Mode is not specified well in ENV! Fallback to sandbox.");

    return Mode.sandbox;
}

/**
 * return full url for widget
 */
function getScriptUrl(): string
{
    const scriptUrl = "/front/widget/js/payu-bootstrap.js";
    const hostUrl = ModeHosts[getHost()];

    return `${hostUrl}${scriptUrl}`;
}

/**
 * @todo: deside logic based on http accept-language and supported languages enum
 */
function getLanguage(): string
{
    return "en";
}

export {
    getScriptUrl,
    getLanguage
}