class Pagination {

  constructor(pageSize, itemCount, boxCount, currentPage = 1) {
    this.pageSize = pageSize;
    this.itemCount = itemCount;
    this.boxCount = boxCount;
    this.currentPage = currentPage;
    this.lastPage = this.getLastPage(itemCount, pageSize);
  };

  canMove = (amount) => {
    return this.currentPage + amount >= 1 && this.currentPage + amount <= this.lastPage;
  };

  getLastPage = (items, pages) => {
    return Math.ceil(items / pages);
  };

  nextPage = () => {
    if (this.currentPage >= this.lastPage)
      return this.getPages();
    this.currentPage = this.currentPage + 1;
    return this.getPages();
  };

  previousPage = () => {
    if (this.currentPage === 1)
      return this.getPages();
    this.currentPage = this.currentPage - 1;
    return this.getPages();
  };

  jumpToPage = (page) => {
    this.currentPage = page;
    return this.getPages();
  };

  generatePages = (size, addition) => {
    return Array.from(Array(size).keys(), (_, i) => i + addition);
  };

  getBoxCount = () => {
    const maxPages = Math.ceil(this.itemCount / this.pageSize);
    return this.boxCount > maxPages ? maxPages : this.boxCount;
  };

  getPages = () => {
    const minimumThreshold = Math.floor(this.boxCount / 2);
    const maximumThreshold = this.lastPage - Math.floor(this.boxCount / 2);
    const size = this.getBoxCount();

    if (this.currentPage <= minimumThreshold) {
      return this.generatePages(size, 1);
    }
    if (this.currentPage >= maximumThreshold) {
      const addition = this.lastPage - size + 1;
      return this.generatePages(size, addition);
    }
    const addition = this.currentPage - Math.ceil(this.boxCount / 2) + 1;
    return this.generatePages(size, addition);

  };

  isActivePage = (page) => {
    return this.currentPage === page;
  };

  getCurrentPage = () => {
    return this.currentPage;
  }
}


export default Pagination;