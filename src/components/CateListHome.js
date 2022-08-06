import {
    Box,
    Typography,
    Grid,
    Divider
} from "@mui/material";
import Link from "@mui/material/Link";
import LoadingPage from "./LoadingPage";
import NewsCard from "./NewsCard";
import { useListNewsCateQuery } from "../apis/getNews";
  
const CateListHome = ({ title, country, pageSize, page, category }) => {
    const {
        data: dataListNewsCate,
        error: errorListNewsCate,
        isLoading: isLoadingListNewsCate,
        isUninitialized: isUninitializedListNewsCate,
    } = useListNewsCateQuery({ country: country, pageSize: pageSize, page: page, category: category });

    return (
    <>
        <Box
            sx={{
                marginRight: "10px",
                marginBottom: "20px",
            }}
        >
            <Link
                color="#000"
                underline="none"
                href={`/list/${category}`}
                title={title}
            >
                <Typography
                    variant="h5"
                    sx={{
                        fontWeight: "bold",
                    }}
                >
                    {title}
                </Typography>
            </Link>
            
            <Divider sx={{
                borderColor: "#E50913",
                borderBottomWidth: 3,
                marginBottom: "10px",
            }}/>
            
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
                </>
            ) : null}
            </Grid>
        </Box>
    </>
    );
};

export default CateListHome;
  