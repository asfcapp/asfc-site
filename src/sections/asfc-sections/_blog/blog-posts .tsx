'use client';

import { useState } from 'react';

import Box from '@mui/material/Box';
import Pagination, { paginationClasses } from '@mui/material/Pagination';

import SingleBlogPost from './single-blog-post';

// ----------------------------------------------------------------------

type Props = {
  blogs: any;
};

export default function BlogPosts({ blogs }: Props) {
  const [currentPage, setCurrentPage] = useState(1);

  // Handle page change
  const handlePageChange = (event: any, page: any) => {
    setCurrentPage(page);
  };

  const totalItems = blogs.length; // calculate total items
  const itemsPerPage = 8; // items per page
  const totalPages = Math.ceil(totalItems / itemsPerPage); // calculate total pages to represent all items

  // Calculate start and end index based on the current page
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  // Slice the blogs array based on the current page
  const currentBlogs = blogs.slice(startIndex, endIndex);

  return (
    <>
      <Box
        sx={{
          columnGap: 4,
          display: 'grid',
          rowGap: { xs: 4, md: 5 },
          gridTemplateColumns: {
            xs: 'repeat(1, 1fr)',
            sm: 'repeat(2, 1fr)',
          },
        }}
      >
        {/* Render the blogs for the current page */}
        {currentBlogs.map((blog: any) => (
          <SingleBlogPost key={blog._id} blog={blog} />
        ))}
      </Box>

      <Pagination
        count={totalPages}
        color="primary"
        page={currentPage} // current page
        onChange={handlePageChange} // handle page click
        sx={{
          py: { xs: 8, md: 10 },
          [`& .${paginationClasses.ul}`]: {
            justifyContent: 'center',
          },
        }}
      />
    </>
  );
}
