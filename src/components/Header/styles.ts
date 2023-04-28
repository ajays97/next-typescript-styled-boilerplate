import styled from 'styled-components';

const defaultColor = '#565660';

export const Header = styled.header`
	position: relative;
	top: 0;
	left: 0;
	width: 100%;
	z-index: 9999;
	height: 50px;
	background: ${defaultColor};
	color: white;
	display: flex;
	align-items: center;
	justify-content: center;
`;
