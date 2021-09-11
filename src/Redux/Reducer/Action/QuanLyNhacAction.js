import axios from 'axios';

//Xử lý nghiệp vụ lấy dữ liệu về
export const GetData = () => {
    return async dispatch => {
        try {
            const result = await axios({
                url: 'https://api.apify.com/v2/key-value-stores/EJ3Ppyr2t73Ifit64/records/LATEST?fbclid=IwAR1A0tezNg5w8SLVym_HjbXzhb-GG68IcNnrTBySvDP3f89PlttrfzEoS6s',
                method: 'GET',
            })
            console.log({result});
            dispatch({
                type: 'LOAD_DU_LIEU',
                payload: result.data
            })
        }catch(error) {
            console.log({error})
        }
    }
}