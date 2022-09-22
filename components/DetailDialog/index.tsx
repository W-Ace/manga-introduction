import { FC } from 'react';
import styled from 'styled-components';
import SVG from '@/components/SVG'
import { Rating } from '@mui/material'

const DialogWrapper = styled.div`
	position: fixed;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	background-color: rgb(0 0 0 / 50%);
	z-index: 2000;
`

const CloseButton = styled.div`
	display: inline-block;
	background-color: #cccccc;
	border-radius: 100rem;
	margin: 20px;
	cursor: pointer;
`

const BannerImage = styled.img`
	width: 100%;
	height: auto;
`

const Dialog = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	position: absolute;
	top: 0;
	left: 0;
	bottom: 0;
	right: 0;
	margin: auto;
	width: 80%;
`

const DialogHeader = styled.div`
	width: 100%;
`

const DialogBody = styled.div`
	display: flex;
	width: 100%;
	min-height: 300px;
	background: black;
	padding: 5px 0 25px;


	@media (max-width: 568px) {
    flex-direction: column;
  }
`

const StyledDescription = styled.div`
	flex: 1 1 0%;
	padding: 0 20px;
`

const StyledScore = styled.div`
	display: flex;
	flex-direction: column;
	flex: 0 1 30%;
`

const StyledTitle = styled.div`
	text-align: center;
	color: #b3b3b3;
	padding: 10px 0;
`

const StyledScoreBody = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	flex: 1 1 0%;
`

const StyledScoreText = styled.div`
	margin-bottom: 15px;
	font-size: 60px;
	color: #de8f78;
`

const StyledDescriptionText = styled.p`
	max-height: 150px;
	overflow: auto;
	margin: 0;
	padding: 20px 0;
`

interface IProps {
	show: boolean
	bannerImage: string,
	meanScore: number,
	description: string,
	onClose: () => void
}

const DetailDialog: FC<IProps> = ({show, bannerImage, meanScore, description, onClose}) => {
	const getStar = (score: number): number => Number((score / 20).toFixed(1))
	if (!show) return <></>
	return (
		<DialogWrapper>
			<Dialog>
				<DialogHeader>
					<BannerImage src={bannerImage} alt="bannerImage" />
				</DialogHeader>
				<DialogBody>
					<StyledDescription>
						<StyledTitle>
							{`〖 簡介 〗`}
						</StyledTitle>
						<StyledDescriptionText>
							{description}
						</StyledDescriptionText>
					</StyledDescription>
					<StyledScore>
						<StyledTitle>
							{`〖 評分 〗`}
						</StyledTitle>
						<StyledScoreBody>
							<StyledScoreText>{meanScore}</StyledScoreText>
							<Rating name="read-only" value={getStar(meanScore)} precision={0.1} readOnly />
						</StyledScoreBody>
					</StyledScore>
				</DialogBody>
			</Dialog>
			<CloseButton onClick={onClose}>
				<SVG src="/close.svg"></SVG>
			</CloseButton>
		</DialogWrapper>
	)
}

export default DetailDialog;