import { useState } from "react";


const SendSMS = () => {

  const [numbers, setNumbers] = useState('');
    const [message, setMessage] = useState('');

    const handleNumbersChange = (e) => {
        setNumbers(e.target.value);
    };

    const handleMessageChange = (e) => {
        setMessage(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const phoneNumbers = numbers.split(',').map(num => num.trim());

        try {
            await Promise.all(phoneNumbers.map(async (number) => {
                // Replace with your backend API endpoint
                const response = await fetch('/send-sms', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ number, message }),
                });

                if (!response.ok) {
                    throw new Error('Failed to send message');
                }
            }));

            alert('Messages sent successfully!');
        } catch (error) {
            alert(`Error: ${error.message}`);
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
            
            <button type="submit">Send Message</button>
        </form>
        </div>
    );
};

export default SendSMS;