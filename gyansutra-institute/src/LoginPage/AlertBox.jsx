import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Alert } from 'react-bootstrap'
function AlertBox(props) {
    return (
        <div className="App">
            <Container className='p-4'>
                <Alert variant={props.type}>
                    {props.msg} {""}
                    <Alert.Link href={props.to}>{props.redirect}</Alert.Link>.
                </Alert>
            </Container>
        </div>
    );
}
export default AlertBox;  