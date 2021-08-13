import './detail-character-component.css'

const DetailCharacter = ({name, status, gender, created, information}) => {
    const createdDate = new Date(created)

    return (
        <div className='detail'>
            <div className='detail-title'>
                <h3>{name}</h3>
            </div>
            <>
                <div className='characteristics-info'>
                    <span>Gender: <strong>{gender}</strong></span>
                    <span>Status: is <strong>{status}</strong></span>
                    <span>Created on: <strong>{createdDate.getDate() + "/" + (createdDate.getMonth() + 1) + "/" + createdDate.getFullYear()}</strong></span>
                </div>
                <p>
                    {information}
                </p>
            </>
        </div>
    )
}

export default DetailCharacter
