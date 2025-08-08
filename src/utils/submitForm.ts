// Centralized form submission handler for webhook
const WEBHOOK_URL = 'https://services.leadconnectorhq.com/hooks/gY1bBiJ3ugTZvAriEmdi/webhook-trigger/d195ce30-ea3a-4574-8e82-b7884b5e3e24';

export interface FormData {
  name: string;
  phone: string;
  email: string;
  zipCode: string;
  serviceType: string;
}

export async function submitFormToWebhook(formData: FormData, source: string): Promise<boolean> {
  try {
    const webhookData = {
      name: formData.name,
      phone: formData.phone,
      email: formData.email,
      zipCode: formData.zipCode,
      serviceType: formData.serviceType || 'Not specified',
      source: source,
      timestamp: new Date().toISOString(),
      website: 'supplysideflooringinstallation.com'
    };

    console.log('Sending to webhook:', webhookData);

    const response = await fetch(WEBHOOK_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(webhookData),
    });

    if (!response.ok) {
      console.error('Webhook response not OK:', response.status);
      return false;
    }

    console.log('Webhook submission successful');
    return true;
  } catch (error) {
    console.error('Error submitting to webhook:', error);
    return false;
  }
}