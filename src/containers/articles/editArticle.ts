import { connect } from 'react-redux';

import { getSingleArticle, updateArticle, resetEditArticle } from 'actions/articles';
import { EditArticle } from 'components/articles';
import { AppState } from 'types';


const mapStateToProps = (state: AppState) => ({
    updatedArticle: state.articles.updatedArticle,
    article: state.articles.article
});
const mapDispatchToProps = { onUpdate : updateArticle, fetchArticle: getSingleArticle, resetEditArticle };

export const EditArticlePage = connect(
  mapStateToProps,
  mapDispatchToProps
)(EditArticle);
