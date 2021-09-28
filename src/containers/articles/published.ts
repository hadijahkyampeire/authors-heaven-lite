import { connect } from 'react-redux';

import { fetchArticles } from 'actions/articles';
import { Articles } from 'components/articles';
import { AppState } from 'types';


const mapStateToProps = (state: AppState) => ({
  articles: state.articles.articles
});
const mapDispatchToProps = { fetchArticles };

export const PublishedArticlesPage = connect(
  mapStateToProps,
  mapDispatchToProps
)(Articles);
