export const singer = state => state.singer

export const playing = state => state.playing

export const playlist = state => state.playlist

export const sequenceList = state => state.sequenceList

export const currentIndex = state => state.currentIndex

export const currentSong = (state) => {
    return state.playlist[state.currentIndex] || {}
}

export const localList = (state) => state.localList

export const mode = (state) => state.mode