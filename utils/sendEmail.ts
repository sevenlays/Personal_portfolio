import emailjs from 'emailjs-com';

const sendEmail = async (formData: Record<string, unknown>) => {
  const serviceId = 'workwithme';
  const temlateId = 'template_workwithme';
  const userId = 'RAGYksErpZKBw1R2z';

  try {
    const templateParams = {
      from_name: formData.firstname + ' ' + formData.lastname,
      from_email: formData.email,
      from_phone: formData.phone,
      from_service: formData.service,
      message: formData.message,
    };

    const response = await emailjs.send(
      serviceId,
      temlateId,
      templateParams,
      userId
    );

    console.log('Email successfully sent!', response);
    return response;
  } catch (error) {
    console.error('Error sending email:', error);
    throw error;
  }
};

export default sendEmail;
