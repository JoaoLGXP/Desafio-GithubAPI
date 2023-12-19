import './styles.css';

type Props = {
    text: string
}

export default function Button({ text }: Props) {
    return (
        <button type="submit" className='githubapi-btn'>{text}</button>
    );
}