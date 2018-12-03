export default (links, page, itemPerPage) => {
  const startPoint = (page - 1) * itemPerPage;
  return links.slice(startPoint, startPoint + itemPerPage);
}