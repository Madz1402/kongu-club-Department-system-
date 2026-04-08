import React, { useEffect } from 'react';

const ContactUs = () => {
    useEffect(() => {
        // Dynamically load the Visme form script
        const script = document.createElement('script');
        script.src = 'https://static-bundles.visme.co/forms/vismeforms-embed.js';
        script.async = true;
        document.body.appendChild(script);

        // Cleanup the script on component unmount
        return () => {
            document.body.removeChild(script);
        };
    }, []);

    return (
        <div>
            <header style={styles.header}>
                <h1 style={styles.headerText}>Contact Us</h1> {/* Large and bold header */}
            </header>

            <section style={styles.section}>
                <h2 style={styles.subtitle}>We'd love to hear from you!</h2>
                <p style={styles.paragraph}>Please fill out the form below and we'll get back to you as soon as possible.</p>

                {/* Visme form embed */}
                <div
                    className="visme_d"
                    data-title="Contact Us Contact Form"
                    data-url="q6yd0ymq-untitled-project"
                    data-domain="forms"
                    data-full-page="false"
                    data-min-height="500px"
                    data-form-id="111137"
                ></div>
            </section>

            <footer style={styles.footer}>
                <p>&copy; 2025 Kongu Engineering College</p> {/* Updated company name */}
            </footer>
        </div>
    );
};

const styles = {
    header: {
        backgroundColor: '#333',
        color: 'white',
        textAlign: 'center',
        padding: '1rem',
    },
    headerText: {
        fontSize: '3rem',  // Large text size
        fontWeight: 'bold',  // Bold text
    },
    section: {
        padding: '2rem',
        backgroundColor: 'rgb(33, 33, 105)',  // Updated background color to rgb(33, 33, 105)
        margin: '2rem auto',
        maxWidth: '800px',
        borderRadius: '8px',
        boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
    },
    subtitle: {
        fontSize: '1.5rem',
        fontWeight: 'normal',
        marginBottom: '1rem',
        color: 'white',  // White text for contrast
    },
    paragraph: {
        fontSize: '1rem',
        lineHeight: '1.5',
        color: 'white',  // White text for readability on dark background
    },
    footer: {
        textAlign: 'center',
        padding: '1rem',
        backgroundColor: '#333',
        color: 'white',
        position: 'fixed',
        width: '100%',
        bottom: 0,
    },
};

export default ContactUs;
