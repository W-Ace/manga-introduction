import { FC } from 'react';

interface IProps {
	show: boolean
}

const DetailDialog: FC<IProps> = ({show}) => {
	if (!show) return <></>
	return (
		<div>11232</div>
	)
}

export default DetailDialog;