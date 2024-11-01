import React, { useEffect, useState } from 'react';
import BannerMain from '../../BannerMain/index.js';
import Carousel from '../../Carousel/index.js';
import categoriasRepository from '../../../repositories/categorias.js'
import PageDefault from '../../PageDefault/PageDefault.js';

 function Home() {

  const [dadosIniciais, setDadosIniciais] = useState([]);

  useEffect(() => {
    categoriasRepository.getAllWithVideos()
      .then((categoriasComVideos) => {
        setDadosIniciais(categoriasComVideos);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);
  
  return (
    <PageDefault>

      {dadosIniciais.length === 0 && (<div>Loading...</div>)}

      {dadosIniciais.map((categoria, index) => {
        if (index === 0) {
          return (
            <div key={categoria.id}>
              {categoria.videos.length && 
                <BannerMain
                  videoTitle={dadosIniciais[0].videos[0].titulo}
                  url={dadosIniciais[0].videos[0].url}
                  videoDescription={"O que e o front-end"}
                />
              }

              <Carousel
                ignoreFirstVideo
                category={dadosIniciais[0]}
                color={dadosIniciais[0].cor}
              />
            </div>
          );
        }

        return (
          <Carousel
            key={categoria.id}
            category={categoria}
            color={categoria.cor}
          />
        );
      })}
    </PageDefault>
  );
}

export default Home;