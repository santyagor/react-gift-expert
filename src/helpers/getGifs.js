export const getGifs = async( category ) =>{
    const url = `https://api.giphy.com/v1/gifs/search?apikey=drd5c6pSTZqLVIbrx9JJPCtgvcs6slie&q=${ category }&limit=10`;
    const rest = await fetch( url );
    const { data } = await rest.json();
    const gifs = data.map( img=> ({
      id: img.id,
      title: img.title,
      url: img.images.downsized_medium.url
    }));
    return gifs;
  }