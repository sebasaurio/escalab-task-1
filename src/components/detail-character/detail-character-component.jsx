import './detail-character-component.css'

const DetailCharacter = ({name, status, gender}) => {
    return (
        <div className='detail'>
            <div className='detail-title'>
                <h3>{name}</h3>
            </div>
            <div className='detail-info'>
                <span>{status}</span>
                <span>{gender}</span>
            </div>
        </div>
    )
}

export default DetailCharacter
