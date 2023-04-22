import * as Styled from './styles';

export type Props = {
	title: string;
};

export function Header({ title }: Props) {
	return (
		<Styled.Header>
			<p>{title}</p>
		</Styled.Header>
	);
}
