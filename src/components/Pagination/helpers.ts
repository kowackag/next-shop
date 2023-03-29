export const createLinkArr = (page: number, length: number, path: string) => {
  const startPage = page - length / 2 > 0 ? page - length / 2 : 1;
  const links = Array.from({ length: 10 }, (_, i) => i + startPage);

  const pagination = links.map((item) => {
    return {
      href: `/${path}/${item}/`,
      num: item,
    };
  });
  return pagination;
};
