import {
    Typography,
    Card,
    CardContent,
    CardActions,
    Grid,
    CardMedia,
} from "@mui/material";
import { formatDistanceStrict } from "date-fns";
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import Link from "@mui/material/Link";
  
const NewsCard = ({ title, author, description, url, urlToImage, publishedAt, content }) => {
    return (
    <>
        <Grid item xs={12} md={4}>
            <Card>
                 <Link
                    underline="none"
                    href={url || "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <CardMedia
                        image={urlToImage}
                        title={title}
                        sx={{ height: "150px", width: "100%", display: { xs: 'none', sm: 'block' } }}
                    />
                </Link>
                <CardContent>
                    <Link
                        underline="none"
                        href={url || "#"}
                        target="_blank"
                        rel="noopener noreferrer"
                        title={title}
                    >   
                        {title ? (
                            <Typography gutterBottom >
                                {(title && title.slice(0, 75)) + "..." ||
                                "No title available"}
                            </Typography>
                        ) : (
                            <Typography gutterBottom>
                                {title}
                            </Typography>
                        )}
                    </Link>
                    {description ? (
                        <Typography
                            variant="body2"
                            color="textSecondary"
                            component="p"
                        >
                            {(description && description.slice(0, 100)) + "..." ||
                            "No description available"}
                        </Typography>
                    ) : (
                        <Typography variant="body2" color="textSecondary" component="p">
                            {description}
                        </Typography>
                    )}
                    <Typography variant="subtitle1" color="text.secondary" textAlign="right">
                        {
                            formatDistanceStrict(
                                new Date(publishedAt),
                                new Date(),
                                {
                                addSuffix: true,
                                }
                            )
                        }
                    </Typography>
                </CardContent>
                <CardActions disableSpacing>
                    <IconButton aria-label="add to favorites">
                        <FavoriteIcon />
                    </IconButton>
                    <IconButton aria-label="share">
                        <ShareIcon />
                    </IconButton>
                </CardActions>
            </Card>
        </Grid>
    </>
    );
};

export default NewsCard;
  