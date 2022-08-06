import React, { useState, useEffect } from "react";
import {
    Typography,
    Card,
    CardContent,
    CardActions,
    Grid,
    CardMedia,
    Skeleton,
} from "@mui/material";
import { formatDistanceStrict } from "date-fns";
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import Link from "@mui/material/Link";
  
const NewsCard = ({ title, author, description, url, urlToImage, publishedAt, content }) => {
    const [currentImage, setCurrentImage] = useState(null);
    const [loadingImage, setLoadingImage] = useState(true);

    const fetchImage = (src) => {
        const loadingImage = new Image();
        loadingImage.src = src;
        loadingImage.onload = () => {
          setCurrentImage(loadingImage.src);
          setLoadingImage(false);
        };
      };
    
      useEffect(() => {
        fetchImage(urlToImage);
      }, [urlToImage]);

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

                    {!loadingImage ? (
                        <CardMedia
                            image={currentImage}
                            title={title || ""}
                            sx={{ height: "150px", width: "100%", display: { xs: 'none', sm: 'block' } }}
                        />
                    ) : (
                        <Skeleton
                            variant="rect"
                            animation="wave"
                            sx={{ height: "150px", width: "100%", display: { xs: 'none', sm: 'block' } }}
                        />
                    )}
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
  