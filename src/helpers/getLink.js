export const getLink = (link) => {
  if (link === null || link === "") return false;
  else link = link.tolinking();
  return link.replace(/(<([^>]+)>)/gi, "");
};
