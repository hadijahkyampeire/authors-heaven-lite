import { connect } from 'react-redux';

import { getSingleArticle, deleteArticle } from 'actions/articles';
import { Article } from 'components/articles';
import { AppState } from 'types';
import { getLoggedUser } from 'auth';


const mapStateToProps = (state: AppState) => ({
  article: state.articles?.article,
  email: getLoggedUser(state)
});
const mapDispatchToProps = { fetchArticle: getSingleArticle, deleteArticle };

export const PublishedArticlePage = connect(
  mapStateToProps,
  mapDispatchToProps
)(Article);
