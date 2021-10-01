import { connect } from 'react-redux';

import { createArticle } from 'actions/articles';
import { AddArticle } from 'components/articles';
import { AppState } from 'types';


const mapStateToProps = (state: AppState) => ({
  newArticle: state.articles.newArticle
});
const mapDispatchToProps = { onSubmit : createArticle };

export const AddArticlePage = connect(
  mapStateToProps,
  mapDispatchToProps
)(AddArticle);
