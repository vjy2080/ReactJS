import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function SignupPage() {
    return (
        <div className="container w-50 mt-5 border border-primary rounded">
            <div className="row">
                <div className="col m-5">
                    <h3>Register Here</h3>
                    <Form >
                        <Form.Group className="mb-3" controlId="formBasicName">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="email" placeholder="Enter Name" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>

                        <Button variant="primary" type="submit">
                            Signup
                        </Button>
                    </Form>
                </div>
            </div>
        </div>
    );
}

export default SignupPage;