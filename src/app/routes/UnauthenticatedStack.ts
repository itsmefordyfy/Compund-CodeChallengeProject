import { Screens } from '../../types'
import { LandingScreen,ProjectionScreen } from '../../screens'

export const UnauthenticatedStack: Screens = [
    {
        name: 'Home',
        component: LandingScreen,
    },
    {
        name: 'Projection',
        component: ProjectionScreen   
    },
]
