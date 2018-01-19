export const storeFilters = filters =>  {
    return {
      type: 'STORE_FILTERS',
      filters: filters
    }
};

export const removeFilter = key =>  {
    return {
      type: 'REMOVE_FILTER',
      key: key
    }
};

export const clearAll = () => {
    return {
      type: 'CLEAR_ALL'
    }
};



export const STORE_FILTERS = 'STORE_FILTERS';
export const REMOVE_FILTER = 'REMOVE_FILTER';
export const CLEAR_ALL = 'CLEAR_ALL';
