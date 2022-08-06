import * as React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper";

function MainFeaturedPost(props) {
  const { posts } = props;
  //console.log(post);
  return (
    <Swiper
      spaceBetween={30}
      loop={true}
      navigation={true}
      pagination={{
        clickable: true,
      }}
      autoplay={{
        delay: 20500,
        disableOnInteraction: false,
      }}
      modules={[Autoplay, Navigation, Pagination]}
      className="mySwiper"
      >
      {posts.map((post) => {
        return (
          <SwiperSlide key={post.publishedAt}>
            <Link
              href={`${post.url}`}
              target="_blank"
              underline="none"
              sx={{ color: "inherit" }}
            >
              <Stack spacing={1}>
                <Grid container>
                  <Grid item md={6}>
                    <Box
                      sx={{
                        bottom: 0,
                        left: 0,
                        position: 'absolute',
                        color: "#FFF",
                        pr: "60px",
                        pl: "60px",
                        pb: "20px",
                        pt: "20px",
                        backgroundColor: 'rgba(0,0,0,.5)',
                      }}
                    >
                      <Typography fontWeight="bold" variant="h4">
                        {post.title}
                      </Typography>
                      <Typography  color="inherit" paragraph>
                        {post.description}
                      </Typography>
                    </Box>
                  </Grid>
                </Grid>
                <div>
                  <img
                    sx={{
                      backgroundColor: 'rgba(0,0,0,.3)',
                    }}
                    src={post.urlToImage}
                    alt={post.title}
                    style={{ 
                      height: "60vh",
                      width: "100%",
                    }}
                  />
                </div>
              </Stack>
            </Link>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}
export default MainFeaturedPost;
