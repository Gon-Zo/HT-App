const ACTION_TYPES = {}

const initialState = {}

export type AreaState = Readonly<typeof initialState>

export default (state = initialState, action: any): AreaState => {
    switch (action.type) {
        default : {
            return state
        }
    }
}

