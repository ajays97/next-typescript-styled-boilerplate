import styled from 'styled-components';

export const Header = styled.header`
	position: relative;
	top: 0;
	left: 0;
	width: 100%;
	z-index: 9999;
	height: 50px;
	background: black;
	color: white;
	@include flex(center, center);
`;
