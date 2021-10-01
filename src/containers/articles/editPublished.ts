import { connect } from 'react-redux';

import { updateArticle, getSingleArticle, resetEditArticle } from 'actions/articles';
import { EditArticle } from 'components/articles';
import { AppState } from 'types';


const mapStateToProps = (state: AppState) => ({
    updatedArticle: state.articles.updatedArticle,
    article: state.articles.article
});
const mapDispatchToProps = { onUpdate : updateArticle, fetchArticle: getSingleArticle, resetEditArticle };

export const EditPublishedArticlePage = connect(
  mapStateToProps,
  mapDispatchToProps
)(EditArticle);
