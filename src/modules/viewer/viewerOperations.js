import * as actions from './viewerActions';
import Api from '../../api';

export function fetchViewer() {
  return async function fetchViewerThunk(dispatch) {
    try {
      dispatch(actions.fetchViewer.start());

      const result = await Api.Viewer.get();

      dispatch(actions.fetchViewer.success(result.data));
    } catch (err) {
      dispatch(actions.fetchViewer.error({ message: err.message }));
    }
  };
}
