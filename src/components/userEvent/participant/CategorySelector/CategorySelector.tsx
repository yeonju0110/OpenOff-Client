import Icon from 'components/common/Icon/Icon';
import Text from 'components/common/Text/Text';
import { FieldCode } from 'constants/interest/interest';
import { CONSTANT_PARTICIPANT } from 'constants/userEvent/participant/participantConstants';
import React, { useState } from 'react';
import { LayoutChangeEvent, TouchableOpacity, View } from 'react-native';
import { Field } from 'types/interest';
import MENT_PARTICIPANT from 'constants/userEvent/participant/participantMessage';
import Tag from '../Tag/Tag';
import TagGroup from '../Tag/TagGroup';
import categorySelectorStyles from './CategorySelector.style';

interface Props {
  field: Field[];
  setField: React.Dispatch<Field[]>;
}

const CategorySelector = ({ field, setField }: Props) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [barHeight, setBarHeight] = useState<number>(
    CONSTANT_PARTICIPANT.BAR_INITIAL_HEIGHT,
  );

  const activeField = field.find((fieldData) => fieldData.isActive);

  const handleHeight = (e: LayoutChangeEvent) => {
    const { height } = e.nativeEvent.layout;
    setBarHeight(height);
  };

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

  const handleField = (activeFieldCode: FieldCode | null) => {
    const newFieldData = field.map((fieldData) => ({
      ...fieldData,
      isActive: activeFieldCode !== null && fieldData.value === activeFieldCode,
    }));

    setField(newFieldData);
    setIsOpen(false);
  };

  return (
    <View style={categorySelectorStyles.wrapper}>
      <TouchableOpacity
        activeOpacity={0.6}
        style={categorySelectorStyles.container}
        hitSlop={{ right: 11 }}
        onPress={handleOpen}
        onLayout={handleHeight}
      >
        <Text style={categorySelectorStyles.title}>
          {activeField?.label ?? MENT_PARTICIPANT.MAIN.ALL}
        </Text>
        <Icon
          name={isOpen ? 'IconArrowUp' : 'IconArrowDown'}
          size={13}
          fill="white"
        />
      </TouchableOpacity>

      {isOpen && (
        <TagGroup style={{ top: barHeight }}>
          <Tag
            label={MENT_PARTICIPANT.MAIN.ALL}
            isSelected={!activeField}
            onPress={() => handleField(null)}
          />
          {field.map((fieldData) => (
            <Tag
              key={fieldData.value}
              label={fieldData.label}
              isSelected={fieldData.isActive}
              onPress={() => handleField(fieldData.value)}
            />
          ))}
        </TagGroup>
      )}
    </View>
  );
};

export default CategorySelector;
