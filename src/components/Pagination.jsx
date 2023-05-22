import React, {useEffect} from 'react';
import { Pagination } from '@mui/material';
import { PaginationItem } from '@mui/lab';
import {Link} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getPosts } from '../actions/posts';

import useStyles from './styles';

const Paginate = ({page}) => {
    const {numberOfPages} = useSelector((state) => state.posts);
    const {classes} = useStyles();
    const dispatch = useDispatch();

    useEffect(() => {
      if(page) dispatch(getPosts(page));
    }, [page]);

    return (
        <Pagination
          classes={{ul: classes.ul}}
          count={numberOfPages}
          page={Number(page) || 1}
          variant="outlined"
          color="primary"
          renderItem={(item) => (
            <PaginationItem {...item} component={Link} to={`/posts?page=${item.page}`} />
          )}
        />
    );
};
export default Paginate;