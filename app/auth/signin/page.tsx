// app/auth/signin/page.tsx
import { signIn } from 'next-auth/react';
import { Button, Container } from 'react-bootstrap';

const SignInPage = () => {
    return (
        <Container className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
            <div>
                <h2>Sign In</h2>
                <Button variant="primary" onClick={() => signIn('google')}>
                    Sign in with Google
                </Button>
            </div>
        </Container>
    );
};

export default SignInPage;
