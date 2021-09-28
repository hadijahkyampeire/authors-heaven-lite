import { connect } from 'react-redux';

import { updateArticle } from 'actions/articles';
import { EditArticle } from 'components/articles';
import { AppState } from 'types';


const mapStateToProps = (state: AppState) => ({
    updatedArticle: state.articles.updatedArticle,
    article: state.articles.article
});
const mapDispatchToProps = { onUpdate : updateArticle };

export const EditArticlePage = connect(
  mapStateToProps,
  mapDispatchToProps
)(EditArticle);
