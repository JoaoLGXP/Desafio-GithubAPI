import './styles.css';

export default function User() {
    return (
        <main>
            <section id='githubapi-user-section'>
                <div className='githubapi-user-card'>
                    <div className='githubapi-user-img'>Foto</div>
                    <div className='githubapi-user-informations'>
                        <h4>Informações</h4>
                        <div className='githubapi-user-data'>
                            <h5>Perfil: </h5>
                            <a>https://teste.com</a>
                        </div>
                        <div className='githubapi-user-data'>
                            <h5>Seguidores: </h5>
                            <p>100</p>
                        </div>                    
                        <div className='githubapi-user-data'>
                            <h5>Localidade: </h5>
                            <p>teste</p>
                        </div>                    
                        <div className='githubapi-user-data'>
                            <h5>Nome: </h5>
                            <p>teste</p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}