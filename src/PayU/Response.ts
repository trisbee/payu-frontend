/**
 *  Desired response from PayU, back to the page
 *
 *  see: http://developers.payu.com/en/payu_express.html#payu_express_front_widget
 */
interface Response {
    value: string, // one-time token ("TOK_") - expires after first usage
    maskedCard: string, // masked card number
    tokenType: string, // fixed value (always STANDARD)
    // @ts-ignore
    type: string, // fixed value (always CARD_TOKEN)
}

export default Response;