import React from 'react'

const Table = () => {
    return (
        <div className='m-5'>
            <div className='row'>
                <div className='col btn btn-outline-dark rounded-0'>#</div>
                <div className='col btn btn-outline-dark rounded-0'>Автор</div>
                <div className='col btn btn-outline-dark rounded-0'>Назва</div>
                <div className='col btn btn-outline-dark rounded-0'>Жанр</div>
                <div className='col btn btn-outline-dark rounded-0'>Серія</div>
                <div className='col btn btn-outline-dark rounded-0'>Мова</div>
                <div className='col-3 btn btn-outline-dark rounded-0'>Анотація</div>
                <div className='col btn btn-outline-dark rounded-0'>Титулка</div>
                <div className='col btn btn-outline-dark rounded-0'>Примітка</div>
            </div>
            <div className='row'>
                <div className='col text-center border border-dark text-justify'>1</div>
                <div className='col text-center border border-dark text-justify'>Автор</div>
                <div className='col text-center border border-dark text-justify'>Назва</div>
                <div className='col text-center border border-dark text-justify'>Жанр</div>
                <div className='col text-center border border-dark text-justify'>Серія</div>
                <div className='col text-center border border-dark text-justify'>Мова</div>
                <div className='col-3 text-center border border-dark text-justify'>Анотація Анотація Анотація Анотація Анотація Анотація </div>
                <div className='col text-center border border-dark text-justify'>Титулка</div>
                <div className='col text-center border border-dark text-justify'>Примітка</div>
            </div>
            
        </div>
    )
}

export default Table
