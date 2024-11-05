import React from 'react';
import { VideoCardGroupContainer, DeleteButton, Title, ExtraLink, CategoryHeader } from './styles.js';
import VideoCard from './components/VideoCard/index.js';
import  { Slider, SliderItem } from './components/Slider/index.js';
import videosRepository from '../../repositories/videos.js';
import closeIcon from '../../assets/imagens/icon-close.svg';

function Carousel({
  category,
  color,
  setUpdatedDB
}) {
  const categoryTitle = category.titulo;
  const categoryColor = category.cor;
  const categoryExtraLink = category.link_extra;
  const videos = category.videos;

  function handleDeleteVideo(videoId) {
    videosRepository.deleteVideo(videoId)
      .then(() => setUpdatedDB(true))
  }

  function handleDeleteCategory(categoryId) {
    if (category.id === categoryId) {
      category.videos.forEach(video => {
        handleDeleteVideo(video.id);
      })
    }
    
    videosRepository.deleteCategory(categoryId)
      .then(() => setUpdatedDB(true))
  }

  return (
    <VideoCardGroupContainer>
        {categoryTitle && (
          <CategoryHeader>
            <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "16px" }}>
              <Title style={{ backgroundColor: categoryColor || 'red', }}>
                {categoryTitle}
              </Title>
              {categoryExtraLink &&
                <ExtraLink href={categoryExtraLink.url} target="_blank">
                  {categoryExtraLink.text}
                </ExtraLink>
              }
            </div>

              <DeleteButton padding="16px" color={color} onClick={() => handleDeleteCategory(category.id)}>
                Delete Category
              </DeleteButton>
          </CategoryHeader>
        )}

      <Slider>
        {videos.map((video) => {
          return (
            <SliderItem key={video.id}>
              <DeleteButton color={color} onClick={() => handleDeleteVideo(video.id)} >
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
