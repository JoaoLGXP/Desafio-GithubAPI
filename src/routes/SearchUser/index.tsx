import { Link, Outlet } from 'react-router-dom';
import Button from '../../components/Button';
import './styles.css';

export default function SearchUser() {
    return (
        <main id='githubapi-searchUser-section'>
            <div className='githubapi-searchUser-card'>
                <h3>Encontre um perfil Github</h3>
                <form >
                    <input type="text" placeholder='Usuário Github' />
                </form>
                <Link to="user">
                    <Button text='Encontrar' />
                </Link>
            </div>
            <Outlet />
        </main>
    );
}