import React from 'react';

const Notification = ({message, type}) => {

    if (message === null) {

        return null;

    }

    if (type === 'good') {

        return (

            <div className='success'>
                {message}
            </div>
    
        )

    }

    return (

        <div className='error'>
            {message}
        </div>

    )

}

export default Notification;