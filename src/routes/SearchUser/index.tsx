/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import Button from '../../components/Button';
import './styles.css';
import { useEffect, useState } from 'react';
import { UserDTO } from '../../models/user';
import axios from 'axios';
import UserCard from '../../components/UserCard';
import NotFound from '../../components/NotFound';

type FormData = {
    user: string;
}

export default function SearchUser() {

    const url = "https://api.github.com/users/"

    const [formData, setFormData] = useState<FormData>({
        user: ''
    });

    const [conditions, setConditions] = useState({
        showResponse: false,
        noContent: false
    });

    const [click, setClick] = useState(0);

    const [profile, setProfile] = useState<UserDTO>({
        imgUrl: '',
        followers: 0,
        location: '',
        name: '',
        profile: ''
    });

    function handleImputChange(event: any) {
        const value = event.target.value;
        const name = event.target.name;
        setFormData({ ...formData, [name]: value })
    }

    function handleSubmit(event: any) {
        event.preventDefault();
        setClick(click + 1);
        formData.user === ''
            ? setConditions({ ...conditions, showResponse: false })
            : setConditions({ ...conditions, showResponse: true })
    }

    useEffect(() => {
        if (formData.user != '')
            axios.get(url + formData.user)
                .then(response => {
                    setConditions({ ...conditions, noContent: false });
                    setProfile({
                        imgUrl: response.data.avatar_url,
                        followers: Number(response.data.followers),
                        location: response.data.location,
                        name: response.data.name,
                        profile: response.data.url
                    });
                }).catch(() => setConditions({ ...conditions, noContent: true }));
    }, [click]);

    return (
        <main>
            <section id='githubapi-searchUser-section'>
                <div className='githubapi-searchUser-card'>
                    <h3>Encontre um perfil Github</h3>
                    <form onSubmit={handleSubmit}>
                        <input
                            name='user'
                            value={formData.user}
                            type="text"
                            placeholder='Usuário Github'
                            onChange={handleImputChange}
                        />
                        <div>
                            <Button text='Encontrar' />
                        </div>
                    </form>

                </div>
            </section>
            <section>
                {
                    !conditions.showResponse
                        ? (<></>)
                        : conditions.noContent
                            ? (<NotFound />)
                            : (<UserCard user={profile} />)
                }
            </section>
        </main>
    );
}