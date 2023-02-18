import styled from 'styled-components';
import Main from '../components/Main';
import Sidebar from '../components/Sidebar';

const Container = styled.div`
	width: 100%;
	height: 100vh;
	max-width: 935px;
	margin-left: auto;
	margin-right: auto;
	padding: 20px;
	display: flex;
`;

const Chat = () => {
	return (
		<Container>
			<Sidebar></Sidebar>
			<Main></Main>
		</Container>
	);
};

export default Chat;
