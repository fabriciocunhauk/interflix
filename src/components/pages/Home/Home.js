import React, { useEffect, useState } from 'react';
import BannerMain from '../../BannerMain/index.js';
import Carousel from '../../Carousel/index.js';
// import categoriasRepository from '../../../repositories/categorias.js'
import PageDefault from '../../PageDefault/PageDefault.js';

 function Home() {

  const [dadosIniciais, setDadosIniciais] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8000/categorias?_embed=videos')
    .then(response =>  response.json()).then(categories => setDadosIniciais(categories));
  }, []);

    console.log(dadosIniciais);

  return (
    <PageDefault paddingAll={0}>

      {dadosIniciais.length === 0 && (<div>Loading...</div>)}

      {dadosIniciais.map((categoria, indice) => {
        if (indice === 0) {
          return (
            <div key={categoria.id}>
              <BannerMain
                videoTitle={dadosIniciais[0].videos[0].titulo}
                url={dadosIniciais[0].videos[0].url}
                videoDescription={"O que e o front-end"}
              />

              <Carousel
                ignoreFirstVideo
                category={dadosIniciais[0]}
              />
            </div>
          );
        }

        return (
          <Carousel
            key={categoria.id}
            category={categoria}
          />
        );
      })}

      {/* <BannerMain
        videoTitle={dadosIniciais.categorias[0].videos.titulo}
        url={dadosIniciais.categorias[0].videos[0].url}
        videoDescription={"O que e o front-end"}
      />

      <Carousel
        ignoreFirstVideo
        category={dadosIniciais.categorias[0]}
      />

      <Carousel
        category={dadosIniciais.categorias[1]}
      />

      <Carousel
        category={dadosIniciais.categorias[2]}
      />

      <Carousel
        category={dadosIniciais.categorias[3]}
      />

      <Carousel
        category={dadosIniciais.categorias[4]}
      />

      <Carousel
        category={dadosIniciais.categorias[5]}
      /> */}
    </PageDefault>
  );
}

export default Home;