import { useState } from "react";

const SendSMS = () => {

    const [numbers, setNumbers] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Send the numbers and message to the backend
    // ...
  };

    return (
        <div>
            <form onSubmit={handleSubmit}>
      <textarea
        placeholder="Enter phone numbers (separated by commas or newlines)"
        value={numbers}
        onChange={(e) => setNumbers(e.target.value)}
      />
      <textarea
        placeholder="Enter message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button type="submit">Send</button>
    </form>
        </div>
    );
};

export default SendSMS;