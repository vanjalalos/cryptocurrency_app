import { FC } from 'react';
import { ActivityIndicator } from 'react-native';
import { colors } from '../../globalStyle/colors';

interface ILoader {
  isLoading: boolean;
  sizeLoader: number | 'small' | 'large' | undefined;
}
const Loader: FC<ILoader> = ({ isLoading, sizeLoader }) => {
  return (
    <>
      {isLoading && (
        <ActivityIndicator size={sizeLoader} color={colors.primary} />
      )}
    </>
  );
};

export default Loader;
