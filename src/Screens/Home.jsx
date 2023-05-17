import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Home = (props) => {

    const [data, setData] = useState({})
    const phonenumber = props.data

    useEffect(() => {
        if (phonenumber !== "")
            postData();
    }, [phonenumber]);

    const postData = async () => {
        try {
            const response = await axios.post('https://chimpu.xyz/api/post.php', {
                phonenumber,
            });
            console.log(response.data);
            setData(response.data)
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <>
            <div className='body-control'>
                <h1>{data.msg}</h1>
            </div>
        </>
    );
}
export default Home