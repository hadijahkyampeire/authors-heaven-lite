import { connect } from 'react-redux';

import { fetchArticles, deleteArticle } from 'actions/articles';
import { Articles } from 'components/articles';
import { AppState } from 'types';
import { getLoggedUser } from 'auth';


const mapStateToProps = (state: AppState) => ({
  articles: state.articles.articles,
  email: getLoggedUser(state)
});
const mapDispatchToProps = { fetchArticles, deleteArticle };

export const PublishedArticlesPage = connect(
  mapStateToProps,
  mapDispatchToProps
)(Articles);
