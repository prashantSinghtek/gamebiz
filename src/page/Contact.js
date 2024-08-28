import React, { useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        company_name: '',
        website: '',
        email: '',
        phone_number: '',
        message: '',
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
        setErrors({
            ...errors,
            [name]: '',
        });
    };
    const validate = () => {
        const newErrors = {};

        if (!formData.name) newErrors.name = 'Name is required';
        if (!formData.company_name) newErrors.company_name = 'Company name is required';
        if (!formData.website) {
            newErrors.website = 'Website website is required';
        } else if (!/\.[\w.-]+/.test(formData.website)) {
            newErrors.website = 'Invalid website format';
        }
        if (!formData.email) {
            newErrors.email = 'Email is required';
        } else if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(formData.email)) {
            newErrors.email = 'Invalid email format';
        }
        if (!formData.phone_number) {
            newErrors.phone_number = 'phone number number is required';
        } else if (!/^[6-9]\d{9}$/.test(formData.phone_number)) {
            newErrors.phone_number = 'Invalid phone number number (should start with 6-9 and be 10 digits)';
        }
        if (!formData.message) newErrors.message = 'Message is required';

        setErrors(newErrors);

        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (validate()) {
            try {
                const response = await fetch('https://liveuat.com:5439/api/enquiry', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(formData),
                });


                if (response) {
                    const data = await response.json();
                    console.log('Form submitted successfully:', data);
                    if (data.success) {
                        toast.success('Form submitted successfully!', {

                        });
                    }
                } else {
                    console.error('Error submitting form:', response.statusText);
                }
            } catch (error) {
                console.error('Error submitting form:', error);
            }

            setFormData({
                name: '',
                company_name: '',
                website: '',
                email: '',
                phone_number: '',
                message: '',
            });
            setErrors({});
        } else {
            console.log('Validation failed');
        }
    };

    return (
        <div>
            <section className="Registration">
                <div className="container">
                    <div className="logoimg" style={{ textAlign: 'center' }}>
                        {/* <img src="img/logo.png" style={{ marginBottom: 10 }} alt="Logo" /> */}
                    </div>
                    <form className="form-wrapper" id="myform" method="post" onSubmit={handleSubmit}>
                        <p className="regi-heading">Enquiry with us</p>
                        <div className="input-wrapper">
                            <div className="mb-3 input-width">
                                <label htmlFor="name" className="form-label label-text">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Enter Name"
                                    className="form-control input-btn"
                                    id="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                />
                                {errors.name && <small className="text-danger">{errors.name}</small>}
                            </div>
                            <div className="mb-3 input-width">
                                <label htmlFor="company_name" className="form-label label-text">
                                    Company name
                                </label>
                                <input
                                    type="text"
                                    name="company_name"
                                    placeholder="Enter Company Name"
                                    className="form-control input-btn"
                                    id="company_name"
                                    value={formData.company_name}
                                    onChange={handleChange}
                                />
                                {errors.company_name && <small className="text-danger">{errors.company_name}</small>}
                            </div>
                            <div className="mb-3 input-width">
                                <label htmlFor="website" className="form-label label-text">
                                    Website 
                                </label>
                                <input
                                    type="text"
                                    name="website"
                                    placeholder="Enter Website website"
                                    className="form-control input-btn"
                                    id="website"
                                    value={formData.website}
                                    onChange={handleChange}
                                />
                                {errors.website && <small className="text-danger">{errors.website}</small>}
                            </div>
                            <div className="mb-3 input-width">
                                <label htmlFor="email" className="form-label label-text">
                                    Email
                                </label>
                                <input
                                    type="text"
                                    name="email"
                                    placeholder="Enter Email"
                                    className="form-control input-btn"
                                    id="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                />
                                {errors.email && <small className="text-danger">{errors.email}</small>}
                            </div>
                            <div className="mb-3 input-width">
                                <label htmlFor="phone_number" className="form-label label-text">
                                    phone number
                                </label>
                                <input
                                    type="number"
                                    name="phone_number"
                                    placeholder="Enter phone_number Number"
                                    className="form-control input-btn"
                                    id="phone_number"
                                    value={formData.phone_number}
                                    onChange={handleChange}
                                />
                                {errors.phone_number && <small className="text-danger">{errors.phone_number}</small>}
                            </div>
                            <div className="mb-3 input-width w-100">
                                <label htmlFor="message" className="form-label label-text">
                                    Message
                                </label>
                                <textarea
                                    placeholder="Message"
                                    name="message"
                                    className="form-control"
                                    id="message"
                                    rows={3}
                                    value={formData.message}
                                    onChange={handleChange}
                                />
                                {errors.message && <small className="text-danger">{errors.message}</small>}
                            </div>
                        </div>
                        <div className="text-center mx-auto">
                            <button type="submit" className="Submit-btn" name="submit">
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </section>
        </div>
    );
}

export default Contact;
