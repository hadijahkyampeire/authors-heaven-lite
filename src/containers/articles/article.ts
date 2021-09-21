import { connect } from 'react-redux';

import { getSingleArticle } from 'actions/articles';
import { Article } from 'components/articles';
import { AppState } from 'types';


const mapStateToProps = (state: AppState) => ({
  article: state.articles?.article
});
const mapDispatchToProps = { fetchArticle: getSingleArticle };

export const ArticlePage = connect(
  mapStateToProps,
  mapDispatchToProps
)(Article);
