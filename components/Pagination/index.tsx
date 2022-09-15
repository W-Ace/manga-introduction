import { FC } from "react"
import styled from 'styled-components';
import { Pagination as MPagination, PaginationProps } from '@mui/material';

interface IProps extends PaginationProps {
  className?: string,
}

const StyledPagination = styled(MPagination)`
  .MuiButtonBase-root:not(.Mui-selected) {
    background-color: white;
  }

  .MuiPaginationItem-ellipsis {
    color: white;
  }
`

const Pagination: FC<IProps> = ({className, ...props}) => {
  return (
    <StyledPagination className={className} {...props} />
  )
}

export default Pagination;