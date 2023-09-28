import { MDBIcon } from 'mdb-react-ui-kit';
import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function AllUsers() {
    const [apiData, setApiData] = useState([]);

    useEffect(() => {
        getDatas();
    }, []);

    const getDatas = async () => {
        try {
            const url = "http://localhost:3004/user";
            const response = await fetch(url);
            const data = await response.json();

            const allUsersList = data.map((val) => (

                (val.id > 0) ?
                    (<tr key={val.id}>
                        <td>{val.id}</td>
                        <td>{val.fname}</td>
                        <td>{val.uname}</td>
                        <td>{val.pw}</td>
                        <td>
                            <button className='btn btn-sm btn-primary'>
                                {/* <Link className='btn btn-sm btn-secondary'> */}
                                <MDBIcon fas icon="edit" />
                                {/* </Link> */}
                            </button>
                            &nbsp;
                            <button className='btn btn-sm btn-danger'>
                                <MDBIcon fas icon="trash" />
                            </button>
                        </td>
                    </tr>) : ''
            ));

            setApiData(allUsersList);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }

    return (
        <>
            <Table className="table table-dark table-striped" >
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>First Name</th>
                        <th>Username</th>
                        <th>Password</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>{apiData}</tbody>
            </Table>
        </>
    );
}
