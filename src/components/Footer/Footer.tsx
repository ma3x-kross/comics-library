import { Box, Container, Link, Stack, Typography } from '@mui/material'
import Logo from 'assets/marvel_logo.svg'

const Footer = () => {
	const CURRENT_YEAR = new Date().getFullYear()

	return (
		<Box sx={{ my: 4, pt: 4, borderTop: '1px solid #3e3e3e' }}>
			<Container maxWidth='xl'>
				<Stack alignItems='center'>
					<img src={Logo} alt='marvel' width={100} />
					<Typography fontSize='lg' color='primary.contrastText'>
						provided Marvel. © {CURRENT_YEAR} MARVEL
					</Typography>
					<Link href='developer.marvel.com' color='primary.light'>
						developer.marvel.com
					</Link>
				</Stack>
			</Container>
		</Box>
	)
}

export default Footer
