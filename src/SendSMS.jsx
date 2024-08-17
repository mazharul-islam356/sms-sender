import axios from "axios";

const SendSMS = () => {

 

    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = e.target
        const message = form.message.value;
        const numbers = form.numbers.value;
        const formData = {numbers,message}
        console.log(formData);

  
                                        
    axios.post('http://localhost:5002/submit', formData)
            .then(response => {
                console.log('Response from server:', response.data);
            })
            .catch(error => {
                console.error('There was an error!', error);
            });
       

    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
<h1 className="text-3xl font-bold mb-4">Sms sender!</h1>
            <div className="flex flex-col gap-2 justify-center items-center">
            <input name="numbers" type="text" placeholder="Number" className="input input-bordered w-full max-w-xs" />

<textarea name="message" className="textarea w-80 textarea-bordered" placeholder="Message"></textarea>
            </div>
            <button className="btn btn-info btn-outline mt-2" type="submit">Send Message</button>
        </form>
        </div>
    );
};

export default SendSMS;