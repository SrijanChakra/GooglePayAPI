function onGooglePayLoaded(){
    const googlePayClient = 
    new googlePayClient.payments.api.PaymentsClient({
        environment:'TEST'
    });
}

const clientConfiguration = {
    apiVersion:2,
    apiVersionMinor:0,
    allowedPaymentMethods:[cardPaymentMethod]
};

googlePayClient.isReadyToPay(clientConfiguration)

const googlePaymentDataRequest = {
    environment: 'TEST',
    apiVersion: 2,
    apiVersionMinor: 0,
    merchantInfo: {
      // A merchant ID is available after approval by Google.
      // @see {@link https://developers.google.com/pay/api/web/guides/test-and-deploy/integration-checklist}
      // merchantId: '0123456789',
      merchantName: 'Example Merchant'
    },
    allowedPaymentMethods: [{
      type: 'CARD',
      parameters: {
        allowedAuthMethods: ["PAN_ONLY", "CRYPTOGRAM_3DS"],
        allowedCardNetworks: ["AMEX", "DISCOVER", "INTERAC", "JCB", "MASTERCARD", "VISA"]
      },
      tokenizationSpecification: {
        type: 'PAYMENT_GATEWAY',
        // Check with your payment gateway on the parameters to pass.
        // @see {@link https://developers.google.com/pay/api/web/reference/request-objects#gateway}
        parameters: {
          'gateway': 'example',
          'gatewayMerchantId': 'exampleGatewayMerchantId'
        }
      }
    }]
  };
  
  const methodData = [
    {supportedMethods: 'https://google.com/pay', data: googlePaymentDataRequest},
    {supportedMethods: 'basic-card'}
  ];