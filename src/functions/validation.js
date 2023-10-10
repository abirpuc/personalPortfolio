

export const Validation = (value) =>{
    const error = {};

    //    var mailformat = '/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/';

    if(value.name === ''){
        error.name = 'name field is required!'
    }

    if(value.email === ''){
        error.email = 'email field is require'
    }
    // add another condition

    if(value.phone === ''){
        error.phone = 'phone field is require'
    }else if(value.phone.length != 11){
        error.phone = 'please enter a valid phone number'
    }

    if(value.subject === ''){
        error.subject = 'subject field is require'
    }

    if(value.message === ''){
        error.message = 'type a message '
    }

    return error
}