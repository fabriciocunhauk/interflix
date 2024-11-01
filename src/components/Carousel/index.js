import React, { useState } from 'react';
import { VideoCardGroupContainer, DeleteButton, Title, ExtraLink } from './styles.js';
import VideoCard from './components/VideoCard/index.js';
import  { Slider, SliderItem } from './components/Slider/index.js';
import videosRepository from '../../repositories/videos.js';
import closeIcon from '../../assets/imagens/icon-close.svg';

function Carousel({
  ignoreFirstVideo,
  category,
  color,
  setUpdatedDB
}) {
  const categoryTitle = category.titulo;
  const categoryColor = category.cor;
  const categoryExtraLink = category.link_extra;
  const videos = category.videos;

  function handleDelete(videoId) {
    videosRepository.deleteVideo(videoId)
      .then(result => {
        if (result.ok) {
          setUpdatedDB(true)
        }
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
            <SliderItem key={video.id}>

              <DeleteButton color={color} onClick={() => handleDelete(video.id)} >
                <img src={closeIcon} alt="close button" />
              </DeleteButton>
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
