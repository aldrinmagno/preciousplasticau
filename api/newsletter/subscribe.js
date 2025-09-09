// Secure newsletter subscription endpoint
export default async function handler(req, res) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { email, firstName, lastName } = req.body;

    // Basic validation
    if (!email || !isValidEmail(email)) {
      return res.status(400).json({ error: 'Valid email address is required' });
    }

    // Rate limiting could be implemented here
    // For now, we'll just process the request

    // Mailchimp API configuration (use environment variables)
    const MAILCHIMP_API_KEY = process.env.MAILCHIMP_API_KEY;
    const MAILCHIMP_LIST_ID = process.env.MAILCHIMP_LIST_ID;
    const MAILCHIMP_SERVER_PREFIX = process.env.MAILCHIMP_SERVER_PREFIX; // e.g., 'us11'

    if (!MAILCHIMP_API_KEY || !MAILCHIMP_LIST_ID || !MAILCHIMP_SERVER_PREFIX) {
      console.error('Missing Mailchimp configuration');
      return res.status(500).json({ error: 'Server configuration error' });
    }

    // Prepare data for Mailchimp
    const memberData = {
      email_address: email,
      status: 'pending', // Double opt-in
      merge_fields: {}
    };

    // Add optional fields if provided
    if (firstName) memberData.merge_fields.FNAME = firstName;
    if (lastName) memberData.merge_fields.LNAME = lastName;

    // Make request to Mailchimp API
    const mailchimpUrl = `https://${MAILCHIMP_SERVER_PREFIX}.api.mailchimp.com/3.0/lists/${MAILCHIMP_LIST_ID}/members`;
    
    const response = await fetch(mailchimpUrl, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${MAILCHIMP_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(memberData)
    });

    const result = await response.json();

    if (response.ok) {
      return res.status(200).json({ 
        message: 'Successfully subscribed! Please check your email to confirm your subscription.' 
      });
    } else {
      // Handle Mailchimp errors
      if (result.title === 'Member Exists') {
        return res.status(400).json({ 
          error: 'This email is already subscribed to our newsletter.' 
        });
      } else if (result.title === 'Invalid Resource') {
        return res.status(400).json({ 
          error: 'Please enter a valid email address.' 
        });
      } else {
        console.error('Mailchimp API error:', result);
        return res.status(500).json({ 
          error: 'Unable to subscribe at this time. Please try again later.' 
        });
      }
    }

  } catch (error) {
    console.error('Newsletter subscription error:', error);
    return res.status(500).json({ 
      error: 'Internal server error. Please try again later.' 
    });
  }
}

// Email validation helper
function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}