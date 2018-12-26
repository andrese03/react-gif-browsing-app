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
import SegmentArea from './SegmentArea';

const GifsPage = () => {
  // States
  const itemsPerPage = 24;
  const [currentPage, setCurrentPage] = useState(1);
  const [text, setText] = useState('');
  const [paginatedText, setPaginatedText] = useState('');
  const [totalGifs, setTotalGifs] = useState(0);
  const [gifs, setGifs] = useState([]);
  const [loading, setLoading] = useState(false);

  // Common Functions
  const fetchGIFs = async () => {
    setLoading(true);
    const result = await searchGIFS(text, itemsPerPage, 0);
    setGifs(result.data);
    setTotalGifs(result.pagination.total_count);
    setCurrentPage(1);
    setLoading(false);
  };

  const appendGIFs = async () => {
    setLoading(true);
    const offset = currentPage * itemsPerPage;
    const result = await searchGIFS(text, itemsPerPage, offset);
    setGifs([...gifs, ...result.data]);
    setTotalGifs(result.pagination.total_count);
    setCurrentPage(currentPage + 1);
    setLoading(false);
  };

  const handleSearch = async (value) => {
    setText(value);
  };

  // Do the search
  useEffect(() => {
    fetchGIFs();
  }, [text]);

  // Update paginatedText
  useEffect(() => {
    setPaginatedText(`Showing ${gifs.length} of ${totalGifs}`);
  }, [gifs, totalGifs]);

  return (
    <Container className="gifpages-container">

      <Header textAlign="center" as="h1">
        {'GIF Browsing App'}
        <Header.Subheader>
          {'Come with us and take a look at our beautiful set of Gifs. 💅'}
        </Header.Subheader>
      </Header>

      <Container className="gifpages-search-container">
        <GiphySearchInput onChange={handleSearch} loading={loading} debounce={250} />
      </Container>

      <Divider />

      {/* No GIFs */}
      {!gifs.length && (
        <SegmentArea message="Type something on the searh field above!" />
      )}

      {/* GIFs */}
      {!!gifs.length && (
        <>
          <Grid columns={3}>
            {gifs.map(g => (
              <Grid.Column key={g.id}>
                <GiphyItem item={g} />
              </Grid.Column>
            ))}
          </Grid>
          <Divider />
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
