import { ReactNode } from 'react';
import { createGlobalStyle } from 'styled-components';
import 'normalize.css';

const GlobalStyle = createGlobalStyle`

* {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
}

html {
	font-size: 62.5%;
}

body {
	font-family: "Roboto", sans-serif;
	font-size: 1.6rem;
	line-height: 1.5;
	text-rendering: optimizespeed;
    color: black;
}
button{
    outline: none;
    border: none;
    background-color: transparent;
    cursor: pointer;
}


@media (prefers-color-scheme: dark) {
    body {
        background-color: #121212;
        color: white;
    }
} 
`;
type Props = {
	children: ReactNode;
};

const GlobalStyles = ({ children }: Props) => {
	return (
		<>
			<GlobalStyle />
			{children}
		</>
	);
};

export default GlobalStyles;
