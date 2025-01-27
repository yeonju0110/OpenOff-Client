import Text from 'components/common/Text/Text';
import { TouchableOpacity } from 'react-native';
import tagStyles from './Tag.style';

interface Props {
  label: string;
  isSelected: boolean;
  onPress: () => void;
}

const Tag = ({ label, isSelected, onPress }: Props) => {
  return (
    <TouchableOpacity
      style={[tagStyles.container, isSelected && tagStyles.selectedContainer]}
      activeOpacity={0.9}
      onPress={onPress}
    >
      <Text variant="body2" color={isSelected ? 'white' : 'main'}>
        {label}
      </Text>
    </TouchableOpacity>
  );
};

export default Tag;
