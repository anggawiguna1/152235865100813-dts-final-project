import { useState } from "react";
import {
    Box,
    Grid,
    Divider,
    Container
} from "@mui/material";
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import LoadingPage from "../components/LoadingPage";
import NewsCard from "../components/NewsCard";
import { useListNewsCateQuery } from "../apis/getNews";
import { useNavigate, useParams } from "react-router-dom";

const CateNews = () => {
    const navigate = useNavigate();
    let { cateId } = useParams();
    const [country, setCountry] = useState('id');
    const [pageSize, setPageSize] = useState(15);
    const [page, setPage] = useState(1);

    const {
        data: dataListNewsCate,
        error: errorListNewsCate,
        isLoading: isLoadingListNewsCate,
        isUninitialized: isUninitializedListNewsCate,
    } = useListNewsCateQuery({ country: country, pageSize: pageSize, page: page, category: cateId });

    return (
        <>  
            <Container maxWidth="lg">
                <main>
                    <Divider sx={{ margin: "1.5em 0em" }} />
                    <Box sx={{
                        marginTop: "50px",
                        }}
                    >
                        <Grid container spacing={4}>
                            {errorListNewsCate ? (
                            <>Oh no, there was an error : dataListNewsCate</>
                            ) : isUninitializedListNewsCate ? (
                            <>Oh no, it's Uninitialized : dataListNewsCate</>
                            ) : isLoadingListNewsCate ? (
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
                                    <LoadingPage />
                                </Box>
                            ) : dataListNewsCate ? (
                                <>
                                    {dataListNewsCate.articles.map((r, index) => (
                                        <NewsCard key={index} title={r.title} author={r.author} description={r.description} url={r.url} urlToImage={r.urlToImage} publishedAt={r.publishedAt} content={r.content}/>
                                    ))}

                                    <Box 
                                        sx={{
                                            marginTop: "20px",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            display: "flex",
                                        }}
                                    >
                                        <Stack spacing={2} >
                                            <Pagination count={10} variant="outlined" shape="rounded" />
                                        </Stack>
                                    </Box>
                                </>
                            ) : null}
                        </Grid>
                     </Box>
                    <Divider sx={{ margin: "1.5em 0em" }} />
                </main>
            </Container>
        </>
    )
}

export default CateNews;