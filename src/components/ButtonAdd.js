import React from 'react';
import Button from '@material-ui/core/Button';


function ButtonAdd({variant, color, name}) {
    return (
        <div>
            {/* variant="contained" color="secondary" */}
            <Button className='add-btn' variant='contained' color='secondary' type='submit' > 
                Add task
            </Button>
        </div>
    )
}

export default ButtonAdd
