import { FC, useState } from 'react';
import styled from 'styled-components';
import { useQuery, gql } from '@apollo/client';
import DetailDialog from '@/components/DetailDialog';
import { useGetAnimateQuery } from '@/graphql/generated';

interface IAnimate {
  id: number,
  title: {
    native: string
  },
  coverImage: {
    large: string
  },
  bannerImage: string
}

const Container = styled.div`
  text-align: center;
`

const Header = styled.div`
  display: flex;
  align-items: center;
  height: 80px;
  background: #000000;
  padding: 0 20px;
`

const Title = styled.h1`
  color: #ffffff;
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

  const handleDialogOpen = () => {
    setIsShowDialog(true)
  }

  const Animate: FC = () => {
    const { loading, error, data } = useGetAnimateQuery(
      {
        variables: {
          page: 1,
          perPage: 40
        }
      }
    )
  
    const animateList = data?.Page?.media;
  
    if (loading) return <></>;
  
    return (
      <>
        <StyledCardContainer>
          {animateList.map((animate) => (
            <StyledCard onClick={handleDialogOpen}>
              <div>
                <StyledCardImage src={animate?.coverImage?.large}></StyledCardImage>
                <StyledCardName>{animate?.title?.native}</StyledCardName>
              </div>
            </StyledCard>
          ))}
        </StyledCardContainer>
      </>
    )
  }

  return (
    <>
      <Header>
        <Title>
          Anime
        </Title>
      </Header>
      <Animate/>
      <DetailDialog show={isShow}/>
    </>
  )
}

export default HomeContainer;