
const SendSMS = () => {

 

    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = e.target
        const message = form.message.value
        const numbers = form.numbers.value
        console.log(message,numbers);

        // const phoneNumbers = numbers.split(',').map(num => num.trim());

       

    }

    return (
        <div>
            <form onSubmit={handleSubmit}>

            <input name="numbers" type="text" placeholder="Number" className="input input-bordered w-full max-w-xs" />

            <textarea name="message" className="textarea textarea-bordered" placeholder="Message"></textarea>
            <button className="btn" type="submit">Send Message</button>
        </form>
        </div>
    );
};

export default SendSMS;