import { create } from 'zustand';

import useDynamicFormStore from './useDynamicFormStore';
import useStaticFormStore from './useStaticFormStore';

const useIntegratedFormStore = create(() => ({
  ...useStaticFormStore(),
  ...useDynamicFormStore(),
}));

export default useIntegratedFormStore;
