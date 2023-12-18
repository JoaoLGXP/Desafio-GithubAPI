import { Link } from 'react-router-dom';
import './styles.css';

export default function Header() {
    return (
        <header>
            <div>
                <Link to='/home'>
                    <p>Github API</p>
                </Link>
            </div>
        </header>
    )
}