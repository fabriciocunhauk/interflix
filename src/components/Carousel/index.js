import React from 'react';
import { VideoCardGroupContainer, CloseButton, Title, ExtraLink } from './styles';
import { useHistory } from 'react-router-dom';
import VideoCard from './components/VideoCard';
import Slider, { SliderItem } from './components/Slider';
import videosRepository from '../../repositories/videos';

function Carousel({
  ignoreFirstVideo,
  category,
}) {

  const history = useHistory();

  const categoryTitle = category.titulo;
  const categoryColor = category.cor;
  const categoryExtraLink = category.link_extra;
  const videos = category.videos;

  function handleDelete(videoId) {
    videosRepository.deleteVideo(videoId)
      .then(() => {
        history.push("/");
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
        {videos.map((video, index) => {
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
