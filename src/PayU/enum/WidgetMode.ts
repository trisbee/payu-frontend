/**
 *
 * Configures widget buttons.
 *
 * "Pay" mode assumes payment to happen immediately after the widget is used.
 * "Use" mode allows to capture card data without immediate payment.
 *
 *  see: http://developers.payu.com/en/payu_express.html#payu_express_widget
 */
enum WidgetMode {
    pay,
    use
}

export default WidgetMode;