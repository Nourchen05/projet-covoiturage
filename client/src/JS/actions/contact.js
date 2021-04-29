import{ FAIL_CONTACT} from '../constants/contact'
import axios from 'axios'

export const contactForm =(form)=> async(dispatch)=> {
    try {
        await axios.post('/api/contact',form)
    } catch (error) {
        dispatch({
            type:FAIL_CONTACT,
            payload:error
        })
    }
}
