import FieldButton from 'components/authorize/buttons/FieldButton/FieldButton';
import Text from 'components/common/Text/Text';
import MENT_AUTHORIZE from 'constants/authorize/authorizeMessage';
import { Dispatch, SetStateAction } from 'react';
import { View } from 'react-native';
import { Field } from 'types/interest';
import fieldButtonGroupStyles from './FieldButtonGroup.style';

interface Props {
  fields: Field[];
  setFields: Dispatch<SetStateAction<Field[]>>;
  computedCount: number;
}

const FieldButtonGroup = ({ fields, setFields, computedCount }: Props) => {
  const handleFieldActive = (field: Field) => {
    if (computedCount >= 3 && !field.isActive) return;
    setFields(
      fields.map((mappingField) => {
        if (mappingField.value === field.value) {
          Object.assign(mappingField, { isActive: !mappingField.isActive });
        }
        return mappingField;
      }),
    );
  };
  return (
    <View style={fieldButtonGroupStyles.container}>
      <Text style={fieldButtonGroupStyles.title}>
        {MENT_AUTHORIZE.INTEREST_FIELD.UP_TO_THREE_CAN_BE_SELECTED}
      </Text>
      <View style={fieldButtonGroupStyles.fieldContainer}>
        {fields.map((field) => (
          <FieldButton
            key={field.value}
            field={field}
            handlePress={handleFieldActive}
          />
        ))}
      </View>
    </View>
  );
};

export default FieldButtonGroup;
