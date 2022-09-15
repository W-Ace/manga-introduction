import { FC, useEffect, useState } from 'react';
import styled from 'styled-components';
import { useQuery, gql } from '@apollo/client';
import DetailDialog from '@/components/DetailDialog';
import Pagination from '@/components/Pagination';
import { useGetAnimateLazyQuery } from '@/graphql/generated';

const StyledHeader = styled.div`
  display: flex;
  align-items: center;
  height: 80px;
  background: #000000;
  padding: 0 20px;
`

const StyledTitle = styled.h1`
  color: #ffffff;
`

const StyledFooter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
`

const StyledCardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 20px 10px;
`

const StyledCard = styled.div`
  flex: 0 1 20%;
  padding: 0 10px;
  cursor: pointer;
  @media (max-width: 768px) {
    flex: 0 1 25%;
  }

  @media (max-width: 568px) {
    flex: 0 1 50%;
  }
`

const StyledCardImage = styled.img`
  width: 100%;
`

const StyledCardName = styled.p`
  text-align: center;
  color: #d3d3d3;
`

const GET_ANIMATE = gql`
  query getAnimate ($id: Int, $page: Int, $perPage: Int, $search: String) {
    Page (page: $page, perPage: $perPage) {
      pageInfo {
        total
        currentPage
        lastPage
        hasNextPage
        perPage
      }
      media (id: $id, search: $search) {
        id
        title {
          native
        }
        coverImage {
          large
        }
        bannerImage
      }
    }
  }
`


const HomeContainer: FC = () => {
  const [isShow, setIsShowDialog] = useState(false);
  const [pagination, setPagination] = useState({
    currentPage: 1,
    perPage: 40
  })

  const handleDialogOpen = () => {
    setIsShowDialog(true)
  }

  const handlePageChange = (_: object, page: number) => {
    setPagination({
      ...pagination,
      currentPage: page,
    })
  }

  const Animate: FC = () => {
    const [getAnimate, { loading, error, data }] = useGetAnimateLazyQuery(
      {
        variables: {
          page: pagination.currentPage,
          perPage: pagination.perPage
        }
      }
    )

    useEffect(() => {
      getAnimate();
    }, [pagination])

    const animateList = data?.Page?.media || [];
  
    if (loading) return <></>;
    
    return (
      <>
        <StyledCardContainer>
          {animateList.map((animate, index) => (
            <StyledCard onClick={handleDialogOpen} key={animate?.id ?? index}>
              <div>
                {animate?.coverImage?.large ? (
                  <>
                    <StyledCardImage src={animate.coverImage.large}></StyledCardImage>
                    <StyledCardName>{animate?.title?.native}</StyledCardName>
                  </>
                ) : (
                  <></>
                )}
              </div>
            </StyledCard>
          ))}
        </StyledCardContainer>
      </>
    )
  }

  return (
    <>
      <StyledHeader>
        <StyledTitle>
          Anime
        </StyledTitle>
      </StyledHeader>
      <Animate/>
      <StyledFooter>
        <Pagination count={10} color='primary' onChange={handlePageChange}/>
      </StyledFooter>
      <DetailDialog show={isShow}/>
    </>
  )
}

export default HomeContainer;