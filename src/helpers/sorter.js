const sortByUpvotes = links => {
  return links.sort((a, b) => {
    return (b.upvote - b.downvote) - (a.upvote - a.downvote) || b.votedAt - a.votedAt;
  });
};

const sortByCreateTime = links => {
  return links.sort((a, b) => {
    return (b.createdAt) - (a.createdAt) || b.votedAt - a.votedAt;
  });
};

export default (links, sortBy) => {
  const linksCopy = [...links]; 

  if (sortBy === 'most') {
    return sortByUpvotes(linksCopy);
  }

  if (sortBy === 'less') {
    return sortByUpvotes(linksCopy).reverse();
  }

  if (sortBy === 'newest') {
    return sortByCreateTime(linksCopy);
  }

  if (sortBy === 'oldest') {
    return sortByCreateTime(linksCopy).reverse();
  }

  return links;
}