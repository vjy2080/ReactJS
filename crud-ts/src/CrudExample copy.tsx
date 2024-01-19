import React, { useState, useEffect } from 'react';
import { MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';

const CrudExample = () => {

    type dataArrayProps = {
        title: string,
        description: string,
        id: string
    }

    const [title, setTitle] = useState('');
    const [desc, setDesc] = useState('');
    const [isUpdate, setIsUpdate] = useState(false);
    const [data, setData] = useState<dataArrayProps[]>([]);
    const [updateId, setUpdateId] = useState('');
    const baseUrl: string = "http://localhost:3004/posts"

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response :Response = await fetch(baseUrl);
            const jsonData = await response.json();
            setData(jsonData);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    const addHandle = async () => {
        console.log();

        if (title && desc) {
            try {
                const response = await fetch(baseUrl, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        title: title, description: desc

                    }),
                });
                if (response.ok) {
                    fetchData();
                    setTitle('');
                    setDesc('');
                } else {
                    console.error('Failed to add data');
                }
            } catch (error) {
                console.error('Error adding data:', error);
            }
        }
    };

    // type selectedItemProps = {

    // }

    const updateHandle = (id:string) => {
        console.log(id);
        const selectedItem: dataArrayProps | undefined = data.find((item) => item.id === id);
        console.log(selectedItem);
        if (selectedItem !== undefined) {
            setTitle(selectedItem.title);
            setDesc(selectedItem.description);
            setUpdateId(id)
            setIsUpdate(true);
        }
    };

    const updateDataHandle  = async (): Promise<void> => {
        console.log(title, desc);
        console.log('updateId', updateId);

        if (title && desc) {
            try {
                const response = await fetch(`${baseUrl}/${updateId}`, {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ title: title, description: desc }),
                });

                if (response.ok) {
                    fetchData();
                    setTitle('');
                    setDesc('');
                    console.log('Data Updated');
                } else {
                    console.error('Failed to update data');
                }
                setIsUpdate(false);

            } catch (error) {
                console.error('Error updating data:', error);
            }
        }
    };

    const deleteHandle = async (id:string) : Promise<void> => {

        console.log(id);
        console.log(data);

        try {
            console.log('called delete', id);
            const response = await fetch(baseUrl + "/" + id, {
                method: 'delete'
            });
            // console.log(response.json)

            if (response.ok) {
                fetchData();
            } else {
                console.error('Failed to delete data');
            }
        } catch (error) {
            console.error('Error deleting data:', error);
        }
    };

    return (
        <div className="container border border-info rounded p-3 mt-5">
            <MDBTable>
                <MDBTableHead>
                    <tr>
                        <th>Title</th>
                        <th>Description</th>
                        <th>Action</th>
                    </tr>
                </MDBTableHead>
                <MDBTableBody>
                    <tr>
                        <td>
                            <input
                                autoFocus
                                type="text"
                                placeholder="Add title here"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                            />
                        </td>
                        <td>
                            <input
                                type="text"
                                placeholder="Add description here"
                                value={desc}
                                onChange={(e) => setDesc(e.target.value)}
                            />
                        </td>
                        <td>
                            {isUpdate ? (
                                <button onClick={() => updateDataHandle()}>Update</button>
                            ) : (
                                <button onClick={() => addHandle()}>Add</button>
                            )}
                        </td>
                    </tr>
                    {data.map((item, index) => (
                        <tr key={index}>
                            <td>{item.title}</td>
                            <td>{item.description}</td>
                            <td>
                                <button onClick={() => updateHandle(item.id)}>Edit</button>
                                &nbsp;
                                <button onClick={() => deleteHandle(item.id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </MDBTableBody>
            </MDBTable>
        </div>
    );
};

export default CrudExample;
