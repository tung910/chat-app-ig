import styled from 'styled-components';

const MainStyled = styled.main`
	flex: 1 1 1 auto;
	display: flex;
	justify-content: center;
	align-items: center;
`;
const Container = styled.div``;
const EmptyPeople = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 6px;
	p {
		color: rgb(168, 168, 168);
	}
`;

type Props = {};

const Main = (props: Props) => {
	return (
		<MainStyled>
			<Container>
				<EmptyPeople>
					<svg
						aria-label='Direct'
						color='rgb(245, 245, 245)'
						fill='rgb(245, 245, 245)'
						height='96'
						role='img'
						viewBox='0 0 96 96'
						width='96'
					>
						<circle
							cx='48'
							cy='48'
							fill='none'
							r='47'
							stroke='currentColor'
							strokeLinecap='round'
							strokeLinejoin='round'
							stroke-width='2'
						></circle>
						<line
							fill='none'
							stroke='currentColor'
							strokeLinejoin='round'
							strokeWidth='2'
							x1='69.286'
							x2='41.447'
							y1='33.21'
							y2='48.804'
						></line>
						<polygon
							fill='none'
							points='47.254 73.123 71.376 31.998 24.546 32.002 41.448 48.805 47.254 73.123'
							stroke='currentColor'
							stroke-linejoin='round'
							stroke-width='2'
						></polygon>
					</svg>
					<h2>Your Messages</h2>
					<p>Send private photos and messages to a friend or group.</p>
					<button>Send Message</button>
				</EmptyPeople>
			</Container>
		</MainStyled>
	);
};

export default Main;
