import Teaser from './Teaser'
import Feature from './Feature'
import Grid from './Grid'
import Placeholder from './Placeholder'

const Components = {
    'teaser': Teaser,
    'feature': Feature,
    'grid': Grid
}

const Component = ({blok}) => {
    if (typeof Component[blok.Component] !== 'undefined') {
        const Component = Components[blok.Component]
        return <Component blok={blok}/>
    }
    return <Placeholder componentName={blok.component}/>
}

export default Component