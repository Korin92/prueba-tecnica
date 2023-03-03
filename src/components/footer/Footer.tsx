import styled from 'styled-components'

const FooterContainer = styled.footer`
	background-color: #000;
	padding: 24px;
	height: 220px;
`

const FooterLinks = styled.div`
	display: flex;
	flex-direction: column;
	gap: 16px;
	@media (min-width: 640px) {
		flex-direction: row;
		justify-content: space-between;
	}
`

const FooterColumn = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 8px;
	flex: 1;
`

const FooterLink = styled.a`
	color: #fff;
	text-decoration: none;
	font-size: 14px;
	&:hover {
		text-decoration: underline;
	}
`

const Footer = () => {
	return (
		<FooterContainer>
			<FooterLinks>
				<FooterColumn>
					<FooterLink href="#">Link 1</FooterLink>
					<FooterLink href="#">Link 2</FooterLink>
					<FooterLink href="#">Link 3</FooterLink>
					<FooterLink href="#">Link 4</FooterLink>
				</FooterColumn>
				<FooterColumn>
					<FooterLink href="#">Link 5</FooterLink>
					<FooterLink href="#">Link 6</FooterLink>
				</FooterColumn>
				<FooterColumn>
					<FooterLink href="#">Link 7</FooterLink>
				</FooterColumn>
				<FooterColumn>
					<FooterLink href="#">Link 8</FooterLink>
				</FooterColumn>
			</FooterLinks>
		</FooterContainer>
	)
}

export default Footer
