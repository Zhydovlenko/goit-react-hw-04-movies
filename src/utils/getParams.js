import queryString from 'query-string';

const getParams = location => queryString.parse(location.search).q;

export default getParams;
