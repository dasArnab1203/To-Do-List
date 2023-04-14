import { Refine } from '@refinedev/core';
import {
    notificationProvider,
    ErrorComponent,
    ThemedLayout,
} from '@refinedev/antd';
import routerProvider, { NavigateToResource } from '@refinedev/react-router-v6';
import dataProvider from '@refinedev/simple-rest';

import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';

//import { AntdInferencer } from '@refinedev/inferencer/antd';

import '@refinedev/antd/dist/reset.css';
import { ToDoCreate, ToDoEdit, ToDoList, ToDoShow } from 'pages';

const App: React.FC = () => {
    return (
        <BrowserRouter>
            <Refine
                routerProvider={routerProvider}
                dataProvider={dataProvider('https://api.fake-rest.refine.dev')}
                notificationProvider={notificationProvider}
                resources={[
                    {
                        name: 'landing',
                        list: ToDoList,
                        show: ToDoShow,
                        create: ToDoCreate,
                        edit: ToDoEdit,
                        meta: { canDelete: true },
                    },
                    
                ]}
            >
                <Routes>
                    <Route
                        element={
                            <ThemedLayout>
                                <Outlet />
                            </ThemedLayout>
                        }
                    >
                        <Route index element={<NavigateToResource />} />
                        <Route path="landing">
                            <Route index element={<ToDoList />} />
                            <Route
                                path="show/:id"
                                element={<ToDoShow />}
                            />
                            <Route path="create" element={<ToDoCreate />} />
                            <Route
                                path="edit/:id"
                                element={<ToDoEdit />}
                            />
                        </Route>
                        
                        <Route path="*" element={<ErrorComponent />} />
                    </Route>
                </Routes>
            </Refine>
        </BrowserRouter>
    );
};

export default App;