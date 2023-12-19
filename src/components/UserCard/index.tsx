import { UserDTO } from '../../models/user';
import './styles.css';

type Props = {
    user: UserDTO;
}

export default function UserCard({ user }: Props) {
    return (
        <main>
            <section id='githubapi-user-section'>
                <div className='githubapi-user-card'>
                    <div className='githubapi-user-img'>
                        <img src={user.imgUrl} alt={user.name} />
                    </div>
                    <div className='githubapi-user-informations'>
                        <h4>Informações</h4>
                        <div className='githubapi-user-data'>
                            <h5>Perfil: </h5>
                            <a>{user.profile}</a>
                        </div>
                        <div className='githubapi-user-data'>
                            <h5>Seguidores: </h5>
                            <p>{user.followers}</p>
                        </div>
                        <div className='githubapi-user-data'>
                            <h5>Localidade: </h5>
                            <p>{user.location}</p>
                        </div>
                        <div className='githubapi-user-data'>
                            <h5>Nome: </h5>
                            <p>{user.name}</p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}