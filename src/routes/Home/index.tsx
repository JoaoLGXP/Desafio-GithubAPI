import './styles.css';
import Button from '../../components/Button';


export default function Home() {
    return (
            <main>
                <section id='githubapi-home-section'>
                    <div className='githubapi-home-title'>
                        <h1>Desafio Github API</h1>
                        <h3>DevSuperior - Escola de programação</h3>
                    </div>
                    <Button text='Começar' />
                </section>
            </main>
    );
}