import React from 'react';
import Name from './Name';
import ContactForm from './ContactForm';


class Footer extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <footer className="footer border-box-item">
                <div className="footer-about-wrap border-box-item">
                    <div className="footer-about footer-item-align border-box-item">
                        <h2>About</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vitae hendrerit libero. Pellentesque habitant morbi tristique senectus et netus et</p>
                        <Name />
                    </div>
                    </div>   
                    <div className="footer-contact-wrap border-box-item">
                    <div className="footer-contact-form footer-item-align border-box-item">
                        <ContactForm></ContactForm>
                    </div>

                </div>
            </footer>

        )
    }
}

export default Footer; 