import Icon from 'components/common/Icon/Icon';
import Text from 'components/common/Text/Text';
import BookmarkButton from 'components/home/buttons/BookmarkButton/BookmarkButton';
import useDialog from 'hooks/app/useDialog';
import useInterestFields from 'hooks/interest/useInterestFields';
import { memo, useId } from 'react';
import { Image, Pressable, View } from 'react-native';
import { Event } from 'types/event';
import eventRowCardStyles from './EventRowCard.style';

interface Props {
  event: Event;
  handleEventPress: (eventId: number) => void;
  type?: 'default' | 'bookmark';
}

const EventRowCard = ({ event, handleEventPress, type = 'default' }: Props) => {
  const { openDialog } = useDialog();
  const city = event.streetRoadAddress.split(' ');
  const fieldId = useId();

  const { generateInterestFieldTags } = useInterestFields();

  const handlePress = () => {
    if (!event.bookmarkId && !event.eventInfoId) {
      openDialog({
        type: 'validate',
        text: '잘못된 접근입니다!',
      });
      return;
    }
    if (event.bookmarkId) {
      handleEventPress(event.bookmarkId);
      return;
    }
    if (event.eventInfoId) {
      handleEventPress(event.eventInfoId);
    }
  };

  return (
    <View style={eventRowCardStyles.container}>
      <Pressable onPress={() => handlePress()}>
        <Image
          style={eventRowCardStyles.image}
          source={{ uri: event.mainImageUrl }}
        />
      </Pressable>
      <View style={eventRowCardStyles.eventInfo}>
        <View style={eventRowCardStyles.fieldBoxContainer}>
          {event.fieldTypes.map((field, _id) => (
            <View key={`${fieldId}${_id}`} style={eventRowCardStyles.fieldBox}>
              <Text variant="body3" color="darkGrey">
                {
                  generateInterestFieldTags().find(
                    (fieldElement) => fieldElement.value === field,
                  )?.label
                }
              </Text>
            </View>
          ))}
        </View>
        <Text
          ellipsizeMode="tail"
          numberOfLines={1}
          style={eventRowCardStyles.eventTitle}
        >
          {event.eventTitle}
        </Text>
        <Text variant="body3" color="background">
          {event.eventDate.substring(0, 10).replaceAll('-', '.')}
        </Text>
        <View style={eventRowCardStyles.subInfo}>
          <View style={eventRowCardStyles.subInfoText}>
            <Icon name="IconPlace" fill="main" size={10} />
            <Text variant="body3" color="background">
              {city[1]}
            </Text>
          </View>
          <View style={eventRowCardStyles.subInfoText}>
            <Icon name="IconUser" fill="main" size={10} />
            <Text variant="body3" color="background">
              {event.totalApplicantCount}
            </Text>
          </View>
        </View>
      </View>
      <View style={eventRowCardStyles.bookmarkButtonWrapper}>
        <BookmarkButton
          eventInfoId={event.eventInfoId}
          isEventBookmarked={type === 'bookmark' ? true : event.isBookmarked}
          type={type === 'default' ? 'rowEvent' : 'bookmark'}
        />
      </View>
    </View>
  );
};

export default memo(EventRowCard);
