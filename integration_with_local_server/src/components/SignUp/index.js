import {useState} from 'react';

export default function SignUpForm({onSubmit}) {
    const [data, setData] = useState({
        first_name: '',
        last_name: '',
        email: '',
        city: '',
        birthday: '',
        password: '',
        gender: ''
    });

    const onSubmitForm = async (e) => {
        e.preventDefault();

        if (typeof onSubmit === 'function') {
            await onSubmit(data);

            setData({
                first_name: '',
                last_name: '',
                email: '',
                city: '',
                birthday: '',
                password: '',
                gender: ''
            });
        }
    };

    const onElementChange = ({target: {name, value}}) => {
        setData(state => ({
            ...state,
            [name]: value
        }));
    }

    return (
        <div className={'signup-form'}>
            <form onSubmit={onSubmitForm}>
                <div>
                    <label>User email</label>
                    <input type='email'
                           onChange={onElementChange}
                           name='email'
                           value={data.email}/>
                </div>

                <div>
                    <label>Firstname</label>
                    <input type='text'
                           onChange={onElementChange}
                           name='first_name'
                           value={data.first_name}/>
                </div>

                <div>
                    <label>Lastname</label>
                    <input type='text'
                           onChange={onElementChange}
                           name='last_name'
                           value={data.last_name}/>
                </div>

                <div>
                    <label>Password</label>
                    <input type='password'
                           onChange={onElementChange}
                           name='password'
                           value={data.password}/>
                </div>

                <div>
                    <label>Birthday</label>
                    <input type='date'
                           onChange={onElementChange}
                           name='birthday'
                           value={data.birthday}/>
                </div>

                <div>
                    <label>City</label>
                    <input type='text'
                           onChange={onElementChange}
                           name='city'
                           value={data.city}/>
                </div>

                <div>
                    <label>Gender</label>
                    <select name='gender'
                            value={data.gender}
                            onChange={onElementChange}>
                        <option>Please select your gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                    </select>
                </div>

                <button type='submit'>Create User</button>
            </form>
        </div>
    )
}