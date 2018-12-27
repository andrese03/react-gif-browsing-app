import React, { useState, useEffect } from 'react';
import {
  Container,
  Header,
  Grid,
  Divider,
  Button,
} from 'semantic-ui-react';

import './GifsPage.styles.scss';

import { searchGIFS } from '../services/giphy/giphy.services';
import GiphyItem from '../components/GiphyItem/GiphyItem';
import GiphySearchInput from '../components/GiphySearchInput/GiphySearchInput';
import SegmentArea from '../components/SegmentArea/SegmentArea';
import Lightbox from '../components/Lightbox/Lightbox';

const GifsPage = () => {
  // States
  const itemsPerPage = 24;
  const [lighboxItemIndex, setLightboxItemIndex] = useState(-1);
  const [lightboxItem, setLightboxItem] = useState(null);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [text, setText] = useState('');
  const [paginatedText, setPaginatedText] = useState('');
  const [totalGifs, setTotalGifs] = useState(0);
  const [gifs, setGifs] = useState([]);
  const [loading, setLoading] = useState(false);

  // Fetch GIFs from scratch
  const fetchGIFs = async () => {
    setLoading(true);
    const result = await searchGIFS(text, itemsPerPage, 0);
    setGifs(result.data);
    setTotalGifs(result.pagination.total_count);
    setCurrentPage(1);
    setLoading(false);
  };

  // Append GIFs to the search
  const appendGIFs = async () => {
    setLoading(true);
    const offset = currentPage * itemsPerPage;
    const result = await searchGIFS(text, itemsPerPage, offset);
    setGifs([...gifs, ...result.data]);
    setTotalGifs(result.pagination.total_count);
    setCurrentPage(currentPage + 1);
    setLoading(false);
  };

  const handleSearch = (value) => {
    setText(value);
  };

  const lighboxAdapter = gif => ({
    id: gif.id,
    title: gif.slug,
    alt: gif.slug,
    url: gif.images.original.url,
  });

  const handleLightbox = (isOpen, giphyObject, index) => {
    const item = lighboxAdapter(giphyObject);
    setIsLightboxOpen(isOpen);
    setLightboxItem(item);
    setLightboxItemIndex(index);
  };

  const handleLightboxMove = (direction) => {
    const index = lighboxItemIndex + direction;
    if (index < 0 || index >= gifs.length) {
      return;
    }
    const giphyObject = gifs[index];
    const item = lighboxAdapter(giphyObject);
    setLightboxItem(item);
    setLightboxItemIndex(index);
  };

  // Do the Search when text Changes
  useEffect(() => {
    fetchGIFs();
  }, [text]);

  // Update Pagination Results when the gif lists is altered
  useEffect(() => {
    setPaginatedText(`Showing ${gifs.length} of ${totalGifs}`);
  }, [gifs, totalGifs]);

  return (
    <Container className="gifpages-container">

      {/* Our Precious Lightbox */}
      <Lightbox
        open={isLightboxOpen}
        onClose={() => setIsLightboxOpen(false)}
        item={lightboxItem}
        onNextItem={() => handleLightboxMove(1)}
        onPreviousItem={() => handleLightboxMove(-1)}
      />

      {/* Beautiful and Simple Header Area */}
      <Header textAlign="center" as="h1">
        {'GIF Browsing App'}
        <Header.Subheader>
          {'Come with us and take a look at our beautiful set of Gifs. 💅'}
        </Header.Subheader>
      </Header>

      {/* Search Area */}
      <Container className="gifpages-search-container">
        <GiphySearchInput
          onChange={handleSearch}
          loading={loading}
          debounce={250}
        />
      </Container>

      {/* Oh la la, such divider! */}
      <Divider />

      {/* No GIFs */}
      {!gifs.length && (
        <SegmentArea message="Type something on the searh field above!" />
      )}

      {/* GIFs */}
      {!!gifs.length && (
        <>
          {/* Grid System to Display Each Gif */}
          <Grid columns={3}>
            {gifs.map((gif, index) => (
              <Grid.Column key={gif.id}>
                <GiphyItem
                  item={gif}
                  onClick={() => handleLightbox(true, gif, index)}
                />
              </Grid.Column>
            ))}
          </Grid>

          {/* Majestic divider */}
          <Divider />

          {/* Actions */}
          <Container className="gifpages-button-container" textAlign="center">
            <Button
              loading={loading}
              color="red"
              content="More!"
              icon="heart"
              label={{ as: 'span', basic: true, content: paginatedText }}
              labelPosition="right"
              disabled={gifs.length >= totalGifs || loading}
              onClick={appendGIFs}
            />
          </Container>
        </>
      )}
    </Container>
  );
};

export default GifsPage;
