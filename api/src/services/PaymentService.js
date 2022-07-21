const axios = require("axios");

class PaymentService {
  async createPayment(name, price, unit, img) {
    const url = "https://api.mercadopago.com/checkout/preferences";

      const body = {
//       payer_email: "test_user_46945293@testuser.com",
      items: [
        {
          title: name,
          description: "Dummy description",
          picture_url: img,
          category_id: "category123",
          quantity: parseInt(unit),
          unit_price: parseFloat(price)
        }
      ],
      back_urls: {
        failure: "/failure",
        pending: "/pending",
        success: "/success"
      }
    };

    const payment = await axios.post(url, body, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${"TEST-6173558116885974-050817-63983ffe9c3d8473d5023f9e61ccdcd6-26763240"}`
      }
    });

    return payment.data;
  }

  async createSubscription() {
    const url = "https://api.mercadopago.com/preapproval";

    const body = {
      reason: "Suscripción de ejemplo",
      auto_recurring: {
        frequency: 1,
        frequency_type: "months",
        transaction_amount: 10,
        currency_id: "ARS"
      },
      back_url: "https://google.com.ar",
      payer_email: "test_user_46945293@testuser.com"
    };

    const subscription = await axios.post(url, body, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${"TEST-6173558116885974-050817-63983ffe9c3d8473d5023f9e61ccdcd6-26763240"}`
      }
    });

    return subscription.data;
  }
}

module.exports = PaymentService;