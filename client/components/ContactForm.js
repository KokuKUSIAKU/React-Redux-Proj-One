import React from 'react';

class ContactForm extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <form action="">
                <table>
                    <thead>
                        <tr>
                            <th><h2> Contact</h2> </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <label htmlFor="firstame">Name *</label><br />
                                <input
                                    type="text"
                                    name="firstname"
                                    id="firstname"
                                    placeholder="First Name"
                                    required
                                    className="contact-field" />

                            </td>
                            <td>
                                <label htmlFor="lasttame">LastName *</label><br />
                                <input
                                    type="text"
                                    name="lastname"
                                    id="lastname"
                                    placeholder="Last Name"
                                    required
                                    className="contact-field" />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label htmlFor="email">Email*</label><br />
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    placeholder="Email address"
                                    required
                                    className="contact-field" />
                            </td>
                            <td>
                                <label htmlFor="phone">Phone</label><br />
                                <input
                                    type="text"
                                    name="phone"
                                    id="phone"
                                    placeholder="Phone number"
                                    required
                                    className="contact-field" />
                            </td>
                        </tr>
                        <tr>
                            <td colSpan="2">
                                <label htmlFor="message">Message *</label><br />
                                <textarea id="message" required>
                                </textarea>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </form>
        )
    }
}

export default ContactForm