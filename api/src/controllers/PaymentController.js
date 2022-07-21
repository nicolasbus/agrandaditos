class PaymentController {
    constructor(subscriptionService) {
      this.subscriptionService = subscriptionService;
    }
  
    async getPaymentLink(req, res) {
        const { name, price, unit, img } = req.body; 
      try {
        const payment = await this.subscriptionService.createPayment(
            name,
            price,
            unit,
            img
        );
  
        return res.json(payment);
      } catch (error) {
        console.log(error);
  
        return res
          .status(500)
          .json({ error: true, msg: "Failed to create payment" });
      }
    }
  
    async getSubscriptionLink(req, res) {
      try {
        const subscription = await this.subscriptionService.createSubscription();
  
        return res.json(subscription);
      } catch (error) {
        console.log(error);
  
        return res
          .status(500)
          .json({ error: true, msg: "Failed to create subscription" });
      }
    }
  }
  
  module.exports = PaymentController;