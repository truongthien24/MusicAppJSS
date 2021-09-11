const stateDefault = {
    arrSong: {},
    arrSongVN: [],
    listMusic: []
}

export const QuanLyNhacReducer = (state = stateDefault, action) => {
    switch(action.type) {
        case 'LOAD_DU_LIEU': {
            state.arrSong = action.payload.songs;
            state.arrSongVN = state.arrSong.top100_VN;
            return {...state};
        }
        break;
        case 'ADD_LIST': {
            let newListMusic = state.listMusic;
            newListMusic.push(action.payload);
            state.listMusic = newListMusic;
            console.log('listMusic',state.listMusic);
            return {...state};
        }
        break;
        case 'REMOVE_LIST': {
            let newListMusic = state.listMusic.filter(nhac => nhac !== action.payload);
            state.listMusic = newListMusic;
            console.log('listMusic',state.listMusic);
            return {...state};
        }
        break;
        default: return state;
    }
}