import { Suspense } from 'react';
import Loader from './loader/loader'

// -------------------------------[ LOADABLE - LAZY LOADING ]------------------------------- //

const Loadable = (Component) => (props) =>
(
    <Suspense fallback={<Loader />}>
        <Component {...props} />
    </Suspense>
);

export default Loadable;
