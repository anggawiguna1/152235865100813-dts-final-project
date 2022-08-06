import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Divider from "@mui/material/Divider";
import CircularProgress from "@mui/material/CircularProgress";
import MainFeaturedPost from "../components/MainFeaturedPost";
import CateListHome from "../components/CateListHome";
import { useListNewsAllQuery } from "../apis/getNews";

const Home = () => {
  const {
    data: dataListNews,
    error: errorListNews,
    isLoading: isLoadingListNews,
    isUninitialized: isUninitializedListNews,
  } = useListNewsAllQuery({ country: "id", pageSize: 5, page: 1 });

  return (
      <>  
        <Container maxWidth="lg">
        <main>
          <Divider sx={{ margin: "1.5em 0em" }} />
        {errorListNews ? (
          <>Oh no, there was an error : {errorListNews.message}</>
        ) : isUninitializedListNews ? (
          <>Oh no, it's Uninitialized : dataListNews</>
        ) : isLoadingListNews ? (
          <Box
            sx={{
              marginTop: "100px",
              marginBottom: "50px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flex: "1",
            }}
          >
            <CircularProgress color="primary" />
          </Box>
        ) : dataListNews ? (
          <>
            <Box sx={{
              marginTop: "50px",
             }}
            >
              <MainFeaturedPost posts={dataListNews.articles} />
            </Box>
          </>
        ) : null}
          <Grid container spacing={2} sx={{
            marginTop: "3px",
          }}>
            <Grid item xs={12} md={12}>
              <CateListHome title="Bisnis" country="id" category="business" pageSize="6" page="1" />
              <CateListHome title="Olahraga" country="id" category="sports" pageSize="6" page="1" />
              <CateListHome title="Teknologi" country="id" category="technology" pageSize="6" page="1" />
              <CateListHome title="Ilmu Pengetahuan" country="id" category="science" pageSize="6" page="1" />
              <CateListHome title="Kesehatan" country="id" category="health" pageSize="6" page="1" />
            </Grid>
          </Grid>
          <Divider sx={{ margin: "1.5em 0em" }} />
        </main>
        </Container>
      </>
  )
}

export default Home;