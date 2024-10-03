'use client';

import { signIn, signOut, useSession } from 'next-auth/react';
import { Navbar, Nav, Button, Container } from 'react-bootstrap';
import Image from 'next/image';

const CustomNavbar = () => {
    const { data: session } = useSession();

    const googleLogin = () => {
        signIn('google', { callbackUrl: '/' });
    };

    // {/*  */ }
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="/">My App</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/about">About</Nav.Link>
                    </Nav>
                    {session ? (<div>
                        {session?.user?.image ? (<Image className='me-3' id="userpicture" style={{ borderRadius: '50%' }} unoptimized src={session.user?.image} alt='' title={session.user?.name ? session.user.name : ''} width="30" height="30" />) : ''}
                        <Button variant="outline-danger" onClick={() => signOut()}>
                            <i className="bi bi-box-arrow-right"></i>
                        </Button>
                    </div>

                    ) : (
                        <div className='d-flex'>
                            <Button variant="outline-light" onClick={() => googleLogin()} title='로그인'>
                                <Image
                                    src='https://fonts.gstatic.com/s/i/productlogos/googleg/v6/24px.svg'
                                    alt="google login"
                                    width={24}
                                    height={24}
                                    style={{ cursor: 'pointer' }}
                                />

                            </Button>
                        </div>

                    )}
                </Navbar.Collapse>
            </Container>
        </Navbar >
    );
};

export default CustomNavbar;
