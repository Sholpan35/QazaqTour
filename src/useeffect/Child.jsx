import { useEffect, useState } from "react";
import axios from 'axios';

function Child() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [response, setResponse] = useState('');
    const [data, setData] = useState([]);
    const [button, setButton] = useState('Derekter alu');
    const [button2, setButton2] = useState('Zhiberu')

    function send() {
        
        setButton2('Zhiberilude')
        setTimeout(()=> {
        axios.post('https://683ffb195b39a8039a5658ce.mockapi.io/users', {
            email: email,
            password: password
        })
        .then(res => setResponse('Өтінім жіберілді ' + res.data.id));
        setButton2('Zhiberildi')
    },2000)
    }
   
    function get_data() {

        setButton('Derekter alynuda');
        setTimeout(() => {
            
        axios.get('https://683ffb195b39a8039a5658ce.mockapi.io/users')
        .then(res => setData(res.data));

        setButton('Derekter alindy');
  
        }, 2000);
    }


    useEffect(() => {
        console.log("Жауап:", response);
    }, [response]);

    useEffect(() => {
        console.log("Компонент орнатылды");
        return () => {
            console.log("Компонент жойылды");
        };
    }, []);


    return (
        <div>
            <input type="email" onChange={(e) => setEmail(e.target.value)} />
            <input type="password" onChange={(e) => setPassword(e.target.value)} />
            <button onClick={send}>{button2}</button>
            {response}
            <button onClick={get_data}>{button}</button>

            {data.map((n) => {
                return (
                    <div>
                        <p>{n.name}</p>
                        <p>{n.email}</p>
                        <p>{n.username}</p>
                        <p>{n.phone}</p>
                        <p>{n.password}</p>
                        <p>{n.confirm_password}</p>
                    </div>
                );
            })}
        </div>
    );
}

export default Child;