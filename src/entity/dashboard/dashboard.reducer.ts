const ACTION_TYPES = {}

const initialState = {}

export type DashboardState = Readonly<typeof initialState>

export default (state = initialState, action: any): DashboardState => {
    switch (action.type) {
        default : {
            return state
        }
    }
}

