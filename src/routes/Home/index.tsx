import './styles.css';
import Button from '../../components/Button';
import { Link } from 'react-router-dom';


export default function Home() {
    return (
        <main>
            <section id='githubapi-home-section'>
                <div className='githubapi-home-title'>
                    <h1>Desafio Github API</h1>
                    <h3>DevSuperior - Escola de programação</h3>
                </div>
                <Link to='/search-user'>
                    <Button text='Começar' />
                </Link>

            </section>
        </main>
    );
}