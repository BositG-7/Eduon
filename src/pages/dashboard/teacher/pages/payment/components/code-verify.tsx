import React, { useState } from 'react';
import { Col, Container, Grid, InputBase, Paper } from '@mantine/core';

const CodeVerify: React.FC = () => {
    const [code, setCode] = useState('');

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();        
    };

    return (
        <Container size="xs" style={{ paddingTop: '2rem' }}>
            <Paper shadow="xs" style={{ maxWidth: 400, margin: '0 auto', padding: '2rem' }}>
                <h1 style={{ textAlign: 'center', marginBottom: '1rem' }}>Verify Code</h1>
                <form onSubmit={handleSubmit}>
                    <Grid>
                        <Col>
                            <InputBase
                                label="Code"
                                placeholder="Enter a code"
                                required
                                type="text"
                                value={code}
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
                        Apply
                    </button>
                </form>
            </Paper>
        </Container>
    );
}

export default CodeVerify;
