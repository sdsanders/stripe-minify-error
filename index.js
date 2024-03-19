import Stripe from 'stripe';
const stripe = new Stripe();

const main = async () => {
  try {
    await stripe.paymentIntents.create({
      amount: 1099,
      currency: 'usd',
      payment_method_types: ['card'],
    });
  } catch (error) {
    console.error('error.type', error.type);
    console.log(
      'is StripeAuthenticationError',
      error.type === 'StripeAuthenticationError'
    );
  }
};

main();
