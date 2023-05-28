import React, {Suspense} from 'react';
import {Route, Routes} from "react-router-dom";
import {routeConfig} from "shared/config/routeConfig";

const AppRouter = () => {
    return (
        <Suspense fallback={<div>Loading... </div>}>
            <div className='page-wrapper'>
                <Routes>
                    {
                        Object.values(routeConfig).map(({element, path}) => (
                            <Route
                                path={path}
                                element={element}
                                key={path}
                            />
                        ))
                    }
                </Routes>
            </div>
        </Suspense>
    );
};

export default AppRouter;