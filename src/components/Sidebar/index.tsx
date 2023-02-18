import React from 'react';
import styled from 'styled-components';
type Props = {};

const Article = styled.article`
	width: 350px;
`;

const Sidebar = (props: Props) => {
	return <Article>Sidebar</Article>;
};

export default Sidebar;
