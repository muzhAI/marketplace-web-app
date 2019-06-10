import * as actions from './viewerActions';
import Api from '../../api';
import { colorSetter } from '../../utils/avatarsColorSetter';

export function fetchViewer() {
  return async function fetchViewerThunk(dispatch) {
    try {
      dispatch(actions.fetchViewer.start());

      const result = await Api.Viewer.get();

      const data = colorSetter(result.data);

      dispatch(actions.fetchViewer.success(data));
    } catch (err) {
      dispatch(actions.fetchViewer.error({ message: err.message }));
    }
  };
}
