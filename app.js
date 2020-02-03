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