import React, { useState } from 'react';
import { Col, Container, Grid, InputBase, Paper } from '@mantine/core';
import { IMaskInput} from "react-imask"

const PaymentClick: React.FC = () => {
    const [cardNumber, setCardNumber] = useState('');
    const [expiryDate, setExpiryDate] = useState('');

    const handleCardNumberChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target;
        // Remove any non-numeric characters from the input
        const numericValue = value.replace(/\D/g, '');

        if (numericValue.length <= 16) {
            setCardNumber(numericValue);
        }
    };

    const handleExpiryDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target;
        // Remove any non-numeric characters from the input
        const numericValue = value.replace(/\D/g, '');

        if (numericValue.length <= 4) {
            setExpiryDate(numericValue);
        }
    };

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        // Check if cardNumber has 16 digits and expiryDate has 4 digits
        if (cardNumber.length === 16 && expiryDate.length === 4) {
            // Handle payment submission here
            console.log('Payment submitted');
            alert('Payment submitted')

        } else {
            console.log('Invalid card number or expiry date');
            alert('Invalid card number or expiry date')
        }
        console.log("Card number", cardNumber);
        console.log("Expiry date", expiryDate);
    };

    return (
        <Container size="xs" style={{ paddingTop: '2rem' }}>
            <Paper shadow="xs" style={{ maxWidth: 400, margin: '0 auto', padding: '2rem' }}>
                <h1 style={{ textAlign: 'center', marginBottom: '1rem' }}>Payment Details</h1>
                <form onSubmit={handleSubmit}>
                    <Grid>
                        <Col>
                            <InputBase
                                label="Card Number"
                                placeholder="Enter card number"
                                required
                                type="text"
                                value={cardNumber}
                                component={IMaskInput}
                                mask="0000 0000 0000 0000"
                                onChange={handleCardNumberChange}
                                style={{ marginBottom: '1rem' }}
                            />
                        </Col>
                        <Col>
                            <InputBase
                                label="Expiry Date"
                                placeholder="MM/YY"
                                required
                                type="text"
                                component={IMaskInput}
                                mask="00/00"
                                value={expiryDate}
                                onChange={handleExpiryDateChange}
                                style={{ marginBottom: '1rem' }}
                            />
                        </Col>
                    </Grid>
                    <button
                        type="submit"
                        style={{
                            display: 'block',
                            margin: '0 auto',
                            padding: '0.5rem 1rem',
                            background: '#006AFF',
                            color: 'white',
                            border: 'none',
                            borderRadius: '4px',
                            fontSize: '1rem',
                            cursor: 'pointer',
                        }}
                    >
                        Pay Now
                    </button>
                </form>
            </Paper>
        </Container>
    );
}

export default PaymentClick;
