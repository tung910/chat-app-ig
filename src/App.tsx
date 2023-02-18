import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Chat from './chat';
import Login from './login';

const router = createBrowserRouter([
	{
		index: true,
		path: '/login',
		element: <Login />,
	},
	{
		path: '/chat',
		element: <Chat />,
	},
]);
function App() {
	return <RouterProvider router={router} />;
}

export default App;
