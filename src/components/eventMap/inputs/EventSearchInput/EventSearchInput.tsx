import { useFocusEffect } from '@react-navigation/native';
import Icon from 'components/common/Icon/Icon';
import { StackMenu } from 'constants/app/menu';
import MENT_EVENT_MAP from 'constants/eventMap/eventMapMessage';
import useNavigator from 'hooks/navigator/useNavigator';
import { memo, useCallback, useState } from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useEventMapStore } from 'stores/EventMap';
import { colors } from 'styles/theme';
import eventSearchInput from './EventSearchInput.style';

interface Props {
  handleSearch: (value: string) => void;
}

const EventSearchInput = ({ handleSearch }: Props) => {
  const { stackNavigation } = useNavigator();
  const { startEndDate } = useEventMapStore();
  const [isSearched, setIsSearched] = useState<boolean>(false);
  const [searchValue, setSearchValue] = useState<string>('');

  const handleCalendar = () => {
    stackNavigation.navigate(StackMenu.DatePick);
  };

  const handleSearchPress = () => {
    handleSearch(searchValue);
    setIsSearched(true);
  };

  const handleResetPress = () => {
    handleSearch('');
    setSearchValue('');
    setIsSearched(false);
  };

  useFocusEffect(
    useCallback(() => {
      return () => {
        handleResetPress();
      };
    }, []),
  );

  return (
    <View style={eventSearchInput.absoluteContainer}>
      <View style={eventSearchInput.container}>
        {isSearched ? (
          <TouchableOpacity
            onPress={handleResetPress}
            style={eventSearchInput.searchButton}
          >
            <Icon name="IconExit" size={15} fill="background" />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            onPress={handleSearchPress}
            style={eventSearchInput.searchButton}
          >
            <Icon name="IconSearch" size={21} fill="background" />
          </TouchableOpacity>
        )}

        <TextInput
          value={searchValue}
          onChangeText={(value) => {
            setSearchValue(value);
            if (isSearched) setIsSearched(false);
          }}
          style={eventSearchInput.searchInput}
          placeholder={MENT_EVENT_MAP.MAIN.SEARCH.PLACEHOLDER}
          placeholderTextColor={colors.grey}
        />

        {startEndDate.endDay && startEndDate.startDay && (
          <View style={eventSearchInput.textContainer}>
            <Text style={eventSearchInput.calendarText}>
              {MENT_EVENT_MAP.MAIN.SEARCH.DATE_FORMAT(
                parseInt(startEndDate.startDay.substring(6, 8), 10),
                parseInt(startEndDate.startDay.substring(8, 10), 10),
              )}
            </Text>
            <Text style={eventSearchInput.calendarText}>-</Text>
            <Text style={eventSearchInput.calendarText}>
              {MENT_EVENT_MAP.MAIN.SEARCH.DATE_FORMAT(
                parseInt(startEndDate.endDay.substring(6, 8), 10),
                parseInt(startEndDate.endDay.substring(8, 10), 10),
              )}
            </Text>
          </View>
        )}

        <TouchableOpacity
          onPress={handleCalendar}
          style={eventSearchInput.calendarButton}
        >
          <Icon name="IconCalendar" size={18} fill="background" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default memo(EventSearchInput);
