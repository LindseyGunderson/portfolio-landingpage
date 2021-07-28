import './contact.scss';

export default function Contact() {
    return (
        <div className="contact" id="contact">

            <div className="left">
                <img src="assets/email-contact.svg" />
            </div>

            <div className="right">
                <h2>Contact Me :)</h2>

                <form>
                    <div class="form-inputs"><img src="assets/account.png" /><input type="text" placeholder="Full Name"></input></div>
                    <div class="form-inputs"><img src="assets/email.png" /><input type="text" placeholder="Email"></input></div>
                    <div class="form-inputs"><img src="assets/message.png" /><textarea placeholder="Message"></textarea></div>
                    <button>Send</button>
                </form>
            </div>
            
        </div>
    )
}
