import React, { useState } from 'react';
import { VideoCardGroupContainer, CloseButton, Title, ExtraLink } from './styles.js';
import VideoCard from './components/VideoCard/index.js';
import  { Slider, SliderItem } from './components/Slider/index.js';
import videosRepository from '../../repositories/videos.js';

function Carousel({
  ignoreFirstVideo,
  category,
}) {
  const categoryTitle = category.titulo;
  const categoryColor = category.cor;
  const categoryExtraLink = category.link_extra;
  const videos = category.videos;

  const [videosToDisplay, setVideosToDisplay] = useState(videos);

  function handleDelete(videoId) {
    videosRepository.deleteVideo(videoId)
      .then(result => {
        const updatedDb = videos.filter(video => video.id !== videoId)

        setVideosToDisplay(updatedDb)
      })
  }

  return (
    <VideoCardGroupContainer>
      {categoryTitle && (
        <>
          <Title style={{ backgroundColor: categoryColor || 'red' }}>
            {categoryTitle}
          </Title>
          {categoryExtraLink &&
            <ExtraLink href={categoryExtraLink.url} target="_blank">
              {categoryExtraLink.text}
            </ExtraLink>
          }
        </>
      )}
      <Slider>
        {videosToDisplay.map((video, index) => {
          if (ignoreFirstVideo && index === 0) {
            return null;
          }

          return (
            <SliderItem key={video.titulo}>

              <CloseButton onClick={() => handleDelete(video.id)} />
              <VideoCard
                videoTitle={video.titulo}
                videoURL={video.url}
                categoryColor={categoryColor}
              />
            </SliderItem>
          );
        })}
      </Slider>
    </VideoCardGroupContainer>
  );
}

export default Carousel;
